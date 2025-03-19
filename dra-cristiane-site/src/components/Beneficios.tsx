"use client";
import { motion } from "framer-motion";
import { FaBrain, FaSmile, FaUsers, FaHeart, FaBook, FaArrowAltCircleUp, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Image from "next/image";

const beneficios = [
  {
    titulo: "Autoconhecimento",
    descricao: "Ajuda a pessoa a entender melhor seus sentimentos, pensamentos e comportamentos.",
    icone: <FaBrain className="text-4xl text-primary-dark" />
  },
  {
    titulo: "Regulação emocional",
    descricao: "Ensina estratégias para lidar com ansiedade, estresse, depressão e outras emoções difíceis.",
    icone: <FaSmile className="text-4xl text-primary-dark" />
  },
  {
    titulo: "Melhoria nos relacionamentos",
    descricao: "Facilita a comunicação e a resolução de conflitos interpessoais.",
    icone: <FaUsers className="text-4xl text-primary-dark" />
  },
  {
    titulo: "Apoio em momentos difíceis",
    descricao: "Fornece um espaço seguro para lidar com traumas, perdas e mudanças significativas.",
    icone: <FaHeart className="text-4xl text-primary-dark" />
  },
  {
    titulo: "Desenvolvimento de habilidades",
    descricao: "Trabalha a assertividade, a resiliência e o controle emocional.",
    icone: <FaBook className="text-4xl text-primary-dark" />
  },
  {
    titulo: "Quebra de padrões negativos",
    descricao: "Identifica e modifica crenças limitantes e comportamentos prejudiciais.",
    icone: <FaArrowAltCircleUp className="text-4xl text-primary-dark" />
  }
];

const Beneficios = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-light">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="title-section">Benefícios da Psicoterapia</h2>
          <p className="text-lg max-w-3xl mx-auto">
            A Psicoterapia proporciona uma série de benefícios para as pessoas, ajudando no 
            autoconhecimento, na resolução de conflitos emocionais e na melhoria da qualidade de vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-light p-4 rounded-full">{beneficio.icone}</div>
                <h3 className="subtitle mb-2">{beneficio.titulo}</h3>
                <p>{beneficio.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16"
        >
          <div className="relative bg-primary px-8 py-10 rounded-lg shadow-md">
            <div className="absolute -top-6 -left-6 text-6xl text-primary-dark opacity-30">
              <FaQuoteLeft />
            </div>
            <div className="absolute -bottom-6 -right-6 text-6xl text-primary-dark opacity-30">
              <FaQuoteRight />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image 
                  src="/images/dra_cris_pfp.jpeg" 
                  alt="Dra. Cristiane" 
                  width={128} 
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-lg font-medium italic">
                  "Desejo sempre do fundo do meu coração, que a vida de meus pacientes seja repleta de 
                  saúde e bem-estar físico, mental e psicológico!"
                </p>
                <p className="mt-4 font-semibold">Dra. Cristiane Pereira Duarte</p>
                <p className="text-sm">Psicóloga Clínica - CRP n. 06/63449-8</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white p-6 rounded-lg shadow-md">
            <h3 className="subtitle mb-4">Agende sua consulta</h3>
            <p className="mb-6">
              Estou à disposição para te ajudar a conquistar mais bem-estar e qualidade de vida. 
              Entre em contato para agendar sua consulta.
            </p>
            <a 
              href="/contato" 
              className="inline-block bg-primary hover:bg-primary-dark text-dark font-medium py-3 px-6 rounded-lg transition-colors shadow-sm"
            >
              Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Beneficios; 