import Image from "next/image";
import Nav from "@/components/Header/Nav";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Mission from "@/components/mission/Mission";
import Commitment from "@/components/mission/Commitment";
import NewHero from "@/components/hero/NewHero";
import Footer from "@/components/footer/Footer";


export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Mission/>
      <About />
      <Commitment />
      <Footer/>
    </>
  );
}
