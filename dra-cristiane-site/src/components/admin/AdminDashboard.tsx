"use client";
import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { getPosts, togglePostStatus, deletePost } from '@/services/postService';
import { Post } from '@/types/blog';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import AdminHeader from './AdminHeader';

const AdminDashboard = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [busca, setBusca] = useState('');
  const [filtroPulicados, setFiltroPulicados] = useState<boolean | null>(null);
  const postsPerPage = 10;
  
  const { } = useAuth();

  // Carregar posts
  const carregarPosts = async () => {
    setCarregando(true);
    try {
      const { posts, total } = await getPosts({
        publicadosApenas: filtroPulicados === null ? false : filtroPulicados,
        limite: postsPerPage,
        pagina: paginaAtual,
        search: busca || null
      });
      
      setPosts(posts);
      setTotalPosts(total);
      setErro('');
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
      setErro('Não foi possível carregar os posts. Tente novamente mais tarde.');
      toast.error('Falha ao carregar posts');
    } finally {
      setCarregando(false);
    }
  };

  // Carregar posts ao iniciar ou quando os filtros mudarem
  useEffect(() => {
    carregarPosts();
  }, [paginaAtual, filtroPulicados, carregarPosts]);

  // Função para buscar posts
  const handleBusca = (e: React.FormEvent) => {
    e.preventDefault();
    setPaginaAtual(1); // Voltar para a primeira página
    carregarPosts();
  };

  // Alternar status do post (publicado/rascunho)
  const handleToggleStatus = async (id: number, publicado: boolean) => {
    try {
      await togglePostStatus(id, !publicado);
      toast.success(`Post ${!publicado ? 'publicado' : 'despublicado'} com sucesso!`);
      carregarPosts(); // Recarregar para atualizar a lista
    } catch (error) {
      console.error('Erro ao alternar status:', error);
      toast.error('Falha ao alterar status do post');
    }
  };

  // Excluir post
  const handleExcluir = async (id: number) => {
    if (!window.confirm('Tem certeza de que deseja excluir este post? Esta ação não pode ser desfeita.')) {
      return;
    }
    
    try {
      await deletePost(id);
      toast.success('Post excluído com sucesso!');
      carregarPosts(); // Recarregar para atualizar a lista
    } catch (error) {
      console.error('Erro ao excluir post:', error);
      toast.error('Falha ao excluir post');
    }
  };

  // Formatar data
  const formatarData = (dataString: string) => {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  // Truncar texto
  const truncarTexto = (texto: string, tamanho: number) => {
    if (texto.length <= tamanho) return texto;
    return texto.substring(0, tamanho) + '...';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <AdminHeader titulo="Dashboard" />
      
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Posts do Blog
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({totalPosts} {totalPosts === 1 ? 'post' : 'posts'})
                </span>
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
              <form onSubmit={handleBusca} className="relative">
                <input
                  type="text"
                  placeholder="Buscar posts..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setFiltroPulicados(null)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    filtroPulicados === null
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setFiltroPulicados(true)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    filtroPulicados === true
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Publicados
                </button>
                <button
                  onClick={() => setFiltroPulicados(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    filtroPulicados === false
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Rascunhos
                </button>
              </div>
              
              <Link
                href="/adminblog/novo"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-150 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Novo Post
              </Link>
            </div>
          </div>
          
          {carregando ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              <p className="mt-2 text-gray-500">Carregando posts...</p>
            </div>
          ) : erro ? (
            <div className="p-8 text-center text-red-500">{erro}</div>
          ) : posts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              Nenhum post encontrado. 
              {busca && <span> Tente outra busca ou <button onClick={() => {setBusca(''); carregarPosts();}} className="text-primary hover:underline">limpe o filtro</button>.</span>}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Título
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-normal">
                        <div className="text-sm font-medium text-gray-900">
                          {truncarTexto(post.titulo, 60)}
                        </div>
                        <div className="text-sm text-gray-500">
                          {post.categorias && post.categorias.length > 0 
                            ? post.categorias.join(', ') 
                            : 'Sem categoria'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {formatarData(post.data_publicacao)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span 
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${post.publicado 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'}`}
                        >
                          {post.publicado ? 'Publicado' : 'Rascunho'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Link 
                            href={`/blog/${post.slug}`} 
                            target="_blank"
                            className="text-indigo-600 hover:text-indigo-900"
                            title="Visualizar"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                          </Link>
                          
                          <button
                            onClick={() => handleToggleStatus(post.id, post.publicado)}
                            className={`${post.publicado ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'}`}
                            title={post.publicado ? 'Despublicar' : 'Publicar'}
                          >
                            {post.publicado ? (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                          
                          <Link 
                            href={`/adminblog/editar/${post.id}`} 
                            className="text-blue-600 hover:text-blue-900"
                            title="Editar"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </Link>
                          
                          <button
                            onClick={() => handleExcluir(post.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Excluir"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {/* Paginação */}
          {totalPosts > postsPerPage && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Mostrando {posts.length} de {totalPosts} posts
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setPaginaAtual(paginaAtual - 1)}
                  disabled={paginaAtual === 1}
                  className={`px-3 py-1 rounded-md text-sm ${
                    paginaAtual === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Anterior
                </button>
                <button
                  onClick={() => setPaginaAtual(paginaAtual + 1)}
                  disabled={posts.length < postsPerPage || posts.length === 0}
                  className={`px-3 py-1 rounded-md text-sm ${
                    posts.length < postsPerPage || posts.length === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Próximo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 