# regreen-design

Skill de design de interfaces web internas da re.green: padrão de marca, tokens e regras de usabilidade para telas de produtos de dados (React + Tailwind + shadcn/ui, apps no Skip e similares).

## Instalar no Maestro

Skills → **Instalar via URL** → cole a URL deste repositório → **Instalar**.

Para atualizar, publique uma nova versão aqui e reinstale pela mesma URL.

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `SKILL.md` | Instruções para a IA, regras essenciais, checklist e "Não faça" |
| `references/` | Detalhe por assunto: cor, tipografia, movimento e rolagem, layout, densidade, componentes, dados, acessibilidade, instalação, decisões |
| `code/tokens.css` | Fonte, paleta, tokens, rolagem e variáveis do shadcn/ui |
| `code/tailwind.preset.ts` | Preset do Tailwind 3 (escala de tipo, cores, raios, sombras, animações) |
| `code/format.ts` | Formatação pt-BR (área, moeda, %, datas, mediana/P90, nome + código) |
| `code/brand-assets.ts` | Logotipo e ícones da marca como texto (data URIs), para projetos sem arquivos binários |
| `assets/` | Logotipo (verde e Solar) e os 7 ícones ilustrativos da marca |
| `examples/design-system.html` | Guia vivo: tokens e componentes funcionando, com um quadro kanban de exemplo |

Abra `examples/design-system.html` direto no navegador; ele precisa da pasta `assets/` ao lado.

## Como mudar uma regra

1. Edite o arquivo de `references/` do assunto (e o resumo em `SKILL.md`, se a regra estiver lá).
2. Se mudar um valor, atualize `code/tokens.css` e `code/tailwind.preset.ts` juntos.
3. Registre a mudança em `references/decisoes.md` com data e motivo.
4. Atualize o exemplo afetado em `examples/`.

## Uso

Material de uso interno da re.green. A fonte Sharp Grotesk é licenciada e não faz parte deste repositório.
