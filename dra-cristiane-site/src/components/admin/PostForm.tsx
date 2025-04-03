"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PostFormData } from '@/types/blog';
import { createPost, updatePost, getPostById, getCategorias } from '@/services/postService';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

// Importação dinâmica do editor de Markdown para evitar erros no lado do servidor
const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), { ssr: false });

// Função para gerar slug a partir do título
const gerarSlug = (titulo: string): string => {
  return titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

interface PostFormProps {
  idPost?: number;
}

const PostForm = ({ idPost }: PostFormProps = {}) => {
  const router = useRouter();
  const params = useParams();
  const editando = !!idPost || (params && params.id);
  const postId = idPost || (params && params.id ? Number(params.id) : undefined);
  
  const [formData, setFormData] = useState<PostFormData>({
    titulo: '',
    resumo: '',
    conteudo: '',
    slug: '',
    categorias: [],
    publicado: false,
    imagem_url: '',
    meta_descricao: '',
    meta_keywords: ''
  });
  
  const [novaCategoria, setNovaCategoria] = useState('');
  const [categoriasSugeridas, setCategoriasSugeridas] = useState<string[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const [imagemPreviewError, setImagemPreviewError] = useState(false);
  
  // Efeito para evitar rolagem automática ao digitar
  useEffect(() => {
    const handleScroll = () => {
      // Armazenar a posição de rolagem atual
      const scrollPosition = window.scrollY;
      
      // Restaurar esta posição após qualquer alteração que possa causar rolagem
      setTimeout(() => {
        window.scrollTo(0, scrollPosition);
      }, 0);
    };

    // Adicionar listener para eventos de input que podem causar rolagem
    document.addEventListener('input', handleScroll);
    
    return () => {
      document.removeEventListener('input', handleScroll);
    };
  }, []);

  // Carregar dados do post para edição
  useEffect(() => {
    const carregarCategorias = async () => {
      try {
        const categorias = await getCategorias();
        setCategoriasSugeridas(categorias);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    };

    carregarCategorias();

    if (editando && postId) {
      const carregarPost = async () => {
        setCarregando(true);
        try {
          const post = await getPostById(postId);
          if (post) {
            setFormData({
              titulo: post.titulo,
              resumo: post.resumo,
              conteudo: post.conteudo,
              slug: post.slug,
              categorias: post.categorias || [],
              publicado: post.publicado,
              imagem_url: post.imagem_url || '',
              meta_descricao: post.meta_descricao || '',
              meta_keywords: post.meta_keywords || ''
            });
          }
        } catch (error) {
          console.error('Erro ao carregar post:', error);
          toast.error('Erro ao carregar o post');
        } finally {
          setCarregando(false);
        }
      };

      carregarPost();
    }
  }, [editando, postId]);

  // Atualizar slug automaticamente
  useEffect(() => {
    if (!editando || !formData.slug) {
      setFormData(prev => ({
        ...prev,
        slug: gerarSlug(formData.titulo)
      }));
    }
  }, [formData.titulo, editando, formData.slug]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Resetar error de imagem quando a URL mudar
    if (name === 'imagem_url') {
      setImagemPreviewError(false);
    }
  };

  const handleEditorChange = (value: string) => {
    setFormData(prev => ({ ...prev, conteudo: value }));
  };
  
  const handleImageError = () => {
    setImagemPreviewError(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.titulo || !formData.resumo || !formData.conteudo) {
      toast.error('Preencha todos os campos obrigatórios');
      return;
    }

    setSalvando(true);
    
    try {
      if (editando && postId) {
        await updatePost(postId, formData);
        toast.success('Post atualizado com sucesso!');
      } else {
        await createPost(formData);
        toast.success('Post criado com sucesso!');
      }
      
      setTimeout(() => {
        router.push('/adminblog');
      }, 1500);
    } catch (error) {
      console.error('Erro ao salvar post:', error);
      toast.error('Erro ao salvar o post');
    } finally {
      setSalvando(false);
    }
  };

  const adicionarCategoria = () => {
    if (!novaCategoria.trim()) return;
    
    if (!formData.categorias.includes(novaCategoria)) {
      setFormData(prev => ({
        ...prev,
        categorias: [...prev.categorias, novaCategoria]
      }));
      
      if (!categoriasSugeridas.includes(novaCategoria)) {
        setCategoriasSugeridas(prev => [...prev, novaCategoria]);
      }
    }
    
    setNovaCategoria('');
  };

  const removerCategoria = (categoria: string) => {
    setFormData(prev => ({
      ...prev,
      categorias: prev.categorias.filter(c => c !== categoria)
    }));
  };

  // Opções para o editor de Markdown
  const editorOptions = {
    autofocus: false,
    spellChecker: false,
    placeholder: 'Escreva seu conteúdo em Markdown...',
    status: ['lines', 'words'],
  };

  if (carregando) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit}>
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {editando ? 'Editar Post' : 'Novo Post'}
          </h2>
          
          <div className="space-y-6">
            {/* Título */}
            <div>
              <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-1">
                Título
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                required
              />
            </div>

            {/* Resumo */}
            <div>
              <label htmlFor="resumo" className="block text-sm font-medium text-gray-700 mb-1">
                Resumo
              </label>
              <textarea
                id="resumo"
                name="resumo"
                value={formData.resumo}
                onChange={handleChange}
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                required
              />
            </div>

            {/* URL da imagem */}
            <div>
              <label htmlFor="imagem_url" className="block text-sm font-medium text-gray-700 mb-1">
                URL da Imagem de Capa
              </label>
              <input
                type="url"
                id="imagem_url"
                name="imagem_url"
                value={formData.imagem_url}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                placeholder="https://exemplo.com/imagem.jpg"
              />
              {formData.imagem_url && !imagemPreviewError ? (
                <div className="mt-2 w-40 h-24 bg-gray-100 rounded overflow-hidden relative">
                  <Image 
                    src={formData.imagem_url} 
                    alt="Preview"
                    fill
                    className="object-cover"
                    onError={handleImageError}
                    sizes="160px"
                  />
                </div>
              ) : formData.imagem_url && imagemPreviewError ? (
                <div className="mt-2 w-40 h-24 bg-gray-100 rounded overflow-hidden flex items-center justify-center text-red-500 text-xs">
                  Imagem inválida
                </div>
              ) : null}
            </div>

            {/* Slug */}
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                Slug (URL)
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  /blog/
                </span>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  className="block w-full rounded-none rounded-r-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                  required
                />
              </div>
            </div>

            {/* Categorias */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categorias
              </label>
              <div className="flex flex-wrap mb-2">
                {formData.categorias.map((categoria, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-2 mb-2"
                  >
                    {categoria}
                    <button
                      type="button"
                      onClick={() => removerCategoria(categoria)}
                      className="ml-1 focus:outline-none"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex">
                <input
                  type="text"
                  value={novaCategoria}
                  onChange={(e) => setNovaCategoria(e.target.value)}
                  className="block w-full rounded-l-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                  placeholder="Nova categoria..."
                  list="categorias-sugeridas"
                />
                <datalist id="categorias-sugeridas">
                  {categoriasSugeridas.map((cat, index) => (
                    <option key={index} value={cat} />
                  ))}
                </datalist>
                <button
                  type="button"
                  onClick={adicionarCategoria}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Adicionar
                </button>
              </div>
            </div>

            {/* SEO */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-700">SEO</h3>
              
              <div>
                <label htmlFor="meta_descricao" className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Descrição
                </label>
                <textarea
                  id="meta_descricao"
                  name="meta_descricao"
                  value={formData.meta_descricao}
                  onChange={handleChange}
                  rows={2}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                  placeholder="Descrição para exibição em resultados de busca"
                />
              </div>
              
              <div>
                <label htmlFor="meta_keywords" className="block text-sm font-medium text-gray-700 mb-1">
                  Palavras-chave (separadas por vírgula)
                </label>
                <input
                  type="text"
                  id="meta_keywords"
                  name="meta_keywords"
                  value={formData.meta_keywords}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2 border"
                  placeholder="saúde mental, ansiedade, psicologia"
                />
              </div>
            </div>

            {/* Status */}
            <div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="publicado"
                  name="publicado"
                  checked={formData.publicado}
                  onChange={(e) => setFormData(prev => ({ ...prev, publicado: e.target.checked }))}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="publicado" className="text-sm font-medium text-gray-700">
                  Publicar imediatamente
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Se desmarcado, o post será salvo como rascunho.
              </p>
            </div>

            {/* Conteúdo */}
            <div className="mt-8">
              <label htmlFor="conteudo" className="block text-sm font-medium text-gray-700 mb-2">
                Conteúdo (Markdown)
              </label>
              
              <SimpleMdeReact
                value={formData.conteudo}
                onChange={handleEditorChange}
                options={editorOptions}
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-6 py-4 flex justify-between">
          <button
            type="button"
            onClick={() => router.push('/adminblog')}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={salvando}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark flex items-center"
          >
            {salvando ? (
              <>
                <div className="animate-spin -ml-1 mr-2 h-4 w-4 text-white">⌛</div>
                Salvando...
              </>
            ) : (
              'Salvar Post'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm; 