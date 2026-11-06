<!-- Parte da skill regreen-design. Índice e regras essenciais em ../SKILL.md -->
# Layout e navegação

## 4. Layout e grid

- **Layout fluido, nunca coluna fixa estreita.** Grid de 12 colunas, largura máxima de conteúdo `max-w-content` (1600px), margens laterais de 24px (notebook) e 32px (desktop), 16px no mobile. Em tela larga o conteúdo ganha colunas, não margens vazias.
- **A estrutura depende do tamanho do app.** Escolha pelo número de telas, não por hábito:

  | App | Estrutura |
  |---|---|
  | **Uma tela** (ferramenta, calculadora, formulário, relatório único) | **Sem sidebar.** Barra do topo de 56px com logotipo verde + nome da ferramenta à esquerda e, se houver, conta/ajuda à direita. Conteúdo logo abaixo |
  | **Duas ou mais telas**, ou módulos que vão crescer | App shell com sidebar (abaixo e §8) |
  | Página dentro de outro app ou embutida | Sem barra própria: só cabeçalho da página |

  Nunca crie sidebar com um item só, nem itens de navegação para telas que não existem.
- **App shell (duas ou mais telas):**
  ```
  ┌──────────┬────────────────────────────────────────────────┐
  │ Sidebar  │ Cabeçalho da página (breadcrumb · título · ação)│
  │ 248px    ├────────────────────────────────────────────────┤
  │ fundo    │ Barra de filtros (quando houver)               │
  │ creme    ├────────────────────────────────────────────────┤
  │          │ Conteúdo (fundo verde-gelo, cards brancos)     │
  └──────────┴────────────────────────────────────────────────┘
  ```
- **Cabeçalho da página:** breadcrumb (12px) acima; título 24px Bold; à direita, no máximo **uma** ação primária e até duas secundárias. Uma linha de contexto opcional abaixo do título (14px, `rg-ink-muted`), por exemplo "32 terras, sem On Hold · atualizado em 05/11/2026 14:32".
- **Larguras por proporção, não por pixel fixo.** Painel lateral de detalhe (drawer) ocupa 50–60% da largura e mantém o contexto visível ao fundo.
- **Listas laterais recolhíveis:** expandidas com 280–320px (`w-list`), recolhidas viram trilho de 56px. Em telas densas (planilha, tabela larga) comece recolhida.
- **Lista + detalhe lado a lado** para trocar de item sem voltar.
- **Barras fixas:** em telas de trabalho, tudo acima do conteúdo fica fixo e só o conteúdo rola (§3.7).


## 8. Navegação e arquitetura

- **App de uma tela não tem navegação principal** (§4): só a barra do topo com logotipo e nome.
- **Com duas ou mais telas, navegação principal em sidebar colapsável** (shadcn `Sidebar`), nunca abas no topo.
  - Fundo `rg-creme`, fio `rg-hairline` à direita. **Não** use Verde Mata como fundo de sidebar.
  - Logotipo verde no topo (`<Logo className="h-6 w-auto" />`, altura 24px), nome do produto ao lado em 14px SemiBold `rg-ink`, separado por fio vertical.
  - Item: altura 40px, raio 12px, peso 500, ícone Lucide 20px + rótulo 14px em `rg-ink-muted`. Hover: fundo `rg-creme-600`, texto `rg-ink`.
  - Item ativo: **chip branco** com `shadow-card`, texto `rg-mata` SemiBold, **barra de 3px `rg-mudas` à esquerda**, `aria-current="page"`.
  - Grupos com eyebrow (12px, caixa alta, `rg-ink-muted`).
  - Recolhida: trilho de 64px só com ícones + tooltip com o nome.
- **Barra do topo:** fundo `rg-gelo`, fio inferior; busca em pílula branca, notificações e avatar à direita.
- **Menu do avatar só com itens de conta** (perfil, preferências, sair). Funcionalidade nunca fica escondida ali.
- **Uma entidade, uma página.** Tudo sobre um objeto (terra, contrato, pessoa) vive dentro dele, em abas. Visões por módulo mostram a carteira e abrem a entidade na aba certa (`/terras/TER-0064?aba=juridico`).
- **Ações levam ao ponto exato.** "Abrir" numa pendência abre o item com o problema já destacado (scroll + realce de 2s).
- **Fique no contexto.** Fluxos internos não abrem nova janela. Se levar a outra tela, ela mostra de onde veio (breadcrumb) e como voltar.
- **Um caminho principal por tarefa.** Se houver mais de um, diga quando usar cada um.
- **Ações sobre a entidade disponíveis onde ela aparece.** Se dá para mudar o status no quadro, dá para mudar na página da entidade.
- **Uma forma de fechar:** painéis e modais fecham por X e Esc. Sem botão "Voltar" duplicado.
- **Estado na URL:** filtros, aba ativa, ordenação e item aberto ficam na query string, para o link ser compartilhável.


