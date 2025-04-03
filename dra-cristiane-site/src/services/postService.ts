import { supabase } from '@/lib/supabase';
import { Post, PostFormData } from '@/types/blog';
import { v4 as uuidv4 } from 'uuid';

export async function getPosts({ 
  publicadosApenas = true, 
  limite = 10, 
  pagina = 1,
  categoria = null,
  search = null
}: { 
  publicadosApenas?: boolean;
  limite?: number;
  pagina?: number;
  categoria?: string | null;
  search?: string | null;
}) {
  let query = supabase
    .from('posts')
    .select('*', { count: 'exact' });
  
  // Filtrar por posts publicados, se solicitado
  if (publicadosApenas) {
    query = query.eq('publicado', true);
  }
  
  // Filtrar por categoria, se especificada
  if (categoria && categoria !== 'Todos') {
    query = query.contains('categorias', [categoria]);
  }
  
  // Pesquisar por termo, se fornecido
  if (search) {
    query = query.or(`titulo.ilike.%${search}%,resumo.ilike.%${search}%,conteudo.ilike.%${search}%`);
  }
  
  // Paginação
  const from = (pagina - 1) * limite;
  const to = from + limite - 1;
  
  const { data, error, count } = await query
    .order('data_publicacao', { ascending: false })
    .range(from, to);
  
  if (error) {
    console.error('Erro ao buscar posts:', error);
    throw new Error('Falha ao carregar posts');
  }
  
  return { 
    posts: data as Post[],
    total: count || 0
  };
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error('Erro ao buscar post por slug:', error);
    return null;
  }
  
  return data as Post;
}

export async function getPostById(id: number) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Erro ao buscar post por ID:', error);
    return null;
  }
  
  return data as Post;
}

export async function createPost(postData: PostFormData) {
  const { data, error } = await supabase
    .from('posts')
    .insert([postData])
    .select()
    .single();
  
  if (error) {
    console.error('Erro ao criar post:', error);
    throw new Error('Falha ao criar novo post');
  }
  
  return data as Post;
}

export async function updatePost(id: number, postData: PostFormData) {
  const { data, error } = await supabase
    .from('posts')
    .update(postData)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Erro ao atualizar post:', error);
    throw new Error('Falha ao atualizar post');
  }
  
  return data as Post;
}

export async function deletePost(id: number) {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error('Erro ao excluir post:', error);
    throw new Error('Falha ao excluir post');
  }
  
  return true;
}

export async function togglePostStatus(id: number, publicado: boolean) {
  const { data, error } = await supabase
    .from('posts')
    .update({ publicado })
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Erro ao alterar status do post:', error);
    throw new Error('Falha ao atualizar status do post');
  }
  
  return data as Post;
}

export async function getCategorias() {
  const { data, error } = await supabase
    .from('posts')
    .select('categorias');
  
  if (error) {
    console.error('Erro ao buscar categorias:', error);
    return [];
  }
  
  // Extrair categorias únicas de todos os posts
  const todasCategorias = data.flatMap(post => post.categorias || []);
  const categoriasUnicas = [...new Set(todasCategorias)];
  
  return categoriasUnicas;
} 