<!-- Parte da skill regreen-design. Índice e regras essenciais em ../SKILL.md -->
# Movimento e rolagem

### 3.6 Movimento

Movimento explica o que mudou e de onde veio; nunca enfeita. Calmo, curto, sem bounce.

**Tokens**

| Token | Valor | Uso |
|---|---|---|
| `duration-fast` | 120ms | Cor, borda, fundo no hover/foco |
| `duration-base` | 200–220ms | Elevação de card, popover, segmentado, accordion, sidebar |
| `duration-slow` | 280–350ms | Drawer, entrada de cards, toast |
| `ease-standard` | `cubic-bezier(.2,0,.2,1)` | Mudanças de estado |
| `ease-out` | `cubic-bezier(.16,1,.3,1)` | Algo entrando na tela ou se acomodando |

**Catálogo** (implemente estes; não invente outros sem atualizar este documento)

| Interação | Movimento |
|---|---|
| Hover de card/KPI clicável | Sobe 1px (`translateY(-1px)`) + `shadow-card → shadow-raised`, 200ms `ease-out` |
| Pressionar botão | `scale(.98)`, 150ms; volta ao soltar |
| Entrada de cards ao carregar a tela | Fade + 8px de baixo para cima, 350ms `ease-out`, escalonado 30ms por item (máx. 8 itens; o resto entra junto). Só na primeira carga, não a cada filtro |
| Controle segmentado | O chip branco desliza até a opção escolhida, 220ms `ease-out` |
| Drawer | Entra pela direita, 280ms `ease-out`; scrim faz fade 220ms; sai na mesma velocidade |
| Modal | Fade + `scale(.98 → 1)`, 200ms |
| Popover, dropdown, tooltip | Fade + 4px na direção de abertura, 150ms; tooltip com atraso de 400ms para aparecer |
| Toast | Sobe 8px + fade, 220ms; some em 5s; **pausa no hover**; com "Desfazer" quando a ação é reversível |
| Item movido (mudar etapa, reordenar) | Card rola até ficar visível e pisca `rg-mudas-10` com borda `rg-mudas` por 1,6s (fade out). Em listas reordenadas, use FLIP 220ms para o item deslizar até a nova posição |
| Arrastar card (drag-and-drop) | Card arrastado ganha `shadow-overlay` (sem inclinar); raia de destino acende fundo `rg-mudas-10` + anel 2px `rg-mudas`; marcador tracejado no ponto de inserção; **auto-rolagem** do quadro quando o ponteiro chega a 140px da borda (velocidade proporcional, máx. 24px/frame) |
| Recolher/expandir raia, sidebar, accordion | Largura/altura em 220ms `ease-standard` |
| "Salvando…" | Só aparece se demorar > 300ms (evita piscar); vira "Salvo" com ✓ e some em 2s |
| Carregamento | Skeleton no formato final, cor `rg-sunken`, brilho lento (1,6s linear); sem spinner de página inteira |
| Ir ao ponto exato ("Abrir pendência") | Rolagem suave até o item + destaque `rg-mudas-10` por 2s |
| Mudança de número (KPI, contador) | Troca direta ou crossfade 120ms. Nunca contagem animada |
| Troca de página/aba | Sem animação de página; conteúdo novo pode fazer fade 120ms |

- **Proibido:** bounce, spring com overshoot, parallax, loops infinitos decorativos (pulsar, piscar, flutuar, brilho de estrela), animação em elemento que a pessoa está lendo, fade de opacidade como hover.
- **`prefers-reduced-motion`:** tudo vira instantâneo (já no `tokens.css`); rolagem suave vira salto; skeleton sem brilho. A informação continua igual.

### 3.7 Rolagem

A tela fica parada e só a área de conteúdo rola.

- **A página não rola em telas de trabalho** (quadro, lista, mapa): sidebar, barra do topo, cabeçalho, KPIs e filtros ficam fixos; o conteúdo ocupa o resto da altura (`flex-1 min-h-0`) e rola por dentro. Páginas de leitura (documento, configurações) rolam normalmente.
- **Quadro (kanban):** rola na **horizontal** no contêiner do quadro; cada raia rola na **vertical** por dentro e ocupa a altura toda. Roda do mouse sobre o fundo do quadro rola na horizontal; sobre uma raia, na vertical. Nunca a página inteira rolando junto com as colunas.
- **No máximo dois níveis de rolagem aninhados** (quadro → raia). Nada de rolagem dentro de card.
- **Barra de rolagem fina e discreta** (global, em `tokens.css`):
  ```css
  * { scrollbar-width: thin; scrollbar-color: rgba(16,56,29,.18) transparent; }
  *::-webkit-scrollbar { width: 10px; height: 10px; }
  *::-webkit-scrollbar-track { background: transparent; }
  *::-webkit-scrollbar-thumb { background-color: rgba(16,56,29,.16); border-radius: 999px;
    border: 3px solid transparent; background-clip: content-box; }
  *::-webkit-scrollbar-thumb:hover { background-color: rgba(16,56,29,.30); }
  ```
- **Listas internas (raia, menu, painel lateral):** classe `.scroll-quiet` — a barra fica invisível e aparece no hover ou quando há foco dentro. Não esconda a barra de vez (`scrollbar-hide`): a pessoa precisa perceber que há mais conteúdo.
- **Cabeçalhos dentro da área rolável** (cabeçalho de tabela, título da raia) ficam `sticky` ou fora da área rolável.
- **Sem** scroll-jacking, rolagem horizontal da página, rolagem suave em rolagem feita pelo usuário (só em saltos programáticos), ou âncora que esconde o alvo sob uma barra fixa (`scroll-margin-top`).
- **Mobile:** a página volta a rolar normalmente; o quadro vira uma faixa de altura fixa (~70% da tela) com rolagem horizontal por raias de 85% da largura.

