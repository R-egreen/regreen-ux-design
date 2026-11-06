<!-- Parte da skill regreen-design. Índice e regras essenciais em ../SKILL.md -->
# Acessibilidade

## 15. Acessibilidade

- **Contraste AA:** 4,5:1 para texto, 3:1 para ícone, borda de controle e foco. Use só as combinações do §3.1.
- **Navegação completa por teclado**, ordem lógica, foco visível (anel 2px `rg-mata`, ou `rg-mudas` em fundo escuro). Nunca `outline: none` sem substituto.
- **ARIA correto:** `aria-expanded` em menus/painéis/accordions, `aria-current="page"` na navegação, `aria-sort` em tabelas, `aria-live="polite"` para "Salvo" e toasts, `aria-invalid` em erro.
- **Alvos de toque ≥ 44×44px** no mobile; no desktop ≥ 32px.
- **Rótulo em todo campo**, `alt` em toda imagem informativa (`alt=""` nas decorativas).
- **`prefers-reduced-motion`** respeitado (no `tokens.css`).
- **Zoom de 200%** não quebra layout nem esconde conteúdo.
- `lang="pt-BR"` no `<html>`.


