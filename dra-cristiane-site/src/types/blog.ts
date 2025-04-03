export interface Post {
  id: number;
  titulo: string;
  resumo: string;
  conteudo: string;
  data_publicacao: string;
  atualizado_em?: string;
  publicado: boolean;
  imagem_url?: string;
  slug: string;
  categorias: string[];
  meta_descricao?: string;
  meta_keywords?: string;
  autor?: string;
}

export type PostFormData = Omit<Post, 'id' | 'data_publicacao' | 'atualizado_em'> & {
  id?: number;
}; 