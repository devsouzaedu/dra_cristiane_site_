"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChild, FaGamepad, FaPuzzlePiece, FaBrain, FaHeartbeat, FaUsers } from "react-icons/fa";

const cardsInfo = [
  {
    titulo: "Abordagem Lúdica",
    descricao: "Utilização de brincadeiras, jogos e atividades interativas para facilitar a expressão de sentimentos.",
    icone: <FaGamepad className="text-3xl text-primary" />
  },
  {
    titulo: "Terapia com Jogos",
    descricao: "Jogos terapêuticos projetados para trabalhar habilidades sociais e cognitivas específicas.",
    icone: <FaPuzzlePiece className="text-3xl text-primary" />
  },
  {
    titulo: "Desenvolvimento Cognitivo",
    descricao: "Estímulo das funções cognitivas como atenção, memória e raciocínio lógico.",
    icone: <FaBrain className="text-3xl text-primary" />
  },
  {
    titulo: "Regulação Emocional",
    descricao: "Técnicas para ajudar crianças a identificar e gerenciar suas emoções de forma saudável.",
    icone: <FaHeartbeat className="text-3xl text-primary" />
  },
  {
    titulo: "Habilidades Sociais",
    descricao: "Desenvolvimento de competências para interações sociais positivas e resolução de conflitos.",
    icone: <FaUsers className="text-3xl text-primary" />
  }
];

const AtendimentoInfantil = () => {
  return (
    <section id="atendimento-infantil" className="py-12 bg-primary/20">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaChild className="text-4xl text-primary" />
            <h2 className="title-section mb-0">Psicoterapia Infantil</h2>
          </div>
          <p className="text-lg max-w-3xl mx-auto">
            Atendimento especializado para crianças e adolescentes em um ambiente acolhedor e 
            seguro, utilizando técnicas adaptadas às necessidades de cada fase do desenvolvimento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="subtitle mb-2">Por que a terapia infantil é importante?</h3>
            
            <p className="text-lg">
              A psicoterapia infantil oferece apoio emocional durante fases críticas do desenvolvimento, 
              quando muitas habilidades estão sendo formadas. Intervenções precoces podem prevenir problemas 
              futuros e promover um desenvolvimento saudável.
            </p>
            
            <p className="text-lg">
              Durante as sessões, utilizo recursos lúdicos e técnicas apropriadas para cada faixa etária, 
              criando um ambiente onde a criança se sinta confortável para expressar suas emoções, medos, 
              dificuldades e também suas potencialidades.
            </p>
            
            <p className="text-lg">
              O trabalho inclui acompanhamento familiar para garantir que as estratégias aprendidas na terapia 
              possam ser aplicadas em casa, fortalecendo o vínculo familiar e promovendo um ambiente favorável 
              ao desenvolvimento infantil.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/psico_terapia_infantil_em_barueri_aphaville (1).jpeg" 
                  alt="Atendimento infantil - espaço terapêutico" 
                  width={400} 
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/psico_terapia_infantil_em_barueri_kids (2).jpeg" 
                  alt="Terapia com jogos e recursos lúdicos" 
                  width={400} 
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/psico_terapia_infantil_em_barueri_kids (3).jpeg" 
                  alt="Espaço de terapia infantil" 
                  width={400} 
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image 
                  src="/images/psico_terapia_infantil_em_barueri_aphaville (4).jpeg" 
                  alt="Atendimento psicológico infantil" 
                  width={400} 
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="subtitle text-center mb-6">Abordagens utilizadas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {cardsInfo.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="flex justify-center mb-2">
                  {card.icone}
                </div>
                <h4 className="font-medium mb-1">{card.titulo}</h4>
                <p className="text-sm">{card.descricao}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AtendimentoInfantil; 