import LoadingScreen from "@/components/LoadingScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <Navigation />
      <Hero />
      <Portfolio />
      <Services />
      <Skills />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
