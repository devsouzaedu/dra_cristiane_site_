"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPosts, getCategorias } from "@/services/postService";
import { Post } from "@/types/blog";

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categorias, setCategorias] = useState<string[]>(['Todos']);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 6;

  // Carregar posts e categorias
  useEffect(() => {
    const carregarDados = async () => {
      setCarregando(true);
      try {
        // Carregar posts
        const { posts, total } = await getPosts({
          publicadosApenas: true,
          limite: postsPerPage,
          pagina: paginaAtual,
          categoria: categoriaAtiva !== "Todos" ? categoriaAtiva : null
        });
        
        setPosts(posts);
        setTotalPosts(total);
        
        // Carregar categorias (somente na primeira renderização)
        if (categorias.length === 1) {
          const cats = await getCategorias();
          setCategorias(["Todos", ...cats]);
        }
        
        setErro("");
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setErro("Não foi possível carregar os posts. Tente novamente mais tarde.");
      } finally {
        setCarregando(false);
      }
    };
    
    carregarDados();
  }, [paginaAtual, categoriaAtiva, categorias.length]);

  // Formatar data
  const formatarData = (dataString: string) => {
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  // Mudar categoria
  const handleCategoriaClick = (categoria: string) => {
    setCategoriaAtiva(categoria);
    setPaginaAtual(1); // Voltar para a primeira página
  };

  // Carregar mais posts
  const handleCarregarMais = () => {
    setPaginaAtual(paginaAtual + 1);
  };

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
                  categoria === categoriaAtiva ? "bg-primary text-dark" : "bg-white text-dark hover:bg-primary/20"
                } transition-colors`}
                onClick={() => handleCategoriaClick(categoria)}
              >
                {categoria}
              </motion.button>
            ))}
          </div>

          {carregando && paginaAtual === 1 ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : erro ? (
            <div className="text-center py-10 text-red-500">{erro}</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              Nenhum post encontrado nesta categoria.
            </div>
          ) : (
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
                    {post.imagem_url ? (
                      <Image 
                        src={post.imagem_url} 
                        alt={post.titulo}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-primary-dark font-medium">Imagem do post: {post.titulo}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm bg-primary/10 text-primary-dark px-3 py-1 rounded-full">
                        {post.categorias && post.categorias.length > 0 
                          ? post.categorias[0] 
                          : "Geral"}
                      </span>
                      <span className="text-sm text-gray-500">{formatarData(post.data_publicacao)}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 hover:text-primary-dark transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.resumo}</p>
                    <Link
                      href={`/blog/${post.slug}`}
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
          )}

          {carregando && paginaAtual > 1 && (
            <div className="mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}

          {!carregando && posts.length > 0 && posts.length < totalPosts && (
            <div className="mt-12 flex justify-center">
              <button 
                className="btn-primary"
                onClick={handleCarregarMais}
              >
                Carregar mais posts
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage; 