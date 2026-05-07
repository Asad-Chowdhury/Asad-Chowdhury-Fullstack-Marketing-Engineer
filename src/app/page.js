import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Positioning from "@/components/Positioning";
import Problems from "@/components/Problems";
import ProofStrip from "@/components/ProofStrip";
import Skills from "@/components/Skills";
import TargetRoles from "@/components/TargetRoles";
import Testimonials from "@/components/Testimonials";
import Thinking from "@/components/Thinking";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofStrip />
        <Testimonials />
        <Positioning />
        <Problems />
        <FeaturedWork />
        <Skills />
        <Experience />
        <Thinking />
        <TargetRoles />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
