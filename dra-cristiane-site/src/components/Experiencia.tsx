"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGlobeAmericas, FaClinicMedical, FaLaptopMedical, FaHourglassHalf, FaUserFriends, FaComments } from "react-icons/fa";

const areas = [
  "Terapia Focada na Solução",
  "Depressão",
  "Saúde Mental",
  "Transtorno do Déficit de Atenção (TDAH)",
  "Síndrome de Burnout",
  "Síndrome de Pânico",
  "Esquizofrenia",
  "Transtorno Bipolar",
  "Atendimento para luto",
  "Stress Pós-traumático",
  "Transtorno de Ansiedade",
  "Transtornos Alimentares",
  "Transtorno Obsessivo Compulsivo (TOC)",
  "Transtorno de Personalidade",
  "Transtorno do Espectro Autista (TEA)",
  "Distúrbio de Aprendizagem",
  "Síndrome de Tourette"
];

const Experiencia = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experiencia" className="py-12 bg-white">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="title-section">Áreas de Experiência</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Com mais de 25 anos de prática, tenho experiência no tratamento de diversos transtornos 
            e condições psicológicas, sempre com uma abordagem humanizada e personalizada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-3 rounded-lg border border-primary/30 transition-all duration-300 ${
                hoveredIndex === index ? "bg-primary text-dark" : "bg-primary/5"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p className="font-medium text-center">{area}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <h3 className="subtitle mb-6">Tipos de Atendimento</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-primary/10 shadow-md rounded-lg p-5 flex-1 border-t-4 border-primary hover:shadow-lg transition-all">
              <div className="flex flex-col items-center mb-3">
                <FaClinicMedical className="text-4xl text-primary-dark mb-2" />
                <h4 className="font-semibold text-lg">Presencial</h4>
              </div>
              <p className="text-center">Av. Trindade 254, Bethaville Office – Barueri</p>
            </div>
            <div className="bg-primary/10 shadow-md rounded-lg p-5 flex-1 border-t-4 border-accent hover:shadow-lg transition-all">
              <div className="flex flex-col items-center mb-3">
                <FaLaptopMedical className="text-4xl text-accent-dark mb-2" />
                <h4 className="font-semibold text-lg">Online</h4>
              </div>
              <p className="text-center">Atendimento online via vídeo chamada, disponível para qualquer localidade</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10"
        >
          <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
            <div className="flex items-center justify-center mb-3">
              <FaGlobeAmericas className="text-4xl text-primary-dark mr-3" />
              <h3 className="subtitle mb-0">Atendimento para Brasileiros no Exterior</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-center mb-2">
                  <FaHourglassHalf className="text-3xl text-primary" />
                </div>
                <h4 className="font-medium text-center mb-1">Adaptação ao Fuso Horário</h4>
                <p className="text-center text-sm">Horários flexíveis para atender pacientes em diferentes zonas de tempo</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-center mb-2">
                  <FaUserFriends className="text-3xl text-primary" />
                </div>
                <h4 className="font-medium text-center mb-1">Adaptação Cultural</h4>
                <p className="text-center text-sm">Suporte especializado para o choque cultural e desafios de adaptação</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-center mb-2">
                  <FaComments className="text-3xl text-primary" />
                </div>
                <h4 className="font-medium text-center mb-1">No Seu Idioma</h4>
                <p className="text-center text-sm">Terapia em português, mantendo a conexão com sua linguagem e identidade cultural</p>
              </div>
            </div>
            <p className="text-center mt-4">
              Ofereço suporte psicológico especializado para expatriados brasileiros, 
              ajudando a lidar com questões como saudade, adaptação cultural, construção de 
              nova identidade e desafios específicos da vida no exterior.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiencia; 