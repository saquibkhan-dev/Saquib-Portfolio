import Container from "../components/layout/Container";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Container>
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}
