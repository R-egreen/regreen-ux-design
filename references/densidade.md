<!-- Parte da skill regreen-design. Índice e regras essenciais em ../SKILL.md -->
# Densidade de informação

## 7. Densidade de informação

**Regra-mãe: pouco texto por área de atenção.** Cada palavra na tela disputa a atenção de quem decide. Refinamento vem de tirar texto, não de diminuir a letra.

### 7.1 Mostre a exceção, não a normalidade

- O que está **normal não vira sinal**: aparece como texto discreto (`rg-ink-muted`, 12px, sem fundo) ou não aparece. Ex.: "12 dias na etapa" em cinza; só vira tag quando passa de 75% do prazo ("Prazo em 3 dias", `warn`) ou estoura ("7 dias acima do prazo", `crit`).
- Diligência, documento ou prazo que está em dia **some do card**; reaparece quando atrasa ou vence em até 7 dias. O estado completo fica no drawer.
- Um card em ordem deve ter **zero tags coloridas**. Se todos os cards têm tags, o sinal perdeu valor.

### 7.2 Orçamento de texto

| Elemento | Máximo |
|---|---|
| Card de quadro | Título (nome + código) · 1 linha de contexto · 1 bloco de progresso · até **2 sinais** de exceção (ou 1 linha discreta). Nada mais |
| KPI | Eyebrow de até 3 palavras · número + unidade · 1 linha de contexto de até 6 palavras |
| Cabeçalho de raia/coluna | Título + contagem + 1 número (ex.: área). Prazos e regras vão para tooltip |
| Cabeçalho de página | Breadcrumb · título · 1 linha de contexto |
| Rótulo | Até 3 palavras; sem repetir o que o cabeçalho da coluna/raia já diz |
| Tag | Até 4 palavras |

- **Não repita rótulo em cada card** o que pode ir uma vez no cabeçalho ou na legenda.
- **Atributo secundário vira ícone/avatar com tooltip** quando não é o que a pessoa procura naquela tela (ex.: escritório como avatar de iniciais no card; nome completo no tooltip e no drawer).
- **Respiro:** padding interno mínimo de 14–16px em card; 12px entre blocos; o card não deve ter texto encostando nas bordas.

### 7.3 Outras regras

- **Um dado, uma forma.** Não repita a mesma informação como número, percentual, barra e texto. Escolha uma (ex.: "6/9" + barra fina).
- **Um sinal por estado.** Se a cor já indica atraso, não adicione selo com a mesma mensagem.
- **Densidade ajustável** em telas de alto volume (quadros, listas, tabelas): modo **Compacto** (linha de 40px) e **Confortável** (linha de 48px), lembrado por usuário. Compacto tira repetição, não tira dado.
- **Divulgação progressiva:** o resumo fica visível; o detalhe abre sob demanda (expandir, drawer), sem trocar de tela.
- **Remova o que não ajuda a decidir:** campo que repete o cabeçalho, ícone decorativo por campo, bloco vazio.


