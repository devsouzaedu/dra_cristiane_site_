"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  {
    id: 1,
    titulo: "Como a terapia cognitivo-comportamental pode ajudar no tratamento da ansiedade",
    resumo: "Descubra como a TCC pode ser eficaz para gerenciar os sintomas de ansiedade e melhorar sua qualidade de vida.",
    data: "10 Mar 2025",
    categoria: "Ansiedade",
    imagem: "/images/blog/ansiedade.jpg"
  },
  {
    id: 2,
    titulo: "Sinais de alerta para depressão que não devem ser ignorados",
    resumo: "Conheça os principais sinais de depressão e a importância de buscar ajuda profissional para tratamento adequado.",
    data: "05 Mar 2025",
    categoria: "Depressão",
    imagem: "/images/blog/depressao.jpg"
  },
  {
    id: 3,
    titulo: "O impacto do estresse na saúde mental e física",
    resumo: "Entenda como o estresse crônico afeta seu corpo e mente, e estratégias para gerenciá-lo de forma saudável.",
    data: "28 Fev 2025",
    categoria: "Estresse",
    imagem: "/images/blog/estresse.jpg"
  },
  {
    id: 4,
    titulo: "Como ajudar crianças com TDAH a desenvolverem habilidades de organização",
    resumo: "Dicas práticas para pais e educadores ajudarem crianças com TDAH a melhorarem sua organização e foco.",
    data: "20 Fev 2025",
    categoria: "TDAH",
    imagem: "/images/blog/tdah.jpg"
  },
  {
    id: 5,
    titulo: "Musicoterapia: benefícios para o desenvolvimento infantil",
    resumo: "Saiba como a musicoterapia pode auxiliar no desenvolvimento cognitivo, emocional e social das crianças.",
    data: "15 Fev 2025",
    categoria: "Musicoterapia",
    imagem: "/images/blog/musicoterapia.jpg"
  },
  {
    id: 6,
    titulo: "Autocuidado: práticas essenciais para preservar a saúde mental",
    resumo: "Conheça as principais práticas de autocuidado que podem ajudar a manter o equilíbrio emocional no dia a dia.",
    data: "10 Fev 2025",
    categoria: "Bem-estar",
    imagem: "/images/blog/autocuidado.jpg"
  }
];

const categorias = ["Todos", "Ansiedade", "Depressão", "Estresse", "TDAH", "Musicoterapia", "Bem-estar"];

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-light">
        <div className="container-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="title-section">Blog</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Artigos sobre psicologia, saúde mental e bem-estar para te ajudar a viver melhor.
            </p>
          </motion.div>

          <div className="mb-12 flex flex-wrap gap-2 justify-center">
            {categorias.map((categoria, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full ${
                  index === 0 ? "bg-primary text-dark" : "bg-white text-dark hover:bg-primary/20"
                } transition-colors`}
              >
                {categoria}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-primary/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-primary-dark font-medium">Imagem do post: {post.titulo}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm bg-primary/10 text-primary-dark px-3 py-1 rounded-full">
                      {post.categoria}
                    </span>
                    <span className="text-sm text-gray-500">{post.data}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary-dark transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.titulo}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.resumo}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-primary-dark font-medium hover:underline inline-flex items-center"
                  >
                    Ler mais
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="btn-primary">Carregar mais posts</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage; 