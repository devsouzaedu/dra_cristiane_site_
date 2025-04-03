"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      handleScroll();

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {/* Espaçador para compensar o navbar fixo */}
      <div className="h-[72px] md:h-[80px]"></div>
      
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"}`}>
        <div className="container-section py-0">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-dark">
              Cristiane Duarte
            </Link>

            <div className="flex items-center gap-4">
              {/* Botão de Agendamento - Sempre visível */}
              <a 
                href="https://wa.me/5511997876371?text=Gostaria%20de%20agendar%20uma%20consulta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary text-sm md:text-base"
              >
                Agendar Consulta
              </a>

              {/* Menu para desktop */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <Link href="/" className="text-dark hover:text-primary-dark font-medium transition-colors">
                  Início
                </Link>
                <Link href="/#sobre" className="text-dark hover:text-primary-dark font-medium transition-colors">
                  Sobre
                </Link>
                <Link href="/#abordagem" className="text-dark hover:text-primary-dark font-medium transition-colors">
                  Abordagem
                </Link>
                <Link href="/#atendimento-infantil" className="text-dark hover:text-primary-dark font-medium transition-colors">
                  Infantil
                </Link>
                <Link href="/#experiencia" className="text-dark hover:text-primary-dark font-medium transition-colors">
                  Experiência
                </Link>
                <Link href="/blog" className="text-dark hover:text-primary-dark font-medium transition-colors">
                  Blog
                </Link>
                <Link href="/contato" className="text-dark hover:text-primary-dark font-medium transition-colors">
                  Contato
                </Link>
              </div>

              {/* Botão do menu mobile */}
              <button className="md:hidden text-dark" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
          <div className="container-section py-4 flex flex-col space-y-4">
            <Link href="/" className="text-dark hover:text-primary-dark font-medium transition-colors" onClick={toggleMenu}>
              Início
            </Link>
            <Link href="/#sobre" className="text-dark hover:text-primary-dark font-medium transition-colors" onClick={toggleMenu}>
              Sobre
            </Link>
            <Link href="/#abordagem" className="text-dark hover:text-primary-dark font-medium transition-colors" onClick={toggleMenu}>
              Abordagem
            </Link>
            <Link href="/#atendimento-infantil" className="text-dark hover:text-primary-dark font-medium transition-colors" onClick={toggleMenu}>
              Psicoterapia Infantil
            </Link>
            <Link href="/#experiencia" className="text-dark hover:text-primary-dark font-medium transition-colors" onClick={toggleMenu}>
              Experiência
            </Link>
            <Link href="/blog" className="text-dark hover:text-primary-dark font-medium transition-colors" onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="/contato" className="text-dark hover:text-primary-dark font-medium transition-colors" onClick={toggleMenu}>
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 