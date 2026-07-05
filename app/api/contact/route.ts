import { readFileSync } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "devucenmarek@gmail.com";
const LOGO_CID = "markclaude-logo";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml({ name, email, message }: { name: string; email: string; message: string }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const receivedAt = new Date().toLocaleString("sk-SK", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Bratislava",
  });

  return `
<!DOCTYPE html>
<html lang="sk">
  <body style="margin:0; padding:0; background-color:#09090B; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; background-color:#09090B;">
      <tr>
        <td style="padding:44px 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; max-width:900px; margin:0 auto;">
            <tr>
              <td style="padding-bottom:28px; text-align:center;">
                <img
                  src="cid:${LOGO_CID}"
                  alt="markclaude.sk"
                  width="64"
                  height="64"
                  style="display:inline-block; width:64px; height:64px; border-radius:9999px;"
                />
              </td>
            </tr>
            <tr>
              <td style="background-color:#121317; border:1px solid rgba(255,255,255,0.08); border-radius:24px; padding:48px 56px;">
                <p style="margin:0 0 12px; font-size:12px; font-weight:600; letter-spacing:2.5px; text-transform:uppercase; color:#FF7A1A;">
                  Nová správa z markclaude.sk
                </p>
                <h1 style="margin:0 0 32px; font-size:32px; font-weight:300; letter-spacing:-0.02em; color:#FFFFFF;">
                  Nový projekt od ${safeName}
                </h1>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%; margin-bottom:32px;">
                  <tr>
                    <td style="padding:16px 0; border-top:1px solid rgba(255,255,255,0.08); font-size:13px; color:#9CA3AF; width:110px; vertical-align:top;">
                      Meno
                    </td>
                    <td style="padding:16px 0; border-top:1px solid rgba(255,255,255,0.08); font-size:15px; color:#FFFFFF; vertical-align:top;">
                      ${safeName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 0; border-top:1px solid rgba(255,255,255,0.08); font-size:13px; color:#9CA3AF; vertical-align:top;">
                      Email
                    </td>
                    <td style="padding:16px 0; border-top:1px solid rgba(255,255,255,0.08); font-size:15px; vertical-align:top;">
                      <a href="mailto:${safeEmail}" style="color:#FF7A1A; text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 0; border-top:1px solid rgba(255,255,255,0.08); border-bottom:1px solid rgba(255,255,255,0.08); font-size:13px; color:#9CA3AF; vertical-align:top;">
                      Prijaté
                    </td>
                    <td style="padding:16px 0; border-top:1px solid rgba(255,255,255,0.08); border-bottom:1px solid rgba(255,255,255,0.08); font-size:15px; color:#FFFFFF; vertical-align:top;">
                      ${receivedAt}
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 12px; font-size:13px; color:#9CA3AF;">Správa</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
                  <tr>
                    <td style="background-color:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:16px; padding:24px 28px; font-size:15px; line-height:1.75; color:#E5E5E5;">
                      ${safeMessage}
                    </td>
                  </tr>
                </table>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:36px;">
                  <tr>
                    <td style="border-radius:9999px; background-color:#FF7A1A;">
                      <a
                        href="mailto:${safeEmail}"
                        style="display:inline-block; padding:14px 30px; font-size:15px; font-weight:600; color:#FFFFFF; text-decoration:none;"
                      >
                        Odpovedať ${safeName}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top:24px; text-align:center; font-size:12px; color:rgba(255,255,255,0.35);">
                Odoslané z kontaktného formulára na markclaude.sk
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatná požiadavka." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Vyplň prosím všetky polia." }, { status: 400 });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("Contact form: missing GMAIL_USER / GMAIL_APP_PASSWORD env vars.");
    return NextResponse.json(
      { error: "Emailová služba nie je nastavená. Skús to prosím priamo emailom." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const logoPath = path.join(process.cwd(), "public", "images", "email-logo.png");

    await transporter.sendMail({
      from: `"markclaude.sk" <${gmailUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Nový projekt od ${name} — markclaude.sk`,
      text: `Meno: ${name}\nEmail: ${email}\n\nSpráva:\n${message}`,
      html: buildEmailHtml({ name, email, message }),
      attachments: [
        {
          filename: "logo.png",
          content: readFileSync(logoPath),
          cid: LOGO_CID,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send error:", error);
    return NextResponse.json({ error: "Nepodarilo sa odoslať správu. Skús to prosím znova." }, { status: 500 });
  }
}
