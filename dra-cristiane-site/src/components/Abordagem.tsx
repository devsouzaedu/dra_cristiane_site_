"use client";
import { motion } from "framer-motion";

const abordagens = [
  {
    titulo: "Terapias Cognitivo-Comportamentais (TCC)",
    descricao: "Abordagem focada em identificar e modificar padrões de pensamento e comportamento disfuncionais, promovendo mudanças positivas na forma como o paciente pensa, sente e age."
  },
  {
    titulo: "Psicoterapia Psicanalítica Breve (PPB)",
    descricao: "Método terapêutico derivado da psicanálise, que trabalha com o inconsciente e os conflitos internos, mas com foco específico e duração mais curta."
  },
  {
    titulo: "Abordagem Psicanalítica Winnicotiana",
    descricao: "Baseada nos trabalhos de Donald Winnicott, enfatiza o ambiente facilitador e acolhedor como essencial para o desenvolvimento emocional saudável."
  },
  {
    titulo: "Análise do Comportamento Aplicada (ABA)",
    descricao: "Abordagem científica que aplica princípios comportamentais para desenvolver habilidades socialmente significativas, especialmente útil para TEA e TDAH."
  }
];

const Abordagem = () => {
  return (
    <section id="abordagem" className="bg-white py-12">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <h2 className="title-section">Abordagem Terapêutica</h2>
          <p className="text-lg">
            Utilizo não apenas uma, mas várias terapias, para poder ajudá-lo cada vez mais e melhor! 
            Os atendimentos são feitos em um contexto de conversa informal onde perguntas são estruturadas 
            com o objetivo de clarificar situações e emoções disfuncionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {abordagens.map((abordagem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary/10 p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow"
            >
              <h3 className="subtitle">{abordagem.titulo}</h3>
              <p>{abordagem.descricao}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 bg-primary/20 p-6 rounded-lg border border-primary"
        >
          <h3 className="subtitle text-center mb-4">Metodologia</h3>
          <p className="text-center max-w-3xl mx-auto">
            A metodologia é dinâmica e agrega suporte emocional, raciocínio analítico-estratégico, 
            psicoeducação e planejamento terapêutico. O processo terapêutico busca construir conexões 
            que potencializem a qualidade de vida e a saúde mental.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Abordagem; 