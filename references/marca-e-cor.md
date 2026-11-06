<!-- Parte da skill regreen-design. Índice e regras essenciais em ../SKILL.md -->
# Marca e cor

## 2. Marca na interface

- O nome é sempre **re.green**: minúsculo, com o ponto. Nunca "ReGreen", "Regreen" ou "RE.GREEN". Em texto corrido: "a re.green".
- **Logotipo:** só o oficial — verde (`#003714`) em fundo claro, off-white (`#FCF2EB`) sobre Verde Mata ou foto escura. Altura de 24px na barra/sidebar, 32–40px no login; largura mínima de 96px. Não recrie, redesenhe, recorte, recolora nem crie símbolo/monograma. Aparece na barra do topo ou na sidebar e no login, em nenhum outro lugar.
- **Proibido substituir o logotipo** por "re.green" escrito em texto, wordmark montado com fonte, imagem genérica ou placeholder. Isso **não é um "desvio aceitável"**: se nenhuma das fontes abaixo funcionar, pare e peça o arquivo à pessoa.
- **Como colocar o logotipo, nesta ordem:**
  1. **`code/Logo.tsx`** (padrão) — componente React com o **vetor oficial embutido** (é código, não imagem; não precisa de arquivo em `public/`, SharePoint nem internet). Copie para `src/regreen/Logo.tsx` e use `<Logo className="h-6 w-auto" />` ou `<Logo variant="offwhite" … />`.
  2. **`code/brand-assets.ts`** — o mesmo vetor como *data URI* (`LOGO_VERDE`, `LOGO_OFFWHITE`) para quando precisar de uma URL (`<img src>`, CSS, e-mail). Também traz os 7 ícones da marca (`ICONES`).
  3. **`assets/logo/regreen-logo-verde.svg` e `regreen-logo-offwhite.svg`** — os arquivos SVG, para projetos que aceitam colocar arquivos em `public/`.
  4. **SharePoint (originais e outros formatos)** — se tiver o conector do SharePoint/OneDrive e precisar de PNG, EPS ou AI:
     - site **Public** › Documentos Partilhados › Materiais para Colaboradores › **Logos e ícones da marca** › Logotipo › **LOGOTIPO RGB** › `SVG` ou `PNG` (aberto a todos os colaboradores);
     - ou site **Intranet re.green** › Documentos Compartilhados › Relações Institucionais › Comunicação e Marketing › **LOGO** › LOGOTIPO RGB (com o Brandbook);
     - arquivos para tela: `REGREEN_RGB_01 RG POS VERDE` (fundo claro) e `REGREEN_RGB_02 RG NEG OFFWHITE` (fundo escuro). As versões `PB RESTRITO` (preto e branco) não são para interface; CMYK e Pantone são para impressão.
     - Busque por `REGREEN_RGB_01` se o caminho mudar. Baixe o arquivo e coloque em `public/brand/`.
- **Voz na UI:** português do Brasil, frases curtas, verbos de ação, sentence case. Interface fala com quem usa: **"você"** em instruções e mensagens ("Você não tem acesso a este módulo"); **"nós"** só em textos institucionais.
- **Sem emoji e sem dingbat unicode** em interface (✓ ✗ ⚠ → ★ etc.). Use ícones (§13).
- **Caixa alta** só em eyebrows (rótulo de seção) e cabeçalho de tabela. Nunca em título, botão ou mensagem.
- **Títulos sem ponto final** na UI. (O ponto final de efeito é recurso de peça de marketing, não de tela.)
- **Evite:** hype, jargão de carbono sem explicação, "Ops!", "Algo deu errado" sem dizer o quê.


### 3.1 Cor — paleta

**Superfícies — três tons, cada um com um papel fixo**

| Token | Hex | Papel |
|---|---|---|
| `rg-gelo` | `#F4F8F2` | **Área de trabalho**: fundo de quadro, listas, dashboards, formulários |
| `rg-creme` | `#FCF2EB` | **Moldura da marca**: sidebar, login, boas-vindas, "Como funciona", estados vazios de página inteira |
| `rg-branco` | `#FFFFFF` | **Superfície de conteúdo**: cards, painéis, KPIs, tabelas, modais, drawers |
| `rg-sunken` | `#EBF1E8` | Área rebaixada: raia/coluna do quadro, trilho do controle segmentado, skeleton, avatar de iniciais (dentro de um card branco, o bloco rebaixado usa `rg-gelo`) |
| `rg-hover` | `#F2F6F0` | Hover de linha/item sobre branco |
| `rg-creme-600` | `#F5EAE1` | Hover sobre creme (itens da sidebar) |
| `rg-track` | `#DCE5D8` | Trilho de barra de progresso |
| `rg-hairline` | `rgba(16,56,29,.12)` | Fio padrão: divisor, contorno de card e de botão secundário |
| `rg-hairline-soft` | `rgba(16,56,29,.07)` | Fio interno: linhas de tabela, rodapé de card |

Creme e verde-gelo nunca se misturam na mesma região: creme emoldura, gelo é onde se trabalha.

**Tinta — texto é neutro**

| Token | Hex | Uso |
|---|---|---|
| `rg-ink` | `#1C2620` | Texto, títulos de página, de painel e de card, números de tabela |
| `rg-ink-muted` | `#56665B` | Texto secundário, rótulos, cabeçalho de tabela, eixos, itens inativos da sidebar |
| `rg-control` | `#7F8E83` | Contorno de campo, placeholder, texto desabilitado |

**Marca — Verde Mata é pontual**

| Token | Hex | Onde pode aparecer (e só aí) |
|---|---|---|
| `rg-mata` | `#003714` | Botão primário (um por área), link, texto do item ativo da navegação, número de KPI, anel de foco, aba ativa, contorno de item selecionado |
| `rg-mata-700 / 900` | `#0D4A24 / #00250D` | Hover / pressionado do botão primário |
| `rg-mata-80 … 05` | `#335F43 #668772 #99AFA1 #CCD7D0 #E6EBE8 #F2F5F4` | Escala sequencial em gráfico |
| `rg-mudas` | `#68C153` | Marcador de item ativo (barra de 3px), barra de progresso completa, estado ok (preenchimento) |
| `rg-mudas-10 / 40` | `#EAF6E6 / #C3E6BA` | Filtro aplicado, linha selecionada, fundo de tag ok, seleção de texto |
| `rg-eyebrow` | `#2D6A1F` | Eyebrow de blocos e KPIs (6,4:1 em branco) |
| `rg-tonal` | `#C4E0B9` (hover `#B3D6A5`) | Botão tonal, com texto `rg-mata` |
| Apoio | `azul #419BDC · laranja #DF8435 · lavanda #AFA5F5 · amarelo #F0D23C` | Séries de gráfico e acentos pontuais |
| `rg-vermelho` | `#C0392B` | **Reservado** a estado crítico e ação destrutiva |

**Teste rápido:** numa captura da tela, o Verde Mata deve ocupar uma fração pequena da área. Sidebar, cabeçalho de tabela, chips e botões secundários **não** são verdes.

**Contrastes verificados (WCAG AA):**

| Combinação | Contraste | Pode |
|---|---|---|
| `rg-ink` sobre branco / gelo / creme | 15,6 / 14,5 / 14,1 | Qualquer texto |
| `rg-ink-muted` sobre branco / gelo / creme / sunken | 6,1 / 5,7 / 5,5 / 5,3 | Texto secundário |
| `rg-mata` sobre branco / gelo / creme | 13,5 / 12,6 / 12,2 | Link, número de KPI, item ativo |
| `rg-control` sobre branco / gelo | 3,4 / 3,2 | Só borda de campo, ícone, placeholder |
| `rg-mudas` sobre branco / gelo / creme | 2,2 / 2,1 / 2,0 | **Nunca texto nem ícone.** Só preenchimento |
| `rg-mata` sobre `rg-mudas` | 6,0 | Texto em botão/tag Verde das Mudas |
| `rg-hairline` sobre branco | ≈ 1,3 | Só divisor decorativo, nunca borda de campo |
| Amarelo, lavanda, laranja, azul sobre claro | 1,4 – 3,0 | Nunca texto. Em gráfico, sempre com rótulo/legenda |

### 3.2 Cor — semântica de status

Cada status tem três tons. **fg** é texto e ícone (≥ 5,8:1 sobre o próprio fundo, branco e creme); **bg** é o fundo da tag; **solid** é barra, ponto de mapa ou marcador.

| Status | Significado | fg | bg | solid |
|---|---|---|---|---|
| `ok` | No prazo, concluído, válido | `#1F6B2B` | `#EAF6E6` | `#68C153` |
| `warn` | Atenção, perto do limite | `#7A5600` | `#FDF5D6` | `#F0D23C` |
| `crit` | Atrasado, erro, bloqueado | `#A82E21` | `#FBEAE6` | `#C0392B` |
| `info` | Informativo, em andamento | `#1F5F94` | `#E8F2FA` | `#419BDC` |
| `neutral` | Pendente, sem dado, rascunho | `#4A6152` | `#EEF1EF` | `#99AFA1` |
| `ai` | Gerado ou lido por IA | `#4B3FA8` | `#EFEDFD` | `#AFA5F5` |

No Tailwind: `text-status-crit-fg bg-status-crit-bg`, `bg-status-ok-solid`.

## 10. Cor com significado

- **Cor nunca é decorativa.** Verde Mata = marca/ação; status = estado; apoio = séries.
- **Cor nunca sozinha:** sempre com texto ou ícone.
- **Vermelho só para crítico e destrutivo.** Nunca como série neutra, categoria ou destaque.
- **Cores de categoria são as mesmas em todo lugar** (quadro, gráfico, mapa, legenda) — defina o mapa categoria → cor num único arquivo (`lib/categoryColors.ts`).
- **Faixas e títulos de seção em tom neutro**, para não competir com cores semânticas.
- **Três tons de fundo com papel fixo:** creme (moldura: sidebar e telas de marca), verde-gelo (área de trabalho) e branco (cards). Nenhum outro fundo de página. Verde Mata cheio como fundo só em bloco de destaque pontual (ex.: lado da imagem no login).
- **Verde Mata é pontual.** Lista fechada em §3.1. Texto, títulos, cabeçalhos de tabela, chips, segmentados e sidebar são neutros.
- **Toda regra de cor tem legenda** ou está documentada na tela ("Como ler").


