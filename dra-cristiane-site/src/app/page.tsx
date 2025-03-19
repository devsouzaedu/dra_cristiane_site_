import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Abordagem from "@/components/Abordagem";
import Experiencia from "@/components/Experiencia";
import Beneficios from "@/components/Beneficios";
import Footer from "@/components/Footer";
import AtendimentoInfantil from "@/components/AtendimentoInfantil";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Abordagem />
      <AtendimentoInfantil />
      <Experiencia />
      <Beneficios />
      <Footer />
    </>
  );
}
