"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-80px)] flex items-center bg-white">
      <div className="absolute inset-0 bg-[url('/images/bg-pattern.svg')] opacity-10"></div>
      <div className="container-section relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-4">
              Dra. Cristiane Pereira Duarte
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-secondary mb-4">
              Psicóloga Clínica e Hospitalar
            </h2>
            <p className="text-lg mb-6 max-w-lg">
              Mais de 25 anos de experiência dedicados ao seu bem-estar emocional e 
              saúde mental. Atendimento personalizado para crianças, adolescentes e adultos.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/5511997876371?text=Gostaria%20de%20agendar%20uma%20consulta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agende uma Consulta
              </a>
              <Link 
                href="/#sobre" 
                className="bg-white text-dark border border-primary py-2 px-6 rounded-md hover:bg-primary/10 transition-all duration-300"
              >
                Saiba Mais
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-full h-full min-h-[400px] rounded-xl bg-white shadow-lg p-6">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Atendimento humanizado</h3>
                  <p className="mb-6">
                    &ldquo;O meu objetivo é dar a melhor ajuda para a sua saúde psicológica e o seu bem-estar emocional, 
                    através do recurso da Psicologia.&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Image 
                        src="/images/dra_cris_pfp.jpeg" 
                        alt="Dra. Cristiane Duarte" 
                        width={48} 
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Dra. Cristiane Duarte</p>
                      <p className="text-sm text-gray-600">CRP n. 06/63449-8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 