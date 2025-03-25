"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaMedal, FaUserMd, FaHospital } from "react-icons/fa";

const Sobre = () => {
  return (
    <section id="sobre" className="bg-primary/20 py-12">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="title-section text-center">Sobre Mim</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-[4/5] bg-white">
                  <Image 
                    src="/images/dra_cris_perfil2.jpeg" 
                    alt="Dra. Cristiane Pereira Duarte" 
                    width={500} 
                    height={625}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="absolute top-6 left-6 w-full h-full border-4 border-primary rounded-lg -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-lg">
              Sou Cristiane Pereira Duarte, Psicóloga Clínica, Hospitalar e Analista do Comportamento ABA, 
              com Registro Profissional CRP n. 06/63449-8. Especializei-me em Psicologia Hospitalar pela PUC/SP, 
              sou Pós-Graduada em Terapia Cognitivo-Comportamental, Análise do Comportamento Aplicada (ABA) 
              e Musicoterapeuta pela AACD.
            </p>
            
            <p className="text-lg">
              Desde 2000 realizo Consultas de Psicologia, Psicoterapia e Desenvolvimento Pessoal. 
              Tenho mais de 25 anos de experiência em atendimento Psicológico para Crianças, 
              adolescentes e adultos.
            </p>
            
            <p className="text-lg">
              Meu amor à profissão e ao meu trabalho me motiva a sempre ajudar pessoas e contribuir para 
              o seu desenvolvimento, bem-estar e felicidade! Da minha parte, pode contar com o meu 
              profissionalismo e uma relação de especial confiança, acolhimento, empatia, transparência e autenticidade.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="flex flex-col items-center bg-white rounded-lg p-3 shadow-sm">
                <FaMedal className="text-3xl text-primary mb-2" />
                <p className="text-center text-sm font-medium">25+ anos de experiência</p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg p-3 shadow-sm">
                <FaUserMd className="text-3xl text-primary mb-2" />
                <p className="text-center text-sm font-medium">Pós-graduações especializadas</p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg p-3 shadow-sm">
                <FaHospital className="text-3xl text-primary mb-2" />
                <p className="text-center text-sm font-medium">Experiência hospitalar</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10"
        >
          <h3 className="subtitle text-center mb-6">Meu Consultório</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <Image 
                src="/images/Foto_fachadafrente_localizacao_consultorio.jpeg" 
                alt="Fachada do consultório" 
                width={400} 
                height={300}
                className="object-cover w-full h-52"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <Image 
                src="/images/foto_consultorio_interno_dra_cris.jpeg" 
                alt="Consultório interno" 
                width={400} 
                height={300}
                className="object-cover w-full h-52"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <Image 
                src="/images/fotos_indoor_consultorio_dra_cria (1).jpeg" 
                alt="Ambiente de terapia" 
                width={400} 
                height={300}
                className="object-cover w-full h-52"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <Image 
                src="/images/fotos_indoor_consultorio_dra_cria (3).jpeg" 
                alt="Sala de atendimento" 
                width={400} 
                height={300}
                className="object-cover w-full h-52"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sobre; 