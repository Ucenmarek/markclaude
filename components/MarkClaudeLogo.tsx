export const markClaudeLogoPaths = {
  orangeC:
    "M286 79C222 31 126 39 66 106C0 180 17 309 101 361C119 374 139 382 159 387L134 339C124 333 114 326 105 318C54 272 52 188 98 138C138 95 203 88 250 122L286 79Z",
  orangeM:
    "M107 292V132H139L188 182L239 132H286V236L256 220V164L188 234L136 182V269L107 292Z",
  whiteC:
    "M269 359Q270 359 271 359Q273 360 274 361L290 378Q280 392 264 399Q248 406 226 406Q206 406 190 399Q174 392 163 380Q152 368 146 352Q140 335 140 316Q140 296 146 280Q153 263 164 251Q176 239 192 233Q208 226 228 226Q238 226 247 228Q255 230 263 233Q271 236 277 240Q283 244 288 249L275 268Q273 270 271 271Q270 272 266 272Q264 272 262 271Q260 270 258 269Q256 268 253 266Q251 264 247 263Q244 262 239 261Q234 260 228 260Q218 260 209 263Q201 267 195 274Q188 282 185 292Q182 303 182 316Q182 329 186 340Q189 351 196 358Q202 365 210 369Q219 372 229 372Q234 372 239 372Q243 371 247 370Q251 369 255 367Q258 365 262 361Q263 360 265 359Q267 359 269 359Z",
};

type MarkClaudeLogoProps = {
  className?: string;
  tone?: "default" | "orange";
};

export function MarkClaudeLogo({ className = "", tone = "default" }: MarkClaudeLogoProps) {
  const cFillColor = tone === "orange" ? "#FF7A1A" : "#F4F4F4";

  return (
    <svg viewBox="0 0 330 423" fill="none" className={className} aria-hidden="true">
      <path
        d={markClaudeLogoPaths.orangeC}
        fill="#FF7A1A"
        stroke="#000000"
        strokeWidth={6}
        strokeLinejoin="round"
      />
      <path
        d={markClaudeLogoPaths.orangeM}
        fill="#FF7A1A"
        stroke="#000000"
        strokeWidth={6}
        strokeLinejoin="round"
      />
      <path
        d={markClaudeLogoPaths.whiteC}
        fill={cFillColor}
        stroke="#000000"
        strokeWidth={6}
        strokeLinejoin="round"
      />
    </svg>
  );
}
