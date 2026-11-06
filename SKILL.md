---
name: regreen-design
description: Padrão de marca e diretrizes de design para interfaces web internas da re.green (React + Tailwind + shadcn/ui, apps no Skip e similares). Use ao criar, revisar ou refatorar qualquer tela, componente, tabela, gráfico, formulário, quadro kanban ou dashboard de um produto da re.green.
---

# Design de interfaces — re.green (v1.3)

Fonte da verdade para interfaces web internas da re.green. Une a marca com regras de usabilidade para produtos de dados. Cada regra é curta e verificável.

**Hierarquia em caso de conflito:** (1) leitura e confiança nos dados → (2) acessibilidade → (3) marca → (4) estética.

## Como aplicar (instruções para a IA)

1. **Antes de escrever código de tela**, confirme que o projeto tem `src/regreen/tokens.css`, `tailwind.preset.ts`, `format.ts` e `brand-assets.ts`. Se não tiver, copie de `code/` seguindo `references/instalacao.md`.
2. **Logotipo e ícones da marca vêm de `code/brand-assets.ts`** (texto, funciona sem arquivos binários). Nunca troque o logotipo por "re.green" escrito em texto. Originais no SharePoint: `references/marca-e-cor.md` §2.
3. **Dimensione a estrutura pelo app:** uma tela → barra do topo simples, sem sidebar; duas ou mais telas → sidebar. Big numbers só em telas de acompanhamento (painel, visão geral), nunca em quadro, lista de trabalho, formulário ou detalhe.
4. **Leia a referência do assunto antes de decidir** (mapa abaixo). Este arquivo traz só o essencial.
5. **Use só tokens.** Nada de hex solto, `text-[13px]`, `bg-green-600`, `rounded-[7px]`, `shadow-md`. Se o token não existe, não use.
6. **Use os componentes de `src/components/ui/` (shadcn)** e ajuste via variáveis, não com `!important`.
7. **Toda exibição de número ou data passa por `code/format.ts`.**
8. **Ao terminar, rode o checklist do §17** e corrija o que falhar antes de entregar.
9. Em dúvida visual, consulte `examples/design-system.html` (guia vivo).

## Mapa das referências

| Assunto | Arquivo | Seções |
|---|---|---|
| Nome, voz, logotipo, paleta, contraste, status, uso de cor | `references/marca-e-cor.md` | §2, §3.1, §3.2, §10 |
| Fonte, escala de tipo, espaçamento, raios, sombras, breakpoints | `references/tipografia-e-forma.md` | §3.3–3.5, §3.8 |
| Catálogo de movimento e regras de rolagem | `references/movimento-e-rolagem.md` | §3.6, §3.7 |
| App shell, grid, sidebar, arquitetura de navegação | `references/layout-e-navegacao.md` | §4, §8 |
| Pouco texto por área, exceção primeiro, orçamento de texto | `references/densidade.md` | §7 |
| Botões, campos, tabela, tags, cards, quadro kanban, KPI, drawer, modal, estados, ícones | `references/componentes.md` | §9, §13 |
| Formatos pt-BR, rótulos, nome + código, gráficos, mapas, IA, histórico | `references/dados-e-conteudo.md` | §5, §6, §11, §12, §14 |
| Teclado, ARIA, contraste, movimento reduzido | `references/acessibilidade.md` | §15 |
| Instalar no template Skip/shadcn | `references/instalacao.md` | §16 |
| Origem das decisões e histórico de versões | `references/decisoes.md` | Anexo |

## 1. Princípios

- **Dados primeiro.** A interface existe para decidir. O que não ajuda a decidir sai.
- **Calma e clareza.** Fundo claro, cards brancos com sombra suave, texto neutro, sem enfeite. Nada pisca, quica ou flutua.
- **Um sinal por coisa.** Um dado tem uma forma; um estado tem um sinal; uma tarefa tem um caminho.
- **Exceção, não normalidade.** O normal aparece discreto ou some; só o que pede atenção vira tag colorida.
- **Marca nos detalhes, não em massa.** Verde Mata é pontual. Se a tela parece "verde", tem Verde Mata demais.

## Essencial em uma página

**Superfícies:** verde-gelo `#F4F8F2` (área de trabalho) · creme `#FCF2EB` (moldura: sidebar, login) · branco (cards, painéis, tabelas) · `#EBF1E8` (raia do quadro, trilhos). Nenhum outro fundo.

**Tinta:** texto e títulos `#1C2620` · secundário `#56665B` · borda de campo `#7F8E83`. Título não é verde.

**Verde Mata `#003714`, só em:** botão primário (um por área), link, item ativo da navegação, número de KPI, aba ativa, foco, contorno de selecionado. Verde das Mudas `#68C153` nunca como texto. Toques de verde permitidos: eyebrow `#2D6A1F`, botão tonal `#C4E0B9`, filtro aplicado `#EAF6E6`.

**Status** (sempre com ícone + texto): ok `#1F6B2B`/`#EAF6E6` · atenção `#7A5600`/`#FDF5D6` · crítico `#A82E21`/`#FBEAE6` · info `#1F5F94`/`#E8F2FA` · neutro `#4A6152`/`#EEF1EF` · IA `#4B3FA8`/`#EFEDFD`. Vermelho só para crítico e destrutivo.

**Tipo:** Figtree, uma família. Escala fixa 12 · 14 · 16 · 20 · 24 · 32 (título de página 24 Bold, KPI 32 SemiBold em Verde Mata, UI 14). Nada abaixo de 12px, nenhum `zoom` global.

**Forma:** botões, tags e chips em pílula · contêiner 16px · card 14px · campo 12px · bloco interno 10px. Sombras verdes difusas: `sm` (botão), `card` (card/painel), `raised` (hover, sobe 1px), `overlay` (drawer/modal/toast). Nunca sombra preta.

**Densidade:** card de quadro com nome + código, 1 linha de contexto, 1 bloco de progresso e até 2 sinais de exceção. KPI com eyebrow, número e 1 linha. **Big numbers só em painel/visão geral**; em telas operacionais o resumo cabe numa linha de contexto.

**Rolagem:** em telas de trabalho a página fica parada; o quadro rola na horizontal e cada raia na vertical. Barra fina global; `.scroll-quiet` em listas internas.

**Movimento:** só o catálogo (§3.6): hover sobe 1px, pressionar 98%, entrada de cards 350ms escalonada, drawer 280ms, toast com Desfazer, item movido pisca verde-claro. Sem bounce, sem loops decorativos; `prefers-reduced-motion` respeitado.

**Dados:** padrão brasileiro (2.342,80 ha · R$ 1.000,00 · 27,8% · 05/11/2026), unidade visível, mediana e P90 com n para durações, entidade sempre "Nome (CÓDIGO)", todo total diz o que conta.

**Navegação:** app de uma tela = barra do topo com logotipo e nome, sem sidebar; com duas ou mais telas, sidebar creme colapsável, nunca abas no topo; menu do avatar só com itens de conta; uma entidade, uma página; painéis fecham por X e Esc.

## 17. Checklist de revisão (rode antes de entregar)

**Marca**
- [ ] "re.green" escrito certo; logotipo oficial (de `brand-assets.ts`), nunca escrito em texto
- [ ] Área de trabalho verde-gelo, cards brancos com `shadow-card`; sidebar creme **só se o app tiver duas ou mais telas**
- [ ] Big numbers só se a tela for de acompanhamento (painel, visão geral)
- [ ] Texto e títulos em tinta neutra; Verde Mata só nos lugares da lista do §3.1
- [ ] Uma família de fonte na UI (§3.3); títulos em Bold, sem Sharp Grotesk na interface
- [ ] Nenhum hex solto, nenhuma sombra fora da escala, nenhum gradiente, emoji ou dingbat

**Leitura e densidade**
- [ ] Nenhum texto abaixo de 12px; só tamanhos 12/14/16/20/24/32; nenhum `zoom` global
- [ ] Orçamento de texto do §7.2 respeitado (card, KPI, cabeçalho)
- [ ] Normal aparece discreto; só exceção vira tag colorida (§7.1)
- [ ] Verde das Mudas, amarelo, lavanda, laranja e azul nunca como texto sobre claro
- [ ] Nada com significado truncado sem tooltip

**Rolagem e movimento**
- [ ] Tela de trabalho: página parada, só o conteúdo rola; quadro na horizontal, raias na vertical
- [ ] Barra de rolagem fina global; `.scroll-quiet` em listas internas; nada de `scrollbar-hide`
- [ ] Só movimentos do catálogo do §3.6; `prefers-reduced-motion` respeitado

**Dados**
- [ ] Todo número/data via `format.ts` (vírgula decimal, dd/mm/aaaa, unidade visível)
- [ ] Todo total diz o que conta e muda com o filtro
- [ ] Durações em mediana/P90 com n; nenhuma média de médias
- [ ] Entidades com nome + código, nome como link
- [ ] Vermelho só com referência (meta, limite, prazo)

**Interação**
- [ ] Uma ação primária por área
- [ ] Destrutivo pede confirmação ou oferece desfazer
- [ ] Edição inline mostra "Salvando… / Salvo"
- [ ] Estados de carregando, vazio e erro desenhados
- [ ] Painéis e modais fecham por X e Esc
- [ ] Filtros, aba e item aberto refletidos na URL

**Acessibilidade**
- [ ] Navegação completa por teclado com foco visível
- [ ] ARIA em menus, abas, tabelas ordenáveis e mensagens dinâmicas
- [ ] Cor nunca sozinha
- [ ] Layout funciona em 375px, 1024px e 1440px

---

## 18. Não faça

| Não faça | Faça |
|---|---|
| Abas no topo como navegação principal | Sidebar colapsável |
| Funcionalidade no menu do avatar | Item na sidebar ou na página da entidade |
| Sombra preta/dura, card dentro de card | `shadow-card` verde-difusa; bloco `rg-sunken` dentro do card |
| Zebra e cabeçalho verde escuro em tabela | Fios horizontais, cabeçalho eyebrow |
| Sidebar, chip ativo ou segmentado em Verde Mata cheio | Sidebar creme; chip branco elevado; filtro aplicado em `rg-mudas-10` |
| Título e texto em Verde Mata | `rg-ink` / `rg-ink-muted`; Verde Mata pontual |
| `zoom` global para "caber mais" | Escala de tipo e densidade Compacto |
| `:focus-visible { outline: none }` | Anel de 2px `rg-mata` |
| `text-[11px]`, `text-[13px]`, `text-3xl` | Escala 12 · 14 · 16 · 20 · 24 · 32 |
| Verde das Mudas como texto ou link | Verde Mata para texto; Mudas como preenchimento |
| Status só por cor | Tag com ícone + texto |
| Mesmo dado como número, %, barra e frase | Uma forma por dado |
| Média de durações sem amostra | Mediana, P90 e n |
| Só o código da entidade ("TER-0064") | "Fazenda Boa Vista (TER-0064)" |
| "2342.8", "2026-11-05", "1,000.00" | "2.342,80 ha", "05/11/2026", "R$ 1.000,00" |
| Pizza cheia, 3D, linha suavizada, barra arredondada | Anel ≤ 5 fatias, linha reta, barra reta |
| Animação de flutuar, spotlight, pulsar, contador | Movimentos do catálogo (§3.6), ou nada |
| Página inteira rolando junto com as colunas do quadro | Página parada; quadro e raias rolam por dentro (§3.7) |
| Barra de rolagem escondida (`scrollbar-hide`) ou grossa padrão do sistema | Barra fina global; `.scroll-quiet` aparece no hover |
| Tag colorida para estado normal ("DDA recebida" em todo card) | Normal discreto ou ausente; tag só para exceção |
| Rótulo repetido em cada card | Uma vez no cabeçalho/legenda |
| Arco-íris de cores por etapa | Rampa sequencial do Verde Mata na faixa da raia |
| Duas famílias de fonte na UI, ou Sharp Grotesk em tela | Uma família, três pesos |
| Ícone de outra biblioteca, emoji, ✓ ⚠ → | Lucide 1,75 |
| Regenerar com IA sobrescrevendo | Nova versão com aviso |
| Fundo em cor de apoio ou quarto tom de fundo | Creme (moldura) + verde-gelo (trabalho) + branco (cards) |
| Sidebar num app de uma tela só | Barra do topo com logotipo e nome |
| Big numbers em quadro, lista de trabalho ou formulário | Resumo numa linha de contexto; big numbers só em painel |
| "re.green" escrito em texto no lugar do logotipo | `LOGO_VERDE` de `code/brand-assets.ts` |

---

