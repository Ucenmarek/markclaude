import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntroOverlay } from "@/components/IntroOverlay";
import { IntroProvider } from "@/components/IntroContext";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { SiteBackground } from "@/components/SiteBackground";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";

export default function Home() {
  return (
    <IntroProvider>
      <main className="relative min-h-screen overflow-hidden bg-background text-white">
        <SiteBackground />
        <IntroOverlay />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <AboutMe />
          <WhyWorkWithMe />
          <Services />
          <Projects />
          <Process />
          <Contact />
          <Footer />
        </div>
      </main>
    </IntroProvider>
  );
}
