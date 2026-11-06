<!-- Parte da skill regreen-design. Índice e regras essenciais em ../SKILL.md -->
# Instalação em projeto Skip

## 16. Instalação em projeto Skip (React + Vite + Tailwind 3 + shadcn)

1. A fonte de UI (Figtree) já é carregada pelo Google Fonts dentro de `tokens.css`. A Sharp Grotesk é licenciada e não está neste repositório; se um título de login precisar dela, peça os arquivos à Comunicação e Marketing.
2. Copie `code/tokens.css`, `code/tailwind.preset.ts`, `code/format.ts`, `code/Logo.tsx`, `code/brand-assets.ts` e, se houver login, `code/LoginSplit.tsx` para `src/regreen/`. São todos texto: funcionam mesmo onde não dá para copiar imagens.
3. Em `src/main.css`:
   - remova o `@import url('https://fonts.googleapis.com/...')`;
   - adicione na **primeira linha** `@import './regreen/tokens.css';`;
   - remova o bloco `:root { ... }` e o `.dark { ... }` do `@layer base` (o tokens.css já define as variáveis);
   - remova classes de tema próprias que usam `!important` (tabelas, cabeçalhos coloridos) e migre para os componentes.
4. Em `tailwind.config.ts`: `presets: [regreen]` e remova de `extend` as chaves `fontFamily`, `fontSize`, `colors.rg`, `boxShadow` e `borderRadius` antigas.
5. Ajuste os componentes shadcn que usam tamanhos fora da escala: `CardTitle` → `text-lg font-semibold`; `DialogTitle` → `text-lg font-semibold`; troque `text-[10px]`/`text-[11px]`/`text-[13px]` por `text-xs` ou `text-sm`.
6. `Button`: adicione `rounded-full` à base, `active:scale-[.98]` e a variante `tonal`. `Input`/`SelectTrigger`: `rounded-xl border-input`.
7. Remova `zoom` global, `scrollbar-hide` em listas e `:focus-visible { outline: none }` se existirem.
8. Busque e elimine hex soltos: `grep -rnE "#[0-9a-fA-F]{6}" src --include=*.tsx`.
9. Rode o checklist do §17.

**Tema escuro:** não suportado na v1. Não defina `.dark` nem ofereça alternância.


