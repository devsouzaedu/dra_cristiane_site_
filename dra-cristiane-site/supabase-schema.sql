-- Criar tabela de posts
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo TEXT NOT NULL,
  resumo TEXT NOT NULL,
  conteudo TEXT NOT NULL,
  data_publicacao TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  atualizado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  publicado BOOLEAN DEFAULT FALSE,
  imagem_url TEXT,
  slug TEXT UNIQUE NOT NULL,
  categorias TEXT[] DEFAULT '{}',
  meta_descricao TEXT,
  meta_keywords TEXT,
  autor TEXT DEFAULT 'Dra. Cristiane Duarte'
);

-- Habilitar o RLS (Row Level Security)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir leitura de qualquer post publicado
CREATE POLICY "Posts publicados são visíveis para todos" ON posts
  FOR SELECT USING (publicado = TRUE);

-- Criar política para permitir que o administrador gerencie todos os posts
-- Esta política será associada a um role específico futuramente, por enquanto usando service_role
CREATE POLICY "Acesso completo para administradores" ON posts
  FOR ALL USING (true);

-- Adicionar indices para melhorar performance
CREATE INDEX posts_slug_idx ON posts (slug);
CREATE INDEX posts_publicado_idx ON posts (publicado);

-- Adicionar função para atualizar o timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
   NEW.atualizado_em = CURRENT_TIMESTAMP;
   RETURN NEW;
END;
$$ language 'plpgsql';

-- Adicionar trigger para atualizar timestamp quando o post for atualizado
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at();

-- Inserir alguns posts de exemplo
INSERT INTO posts (titulo, resumo, conteudo, publicado, slug, categorias)
VALUES
  (
    'Como a terapia cognitivo-comportamental pode ajudar no tratamento da ansiedade',
    'Descubra como a TCC pode ser eficaz para gerenciar os sintomas de ansiedade e melhorar sua qualidade de vida.',
    '# Como a terapia cognitivo-comportamental pode ajudar no tratamento da ansiedade

A Terapia Cognitivo-Comportamental (TCC) é uma abordagem terapêutica baseada em evidências científicas que tem se mostrado altamente eficaz no tratamento de transtornos de ansiedade. Neste artigo, exploraremos como a TCC funciona e como ela pode ajudar pessoas que sofrem com ansiedade.

## O que é a Terapia Cognitivo-Comportamental?

A TCC é uma forma de psicoterapia que se concentra na relação entre pensamentos (cognições), sentimentos e comportamentos. Ela parte do princípio de que nossos pensamentos influenciam nossas emoções e comportamentos, e que, ao modificar padrões de pensamento disfuncionais, podemos melhorar nosso estado emocional e mudar comportamentos problemáticos.

## Como a TCC aborda a ansiedade?

A ansiedade muitas vezes é mantida por pensamentos catastróficos e comportamentos de evitação. A TCC aborda esses elementos através de:

1. **Identificação de pensamentos automáticos negativos**: Aprender a reconhecer pensamentos distorcidos que alimentam a ansiedade.
2. **Reestruturação cognitiva**: Questionar e substituir pensamentos ansiosos por alternativas mais realistas.
3. **Exposição gradual**: Enfrentar gradualmente situações temidas em um ambiente seguro.
4. **Técnicas de relaxamento**: Aprender estratégias para reduzir a ativação fisiológica associada à ansiedade.
5. **Treinamento de habilidades**: Desenvolver ferramentas para lidar melhor com os desafios diários.

## Benefícios da TCC para o tratamento da ansiedade

- **Resultados rápidos**: Comparada a outras terapias, a TCC geralmente produz resultados em um período mais curto (cerca de 12 a 16 sessões).
- **Foco no presente**: Concentra-se em problemas atuais em vez de se aprofundar no passado.
- **Habilidades práticas**: Fornece ferramentas concretas que podem ser aplicadas no dia a dia.
- **Eficácia comprovada**: Possui forte respaldo científico para o tratamento de diversos transtornos de ansiedade.

Se você sofre com ansiedade, a TCC pode ser uma opção terapêutica valiosa. Consulte um profissional qualificado para uma avaliação adequada e para determinar se esta abordagem é a mais indicada para o seu caso específico.',
    TRUE,
    'tcc-tratamento-ansiedade',
    ARRAY['Ansiedade', 'Terapia']
  ),
  (
    'Sinais de alerta para depressão que não devem ser ignorados',
    'Conheça os principais sinais de depressão e a importância de buscar ajuda profissional para tratamento adequado.',
    '# Sinais de alerta para depressão que não devem ser ignorados

A depressão é uma condição de saúde mental séria que afeta milhões de pessoas em todo o mundo. Reconhecer os sinais precocemente pode fazer grande diferença no tratamento e na recuperação. Neste artigo, discutiremos os principais sinais de alerta que não devem ser ignorados.

## Sinais emocionais

- **Tristeza persistente**: Sentimento de tristeza que dura a maior parte do dia, quase todos os dias, por pelo menos duas semanas.
- **Perda de interesse**: Diminuição do prazer em atividades que antes eram agradáveis (anedonia).
- **Sentimentos de culpa ou inutilidade**: Autocrítica excessiva e sentimentos intensos de culpa sem motivo aparente.
- **Desesperança**: Visão pessimista do futuro e sensação de que as coisas nunca vão melhorar.

## Sinais físicos

- **Alterações no sono**: Insônia ou hipersonia (dormir demais).
- **Mudanças no apetite ou peso**: Aumento ou diminuição significativa sem dieta intencional.
- **Fadiga constante**: Sensação persistente de cansaço e falta de energia.
- **Lentidão psicomotora**: Movimentos e fala mais lentos, perceptíveis pelos outros.

## Sinais cognitivos

- **Dificuldade de concentração**: Problemas para focar, tomar decisões ou lembrar-se de detalhes.
- **Pensamentos recorrentes sobre morte**: Ideação suicida ou preocupação constante com a morte.

## Quando buscar ajuda

Se você ou alguém que você conhece apresenta vários destes sinais por mais de duas semanas, é fundamental buscar ajuda profissional. A depressão é uma condição tratável, e quanto mais cedo o tratamento for iniciado, melhores são as chances de recuperação.

Os tratamentos para depressão geralmente incluem psicoterapia, medicamentos ou uma combinação de ambos, dependendo da gravidade dos sintomas e das necessidades individuais de cada pessoa.

Lembre-se: buscar ajuda não é sinal de fraqueza, mas sim um passo corajoso em direção à recuperação e ao bem-estar.',
    TRUE,
    'sinais-alerta-depressao',
    ARRAY['Depressão', 'Saúde Mental']
  ); 