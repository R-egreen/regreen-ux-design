<!-- Parte da skill regreen-design. Índice e regras essenciais em ../SKILL.md -->
# Dados, texto e conteúdo

## 5. Números e formatos

Use sempre `code/format.ts`.

| Tipo | Formato | Função |
|---|---|---|
| Área | `2.342,80 ha` (2 casas) | `fmtArea` |
| Moeda | `R$ 1.000,00` (2 casas); em KPI `R$ 1,2 mi` | `fmtMoney` |
| Percentual | `27,8%` (1 casa) | `fmtPct` |
| Inteiro | `1.234` | `fmtInt` |
| Duração | `27,8 dias` | `fmtDays` |
| Carbono | `1.250,5 tCO₂e` | `fmtCarbon` |
| Data | `05/11/2026` | `fmtDate` |
| Data e hora | `05/11/2026 14:32` | `fmtDateTime` |
| Mês | `nov/2026` | `fmtMonth` |
| Vazio | `—` (travessão) | todas |

- **Padrão brasileiro em tudo**, inclusive dados de IA e integrações: vírgula decimal, ponto de milhar, dd/mm/aaaa.
- **Unidade sempre visível** junto ao número ou no cabeçalho da coluna ("Área (ha)").
- **Casas decimais consistentes por tipo** (tabela acima). Nunca misture 1 e 2 casas na mesma coluna.
- **Uma fonte de verdade:** a mesma métrica tem o mesmo valor e o mesmo nome em qualquer tela. Calcule em um só lugar (`lib/`), nunca no componente.
- **Todo total diz o que conta:** "32 terras, sem On Hold". Se o recorte muda (filtro), o rótulo muda junto.
- **Durações: mediana (e P90), não média.** Nunca média de médias apresentada como tempo real. Mostre o n: "Mediana 27,8 dias · P90 61 dias · 28 passagens".
- Valor ausente é `—`, nunca `0`, `NaN`, `null` ou `undefined`.


## 6. Texto e rótulos

- **Não truncar texto com significado** (status, nome de etapa, mensagem de erro): quebre em duas linhas.
- **Se truncar for inevitável** (nome longo em lista estreita), use reticências e mostre o texto completo em tooltip no hover **e** no foco.
- **Sem abreviação ambígua.** Um rótulo cortado não pode ter duas leituras.
- **Mesmo nome para a mesma coisa** em todo o produto. Duas telas/abas com o mesmo nome têm o mesmo conteúdo.
- **Rótulos descrevem o que a ação faz:** "Mostrar terras por etapa", não "Indicadores". Botões começam com verbo: "Salvar contrato", "Exportar Excel".
- **Mensagens de erro dizem o que houve e o que fazer:** "Não foi possível salvar: a data de assinatura é anterior à de proposta. Corrija a data e tente de novo."
- **Confirmações dizem a consequência:** "Excluir 3 tarefas? Os comentários delas também serão excluídos."


## 11. Identificação de entidades

- **Sempre nome + código**, nunca só código: "Fazenda Boa Vista (TER-0064)" — em listas, tabelas, logs, notificações e títulos. Use `entityLabel`.
- **O nome é link** para a página da entidade.
- **Papéis de pessoas nomeados com precisão** (proprietário, contato, responsável interno), sem reaproveitar um rótulo para papéis diferentes.
- Pessoas: avatar com iniciais (fundo `rg-sunken`, texto `rg-ink`) + nome; nunca só avatar.


## 12. Visualização de dados

Biblioteca: **Recharts** (já no template). Componente base: `ui/chart.tsx`.

### Regras de conteúdo

- **Um gráfico por pergunta.** O título do gráfico é a pergunta ou a conclusão ("Plantio acumulado vs. meta 2026"), não o nome da métrica.
- **Mostre o tamanho da amostra** ao lado de médias e medianas ("28 passagens").
- **Contexto no gráfico:** linha de meta/orçamento/média (tracejada, `rg-mata`, com rótulo), marcação de eventos relevantes.
- **Vermelho só com referência.** Sem meta ou limite, não existe "ruim".
- **Fonte e data de atualização** abaixo do gráfico, 12px `rg-ink-muted`.

### Regras de forma

| Faça | Não faça |
|---|---|
| Barras de canto reto, eixo começando em 0 | Barra arredondada, escala truncada em barras |
| Linha de 2px, vértices retos (`type="linear"`), pontos só no último valor | Linha suavizada, ponto em cada valor |
| Grade só horizontal, tracejada, `#E4D9CF` | Grade completa, eixos pesados |
| Rótulo direto no fim da série ou legenda em lista | Legenda longe do gráfico, rótulo em cada ponto |
| Anel (donut) com ≤ 5 fatias, ou barra horizontal | Pizza cheia, 3D, sombra, gradiente de série |
| Eixos e rótulos em 12px `rg-ink-muted` | Texto abaixo de 12px |
| Tooltip com valor formatado (`format.ts`) e unidade | Número cru ("2342.8") |

### Cores de série (ordem fixa)

| Ordem | Cor | Hex |
|---|---|---|
| 1 | Verde Mata | `#003714` |
| 2 | Verde das Mudas | `#68C153` |
| 3 | Azul | `#419BDC` |
| 4 | Laranja | `#DF8435` |
| 5 | Lavanda | `#AFA5F5` |
| 6 | Amarelo | `#F0D23C` |
| Outros / sem categoria | Cinza-verde | `#CCD7D0` |

- Mais de 6 categorias: agrupe em "Outros" ou use barras ordenadas de uma cor.
- **Categorias vizinhas usam cores bem distintas** (a ordem acima já alterna).
- **Escala sequencial** (intensidade, ex.: mapa de calor): `#E6EBE8 → #99AFA1 → #335F43 → #003714`.
- **Destaque:** todas as barras em `rg-mata-20`, a destacada em `rg-mata`.
- Amarelo e lavanda não passam 3:1 sobre branco: use só em área/barra larga, sempre com rótulo.

### Mapas

- Abrem enquadrados nos dados (fit bounds), nunca no Brasil inteiro sem motivo.
- Marcadores com no mínimo 10px, borda branca de 1,5px; agrupamento com contagem quando próximos.
- Polígonos: preenchimento da cor da categoria a 30%, contorno 1,5px na cor cheia.
- Legenda funciona como filtro e inclui todas as categorias, com contagem.
- Basemap claro e dessaturado, para os dados aparecerem.


## 14. Conteúdo gerado por IA

- **Sinalize o que foi lido ou gerado por IA:** tag `status-ai` com ícone `Sparkles` e texto "Gerado por IA" / "Lido por IA". Permita corrigir no lugar.
- **Cite a fonte** sempre que a IA afirmar algo: documento, página, trecho — com link que abre no ponto exato.
- **Gerar de novo nunca sobrescreve sem aviso:** cria nova versão, diz isso antes ("Isso cria a versão 3; a versão 2 continua disponível") e mantém histórico.
- **Validação humana visível:** "Validado por Ana Souza em 05/11/2026" ou "Não validado", ao lado do botão de validar.
- Dados que a IA extraiu passam pelo mesmo `format.ts` antes de aparecer.

### Histórico e linha do tempo

- **Uma linha do tempo por entidade**, coluna única, ordem cronológica (mais recente em cima), com filtro por tipo de evento.
- Cada evento: data/hora, quem, o que mudou (de → para).
- **Comentários não se misturam com histórico** — abas ou seções separadas.
- **Totais de tempo aparecem uma vez**, no topo, não repetidos por evento.


