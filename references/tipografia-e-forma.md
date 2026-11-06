<!-- Parte da skill regreen-design. Índice e regras essenciais em ../SKILL.md -->
# Tipografia, espaçamento, forma e breakpoints

### 3.3 Tipografia

**Fonte de interface: Figtree** (Google Fonts, pesos 400 · 500 · 600 · 700), fallback `system-ui, -apple-system, 'Segoe UI', sans-serif`.

Uma família só na interface. Hierarquia vem de peso e tamanho, não de troca de fonte. **Sharp Grotesk PE não entra na interface**: fica para peças de marketing, apresentações e, no máximo, um título de boas-vindas na tela de login.

| Papel | Tamanho / altura | Peso | Tracking | Classe |
|---|---|---|---|---|
| Título de página | 24 / 1,2 | Bold 700 | -0,015em | `text-xl font-bold tracking-tight` |
| Número de KPI | 32 / 1,2 | SemiBold 600 | -0,02em | `text-2xl font-semibold tabular-nums text-rg-mata` |
| Título de painel, modal, drawer | 20 / 1,3 | Bold 700 | -0,015em | `text-lg font-bold` |
| Título de card, subtítulo, rótulo de grupo | 14–16 / 1,35 | SemiBold 600 | 0 | `text-sm font-semibold` |
| **UI padrão** (tabela, campo, botão, menu) | 14 / 1,5 | Regular 400 · Medium 500 | 0 | `text-sm` |
| Texto corrido, descrições | 16 / 1,5 | Regular 400 | 0 | `text-base` |
| Secundário, legenda, eixo | 12 / 1,4 | Regular / Medium | 0 | `text-xs` |
| Eyebrow | 12 / 1,4 | SemiBold 600, caixa alta | 0,06em | `text-xs font-semibold uppercase` |

- **Escala fixa: 12 · 14 · 16 · 20 · 24 · 32.** O preset redefine o Tailwind: `text-xs`=12, `text-sm`=14, `text-base`=16, `text-lg`=20, `text-xl`=24, `text-2xl`=32. Não existem outras classes. Nada abaixo de 12px — nem rótulo de gráfico, chip ou badge.
- **Nunca `zoom` ou `font-size` global reduzido** para "caber mais". Refinamento vem de menos texto (§7) e espaçamento, não de letra menor.
- **Pesos:** 400 (texto), 500 (itens de menu, chips, valores em listas), 600 (título de card, botões, rótulos), 700 (títulos de página e painel). Nada de 800/900.
- **Cor do texto:** `rg-ink` para títulos e corpo, `rg-ink-muted` para secundário. Título **não** é Verde Mata. Exceção: número de KPI em `rg-mata`.
- **Eyebrow** (rótulo de seção): cor `rg-eyebrow` (`#2D6A1F`, verde-escuro, 6,4:1 em branco) — um dos toques de verde da tela. Use para rotular blocos e KPIs; em cabeçalho de tabela e grupo da sidebar use `rg-ink-muted`.
- **Medida:** texto corrido com no máximo 62ch (`max-w-prose`).
- **Números em tabela e métrica:** `tabular-nums`, alinhados à direita.

### 3.4 Espaçamento

- Base de 4px; **layout em múltiplos de 8** (8, 16, 24, 32, 48, 64). 4 e 12 só dentro de componentes (ícone + texto, padding de tag).
- Padding de painel: 24px (desktop), 16px (mobile). Gap entre painéis: 24px. Entre seções da página: 32–48px.

### 3.5 Forma e profundidade

Raios concêntricos: o elemento de dentro usa o raio do de fora menos o espaço entre eles (aprox.), para as curvas "conversarem".

| Elemento | Raio | Classe |
|---|---|---|
| Botões, tags de status, chips, controle segmentado, busca | pílula | `rounded-full` |
| Contêiner: painel, KPI, raia de quadro, drawer, modal | 16px | `rounded-2xl` |
| Card dentro de raia, toast, popover | 14px | `rounded-[14px]` |
| Campos, selects, item da sidebar, menus | 12px | `rounded-xl` |
| Bloco rebaixado dentro de card | 10px | `rounded-[10px]` |
| Checkbox | 4px | `rounded-sm` |
| Barras de gráfico | 0 | — |
| Foto em tile | 16px · foto full-bleed: 0 | — |

**Profundidade (sombra suave, sempre verde-escura e difusa — nunca preta):**

| Nível | Token | Onde |
|---|---|---|
| 0 | nenhuma | Fundo, blocos rebaixados, linhas de tabela |
| 1 | `shadow-sm` | Botão secundário, chip de filtro |
| 2 | `shadow-card` | Card, painel, KPI, item ativo da sidebar, opção ativa do segmentado |
| 3 | `shadow-raised` | Hover de card clicável (com elevação de 1px) |
| 4 | `shadow-overlay` | Popover, dropdown, modal, drawer, toast |

- Card = fundo branco + fio `rg-hairline-soft` + `shadow-card`. Não empilhe card dentro de card; dentro dele, use bloco rebaixado (`rg-gelo` sobre branco) ou fio.
- **Raia/coluna** (quadro, listas agrupadas) = fundo `rg-sunken`, contorno interno `inset 0 0 0 1px rg-hairline-soft`, sem sombra; os cards brancos sobem dela. É a profundidade, e não a cor, que separa coluna de card.
- **Toques de verde em pequenas doses** dão vida sem pesar: eyebrow `rg-eyebrow`, botão tonal `#C4E0B9`, filtro aplicado `rg-mudas-10`, barra completa `rg-mudas`, faixa de etapa no topo da raia (rampa sequencial do Verde Mata, §12). Nunca áreas grandes de verde.
- **Sem** gradiente decorativo, textura, grão, blur, glassmorphism, transparência em painel, sombra preta ou dura.

### 3.8 Breakpoints

| Nome | Largura | Comportamento |
|---|---|---|
| Mobile | < 768px | Sidebar e listas viram gaveta sobre o conteúdo; 1 coluna; alvos de toque ≥ 44px |
| Tablet | 768–1023px | Sidebar em trilho (64px); listas laterais em gaveta |
| Notebook | 1024–1279px | Sidebar expandida ou trilho (preferência do usuário); 12 colunas |
| Desktop | ≥ 1280px | 12 colunas, conteúdo até 1600px |


