<!-- Parte da skill regreen-design. Índice e regras essenciais em ../SKILL.md -->
# Componentes e ícones

## 9. Componentes

Base: shadcn/ui em `src/components/ui/`. As regras abaixo são como configurá-los.

### Botão (`Button`)

| Variante | Visual | Quando |
|---|---|---|
| `default` (primária) | Fundo `rg-mata`, texto branco; hover `rg-mata-700`; pressionado `rg-mata-900` | **Uma por área** — a ação principal |
| `tonal` | Fundo `#C4E0B9`, fio `rgba(16,56,29,.16)`, texto `rg-mata`, `shadow-sm`; hover `#B3D6A5` | Ação frequente ao lado da primária (Exportar, Validar). Um toque de verde, não uma massa |
| `outline` (secundária) | Fundo branco, fio `rg-hairline`, texto `rg-ink`, `shadow-sm`; hover fundo `rg-hover` e fio `rg-control` | Ações secundárias neutras |
| `ghost` | Texto `rg-ink`; hover fundo `rg-sunken` | Ações terciárias, barras de ferramenta |
| `destructive` | Fundo `rg-vermelho`, texto branco | Só dentro da confirmação de exclusão |
| `bright` (opcional) | Fundo `rg-mudas`, texto `rg-mata`; hover `rg-mudas-700` | Uma ação de destaque sobre fundo escuro (login, sidebar) |

- Forma pílula (`rounded-full`), 14px SemiBold, padding horizontal 16–20px. Pressionar: `scale(.98)`.
- Altura: 40px padrão, 32px em barra de ferramenta/tabela (desktop), 44px em mobile.
- Ícone opcional à esquerda (16px). Botão só de ícone: circular, com `aria-label` e tooltip.
- Carregando: spinner no lugar do ícone + texto mantido ("Salvando…"), botão desabilitado.
- Desabilitado: fundo `rg-sunken`, texto `rg-control`. Diga o motivo em tooltip quando não for óbvio.

### Controle segmentado (alternar visão, densidade, período)

- Trilho `rg-sunken` em pílula, padding 3px, sem borda.
- Opções 14px Medium em `rg-ink-muted`; a ativa vira **chip branco** com `shadow-card`, texto `rg-ink` SemiBold, `aria-pressed="true"`. O chip desliza entre opções (§3.6).
- Nunca opção ativa em Verde Mata cheio.

### Campos (`Input`, `Select`, `Textarea`, `Combobox`)

- Fundo branco, borda 1px `rg-control`, raio 12px, altura 40px (32px compacto), texto 14px. Busca global em pílula.
- Foco: borda `rg-mata` + halo de 3px `rgba(104,193,83,.25)` (Verde das Mudas translúcido).
- **Rótulo acima**, 14px SemiBold, sentence case. Nunca só placeholder.
- Ajuda abaixo em 12px `rg-ink-muted`; erro abaixo em 12px `status-crit-fg` com ícone, borda do campo em `rg-vermelho`, `aria-invalid` + `aria-describedby`.
- Obrigatório: marque os **opcionais** ("(opcional)"), não os obrigatórios com asterisco.
- Largura proporcional ao conteúdo esperado; dropdowns e menus com largura para a opção mais longa (`min-w-[var(--radix-select-trigger-width)]` e sem corte).
- Select com mais de 8 opções vira Combobox com busca.
- Checkbox e radio marcados: preenchimento `rg-mata`, check branco.
- Switch: ligado `rg-mata`; use só para efeito imediato. Se precisa salvar, é checkbox.

### Tabela (`Table`)

- Em painel branco (raio 16px, `shadow-card`). **Sem zebra. Cabeçalho nunca em Verde Mata.**
- Cabeçalho: eyebrow (12px SemiBold caixa alta, `rg-ink-muted`), fundo branco, fio inferior `rg-hairline`, `sticky`.
- Linhas: fio inferior `rg-hairline-soft`; hover `rg-hover`; selecionada `rg-mudas-10`.
- Altura de linha: 40px compacto, 48px confortável. Texto 14px.
- Primeira coluna: **nome + código** da entidade, nome como link (§11).
- Números à direita, `tabular-nums`, unidade no cabeçalho. Texto à esquerda. Status em tag.
- Ordenação no cabeçalho com ícone de seta e `aria-sort`.
- **Modo leitura por padrão**; edição por linha (menu de ações) ou ao clicar na célula, com estado de salvamento.
- Ações da linha: menu `⋯` (ícone `MoreHorizontal`) no fim, visível sempre, não só no hover.
- Tabela vazia: estado vazio (§9 Estados), nunca cabeçalho sozinho.
- Muitas colunas: scroll horizontal com primeira coluna fixa; ofereça escolha de colunas.

### Tag de status (`Badge`)

- Pílula, 12px SemiBold, sentence case, padding 4px 10px, fundo `status-*-bg`, texto `status-*-fg`, **ícone ou ponto de 6px** antes do texto.
- Texto sempre presente: "Atrasado", nunca só a cor.
- Categoria (não status): pílula com fio `rg-hairline` e texto `rg-ink`, sem cor.

### Painel e card

- Painel: fundo branco, fio `rg-hairline-soft`, raio 16px, `shadow-card`, padding 24px. Título 20px Bold `rg-ink`; ação à direita (link ou botão ghost).
- Não aninhe cards. Dentro do card, agrupe com bloco rebaixado (`rg-gelo`, raio 10px) ou fio `rg-hairline-soft` — é o que dá leveza.
- Card clicável: cursor pointer; hover sobe 1px e vai para `shadow-raised`; foco visível; o card inteiro é o alvo. Selecionado: contorno 1px `rg-mata`.
- Barra de progresso: 4px, pontas arredondadas, trilho `rg-track`, preenchimento `rg-mata` (parcial) e `rg-mudas` (completo).

### Quadro (kanban)

- **Raia:** 304px (85% da tela no mobile), fundo `rg-sunken`, raio 16px, contorno interno `rg-hairline-soft`, altura total da área de conteúdo, rolagem vertical própria `.scroll-quiet` (§3.7).
- **Faixa de 4px no topo da raia** com a rampa sequencial do Verde Mata (etapa 1 clara → última escura; On Hold cinza). Codifica a ordem do fluxo, não categoria. Nunca arco-íris por etapa.
- **Cabeçalho:** nome completo da etapa (quebra em 2 linhas, nunca trunca), contagem em pílula branca com `shadow-sm`, 1 número de apoio (ex.: área). Prazo da etapa em tooltip.
- **Raia vazia nasce recolhida** (56px, título vertical, contagem e chevron); On Hold nasce recolhida. Depois que a pessoa abre ou fecha, vale a escolha dela.
- **Card de quadro:** raio 14px, padding 14–16px, segue o orçamento do §7.2 e a regra de exceção do §7.1. Escritório/responsável como avatar de iniciais no canto, com tooltip.
- **Mover card:** por arrastar (§3.6) **e** por um seletor de etapa no drawer, com "Salvando… / Salvo", toast com Desfazer e destaque do card na nova raia.

### Indicador (KPI, big numbers)

**Quando usar.** Big numbers são para telas cujo trabalho é **acompanhar indicadores**: painel, visão geral, relatório, home de módulo. Em telas **operacionais** a pessoa trabalha item a item, e números grandes só roubam espaço e atenção.

| Tela | Big numbers? | No lugar |
|---|---|---|
| Painel, dashboard, visão geral, relatório | Sim, 3 a 6 | — |
| Quadro kanban, lista/tabela de trabalho, fila, caixa de entrada | **Não** | Contagem na linha de contexto do cabeçalho ("23 terras · 8 acima do prazo") e nos cabeçalhos das raias; "acima do prazo" pode virar chip de filtro |
| Página de uma entidade (terra, contrato) | Não, em regra | Campos-chave no cabeçalho da entidade; métricas só se forem a razão da página |
| Formulário, configuração, assistente | Não | — |

Na dúvida: se a pessoa abre a tela para **decidir onde agir**, cabe big number; se abre para **agir**, não cabe.

**Como fazer:**
- Card branco (raio 16px, `shadow-card`). Eyebrow em cima (`rg-eyebrow`), número 32px SemiBold **em `rg-mata`** (um dos poucos lugares da cor), unidade em 14px `rg-ink-muted` ao lado, 1 linha de contexto em 12px `rg-ink-muted`.
- KPI clicável: ícone `ArrowUpRight` discreto no canto; hover sobe 1px + `shadow-raised`; filtro ativo: contorno 1px `rg-mata` + `aria-pressed="true"`.
- Variação: "+4,2% vs. out/2026" em 12px, com ícone de seta e cor de status **só se houver referência** (meta, orçamento).
- Card de indicador leva à lista filtrada correspondente (é um link).
- No máximo 4–6 KPIs por faixa. Sem ícone decorativo, sem gráfico dentro.

### Drawer (painel lateral de detalhe — `Sheet`)

- Abre pela direita, 50–60% da largura (100% no mobile), flutuando 8px das bordas, raio 16px, fundo branco, `shadow-overlay`.
- Cabeçalho fixo: nome + código, tag de status, X para fechar, link "Abrir página" (ícone `ArrowUpRight`).
- Fecha por X, Esc e clique fora. Foco vai para o título ao abrir e volta ao gatilho ao fechar.

### Modal (`Dialog`, `AlertDialog`)

- Só para decisão curta ou formulário pequeno (≤ 6 campos). Mais que isso: drawer ou página.
- Largura 480–560px, raio 16px, `shadow-overlay`, fundo da página escurecido com `rgba(0,37,13,0.4)`.
- Botões no rodapé à direita: secundária à esquerda, primária à direita.
- **Ação destrutiva ou que afeta outros dados pede confirmação** (`AlertDialog`) dizendo o que acontece, ou oferece desfazer.

### Abas (`Tabs`)

- Sublinhadas: texto 14px, ativa em `rg-ink` SemiBold com barra inferior de 2px `rg-mata`; inativa em `rg-ink-muted`.
- Usadas dentro de uma entidade ou painel, nunca como navegação principal.
- Contagem opcional: "Documentos (12)".

### Feedback

- **Toast** (`sonner`): canto inferior direito, 5s, fundo branco, ícone de status, texto 14px. Ações destrutivas reversíveis mostram "Desfazer".
- **Edição inline mostra estado:** "Salvando…" → "Salvo às 14:32" (12px `rg-ink-muted`, ao lado do campo ou no cabeçalho). Erro de salvamento fica visível até ser resolvido.
- **Alerta na página** (`Alert`): fundo `status-*-bg`, ícone + título + texto + ação. Um por vez no topo da área afetada.

### Estados

- **Carregando:** skeleton no formato do conteúdo, cor `rg-sunken`. Spinner só em botão ou ação pontual. Nunca tela em branco.
- **Vazio:** um dos 7 ícones da marca (48px, `assets/icons/`), frase que explica o porquê e o próximo passo, e a ação ("Nenhuma terra nesta etapa. Mude o filtro de região ou cadastre uma terra."). Blocos sem conteúdo útil ficam ocultos em vez de vazios.
- **Erro de carregamento:** o que falhou, quando, e botão "Tentar de novo". Mostre dado em cache com aviso de "desatualizado desde …" quando houver.
- **Sem permissão:** diga qual acesso falta e com quem falar.

### Filtros

- Barra de filtros acima do conteúdo: busca à esquerda, filtros como chips/selects, "Limpar filtros" quando algum estiver ativo.
- Chip de filtro: pílula branca, fio `rg-hairline`, texto `rg-ink`, `shadow-sm`.
- Filtros ativos sempre visíveis e removíveis: chip `rg-mudas-10` com texto `rg-mata` SemiBold e X. Nunca chip Verde Mata cheio.
- O total e os KPIs refletem o filtro, e o rótulo diz isso.

### Clicável parece clicável

- Links: `rg-mata`, sublinhado no hover (sempre sublinhado dentro de texto corrido).
- Cursor pointer, hover e foco visível em tudo que é interativo. Nada que não é clicável tem hover.
- Ícone cujo destino não é óbvio usa ícone que sinaliza: `ArrowUpRight` (vai para outra tela), `ExternalLink` (sai do app), `Download`.


### Tela de login (meio a meio)

Login é a primeira impressão da marca: **não use formulário solto no meio de uma tela vazia.** Padrão único para todos os apps, pronto em `code/LoginSplit.tsx`:

```
┌───────────────────────────┬───────────────────────────┐
│                           │                           │
│   FOTO OFICIAL            │     Nome do produto       │
│   (metade esquerda,       │     Entrar                │
│    sangrada, sem raio)    │     [Entrar com Microsoft]│
│                           │     ─── ou com e-mail ─── │
│                           │     E-mail                │
│  logotipo off-white       │     Senha   Esqueci a senha│
│  Frase curta da marca.    │     [ Entrar ]            │
└───────────────────────────┴───────────────────────────┘
       fundo da foto                fundo creme
```

- **Desktop (≥ 1024px):** duas colunas iguais. Esquerda = imagem; direita = formulário em fundo `rg-creme`, coluna de no máximo 384px centralizada.
- **Mobile/tablet (< 1024px):** a imagem some; fica o formulário com o logotipo verde em cima.
- **Imagem:** só fotos aprovadas pela Comunicação e Marketing (biblioteca a ser definida por eles; até lá, peça a imagem à pessoa). Verde saturado, luz quente, nunca P&B. `object-fit: cover`, `alt=""` (decorativa), `loading="lazy"`: o formulário aparece antes da foto. **Nunca** foto de banco de imagens, imagem gerada por IA nem ilustração genérica.
- **Sem imagem aprovada:** a metade esquerda fica em **Verde Mata chapado** com o logotipo off-white e a frase — já é uma tela de marca completa. Não deixe a metade vazia nem centralize o formulário sozinho.
- **Sobre a foto:** logotipo off-white (32px de altura) e, opcional, **uma frase curta da marca** (até 8 palavras, 24px SemiBold, creme) no canto inferior esquerdo, com proteção `linear-gradient(to top, rgba(0,37,13,.72), transparent 55%)` só embaixo. Nada de caixa sólida atrás do texto.
- **Formulário:** eyebrow com o nome do produto, título "Entrar" (24px Bold), botão "Entrar com a conta Microsoft da re.green" quando houver SSO (é o caminho principal), divisor "ou com e-mail", campos com rótulo acima, "Esqueci a senha" como link discreto, botão primário de largura total, uma linha de rodapé sobre acesso restrito.
- **Erros** em tag `crit` acima do botão, dizendo o que fazer ("E-mail ou senha incorretos. Confira e tente de novo."). Nunca revele se o e-mail existe.
- **Sem** sidebar, barra do topo, links de navegação, rodapé com mapa do site ou animação de fundo.

## 13. Ícones e imagem

- **Ícones de interface: `lucide-react`**, `strokeWidth={1.75}`, 16px inline e em botão, 20px na sidebar e em cabeçalho. Cor herdada do texto (`currentColor`).
- **Um ícone por conceito em todo o produto** (ex.: `MapPin` = localização, sempre).
- Ícone sem texto exige `aria-label` e tooltip. Ícone decorativo ao lado de texto: `aria-hidden`.
- **Os 7 ícones da marca** (`jequitibá, pau-brasil, sapopema, tucano, lupa, pasta, relógio`) são ilustração: estados vazios, login, telas de boas-vindas, em 48–64px. Não use como ícone de botão. Os SVGs vêm em traço quase preto; pinte com `mask` + `background-color: var(--rg-mata)`.
- **Fotografia** (login, capa de módulo): verde saturado, luz quente, nunca P&B nem dessaturada. Texto sobre foto usa scrim `linear-gradient(to top, rgba(0,37,13,0.72), transparent 70%)`. Imagem decorativa carrega depois do conteúdo (`loading="lazy"`) e nunca atrasa a tarefa.
- Sem emoji, sem ilustração genérica de banco de imagens, sem ícone de outra biblioteca misturado.


