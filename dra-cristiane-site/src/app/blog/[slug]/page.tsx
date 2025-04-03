"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getPosts } from "@/services/postService";
import { Post } from "@/types/blog";
import ReactMarkdown from 'react-markdown';

export default function PostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [post, setPost] = useState<Post | null>(null);
  const [postsRelacionados, setPostsRelacionados] = useState<Post[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [imagemError, setImagemError] = useState(false);

  useEffect(() => {
    const carregarPost = async () => {
      if (!slug) return;
      
      setCarregando(true);
      try {
        const postData = await getPostBySlug(slug);
        
        if (postData) {
          setPost(postData);
          
          // Carregar posts relacionados (da mesma categoria)
          if (postData.categorias && postData.categorias.length > 0) {
            const categoria = postData.categorias[0];
            const { posts } = await getPosts({ 
              publicadosApenas: true, 
              limite: 3,
              categoria
            });
            
            // Filtrar para não incluir o post atual
            setPostsRelacionados(posts.filter(p => p.id !== postData.id));
          }
        } else {
          setErro("Post não encontrado");
        }
      } catch (error) {
        console.error("Erro ao carregar post:", error);
        setErro("Não foi possível carregar o post");
      } finally {
        setCarregando(false);
      }
    };
    
    carregarPost();
  }, [slug]);

  // Função para lidar com erro ao carregar imagem
  const handleImageError = () => {
    setImagemError(true);
  };

  // Formatar data
  const formatarData = (dataString: string) => {
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  };

  if (carregando) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-20 bg-light">
          <div className="container-section">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (erro || !post) {
    return (
      <>
        <Navbar />
        <main className="pt-28 pb-20 bg-light">
          <div className="container-section">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold text-red-500 mb-4">{erro || "Post não encontrado"}</h1>
              <p className="mb-8">O post que você está procurando não existe ou foi removido.</p>
              <Link href="/blog" className="btn-primary">
                Voltar para o Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-light">
        <article className="container-section">
          {/* Cabeçalho do Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-center"
          >
            <div className="inline-flex items-center mb-4">
              <Link href="/blog" className="text-primary-dark hover:underline flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar para o Blog
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.titulo}</h1>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {post.categorias && post.categorias.map((categoria, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary-dark"
                >
                  {categoria}
                </span>
              ))}
            </div>
            
            <div className="text-gray-500 text-sm">
              {post.autor ? `Por ${post.autor} • ` : ""}
              {formatarData(post.data_publicacao)}
            </div>
          </motion.div>

          {/* Imagem de Capa */}
          {post.imagem_url && !imagemError ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12 rounded-lg overflow-hidden shadow-lg max-h-[500px] relative w-full h-[400px]"
            >
              <Image
                src={post.imagem_url}
                alt={post.titulo}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                onError={handleImageError}
                unoptimized={!post.imagem_url.startsWith('/')}
              />
            </motion.div>
          ) : null}

          {/* Conteúdo do Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-8 markdown-content"
          >
            <style jsx global>{`
              .markdown-content {
                color: #333;
                line-height: 1.7;
                font-size: 1.1rem;
              }
              .markdown-content h1 {
                font-size: 2rem;
                font-weight: 700;
                margin: 1.5rem 0 1rem;
                color: #1a1a1a;
              }
              .markdown-content h2 {
                font-size: 1.75rem;
                font-weight: 600;
                margin: 1.5rem 0 1rem;
                color: #1a1a1a;
              }
              .markdown-content h3 {
                font-size: 1.5rem;
                font-weight: 600;
                margin: 1.25rem 0 0.75rem;
                color: #1a1a1a;
              }
              .markdown-content h4 {
                font-size: 1.25rem;
                font-weight: 600;
                margin: 1rem 0 0.5rem;
                color: #1a1a1a;
              }
              .markdown-content p {
                margin-bottom: 1.25rem;
              }
              .markdown-content ul, .markdown-content ol {
                margin: 1rem 0;
                padding-left: 2rem;
              }
              .markdown-content ul {
                list-style-type: disc;
              }
              .markdown-content ol {
                list-style-type: decimal;
              }
              .markdown-content li {
                margin-bottom: 0.5rem;
              }
              .markdown-content a {
                color: #0074d9;
                text-decoration: underline;
              }
              .markdown-content a:hover {
                color: #0056b3;
              }
              .markdown-content blockquote {
                border-left: 4px solid #ccc;
                margin: 1.5rem 0;
                padding: 0.5rem 1rem;
                color: #666;
                background-color: #f9f9f9;
                font-style: italic;
              }
              .markdown-content pre {
                background-color: #f5f5f5;
                padding: 1rem;
                border-radius: 0.25rem;
                overflow-x: auto;
                margin: 1rem 0;
              }
              .markdown-content code {
                background-color: #f5f5f5;
                padding: 0.2rem 0.4rem;
                border-radius: 0.25rem;
                font-family: monospace;
              }
              .markdown-content img {
                max-width: 100%;
                height: auto;
                margin: 1.5rem 0;
                border-radius: 0.25rem;
              }
              .markdown-content hr {
                border: 0;
                height: 1px;
                background-color: #eaeaea;
                margin: 2rem 0;
              }
              .markdown-content table {
                width: 100%;
                border-collapse: collapse;
                margin: 1.5rem 0;
              }
              .markdown-content th, .markdown-content td {
                padding: 0.75rem;
                border: 1px solid #ddd;
                text-align: left;
              }
              .markdown-content th {
                background-color: #f5f5f5;
                font-weight: 600;
              }
            `}</style>

            <ReactMarkdown>{post.conteudo}</ReactMarkdown>
          </motion.div>

          {/* Posts Relacionados */}
          {postsRelacionados.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Posts Relacionados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {postsRelacionados.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="h-40 bg-primary/20 relative">
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
                          <span className="text-primary-dark font-medium text-sm text-center px-4">
                            {post.titulo}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-md font-semibold mb-2 hover:text-primary-dark transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
                      </h3>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-dark text-sm font-medium hover:underline inline-flex items-center"
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
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
} 