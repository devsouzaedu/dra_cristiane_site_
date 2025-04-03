# Painel Administrativo do Blog - Dra. Cristiane Duarte

Este documento descreve a estrutura e funcionamento do blog e seu painel administrativo.

## Estrutura

O blog é composto por:

1. **Blog Público**:
   - Listagem de posts: `/blog`
   - Visualização de post individual: `/blog/[slug]`

2. **Painel Administrativo**:
   - Login: `/adminblog`
   - Dashboard (lista de posts): `/adminblog` (após login)
   - Criação de post: `/adminblog/novo`
   - Edição de post: `/adminblog/editar/[id]`

## Banco de Dados (Supabase)

O blog utiliza o Supabase como banco de dados. O arquivo `supabase-schema.sql` contém o SQL para criar a estrutura necessária:

- Tabela `posts` com todos os campos necessários
- Políticas de segurança adequadas
- Trigger para atualização automática do timestamp

### Credenciais do Supabase

```
SUPABASE PROJECT NAME = BLOG - CRISTIANE DUARTE SITE 
PROJECT ID = mtokfoeastdyvcmqnpme
SUPABASE URL = https://mtokfoeastdyvcmqnpme.supabase.co
```

## Como Usar o Painel Administrativo

### Acesso

1. Acesse a rota `/adminblog`
2. Digite a senha de acesso: `2210@`
3. Após autenticação, você terá acesso ao dashboard

### Dashboard

No dashboard você pode:
- Ver todos os posts (publicados e rascunhos)
- Filtrar por status (publicado/rascunho) ou buscar por texto
- Publicar/despublicar posts com um clique
- Editar posts existentes
- Excluir posts (com confirmação)
- Criar novos posts

### Criação/Edição de Posts

O formulário de post contém:
- Título
- Resumo
- URL da imagem de capa
- Slug (gerado automaticamente, mas editável)
- Categorias (com sugestões de categorias existentes)
- Campos para SEO (meta descrição e palavras-chave)
- Editor de Markdown para o conteúdo do post
- Opção para publicar imediatamente ou salvar como rascunho

## Recursos Técnicos

- **Autenticação**: Implementada com senha fixa armazenada no cliente
- **Supabase**: Utilizado para armazenamento e consulta de posts
- **Markdown**: Editor para conteúdo com suporte a formatação rica
- **Responsividade**: Interface adaptável a diferentes tamanhos de tela

## Desenvolvimento

Para adicionar novos recursos ao blog:

1. O serviço de posts está em `src/services/postService.ts`
2. Os componentes do admin estão em `src/components/admin/`
3. As páginas do painel estão em `src/app/adminblog/`

## Requisitos

Para executar o projeto, você precisa instalar as dependências:

```bash
npm install
```

## Executando

```bash
npm run dev
```

Acesse `http://localhost:3000/adminblog` para utilizar o painel administrativo. 