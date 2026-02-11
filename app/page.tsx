import Image from "next/image";
import About from "./src/components/About";
import Navbar from "./src/components/Navbar";
import Hero from "./src/components/Hero";
import Skills from "./src/components/Skills";
import Project from "./src/components/Project";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer";

export default function Home() {
  return (
 <div>
  <Navbar></Navbar>
  <Hero></Hero>
  <About></About>
  <Skills></Skills>
  <Project></Project>
  <Contact></Contact>
  <Footer></Footer>
 </div>
  );
}
