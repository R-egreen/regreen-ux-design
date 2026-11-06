/* re.green — formatação padrão brasileiro (v1.0). Ver design.md §5.
   Copie para src/regreen/format.ts. Toda exibição de número/data passa por aqui,
   inclusive dados vindos de IA e integrações. */

const nf = (min: number, max = min) =>
  new Intl.NumberFormat('pt-BR', { minimumFractionDigits: min, maximumFractionDigits: max })

const EMPTY = '—'
const isNil = (v: unknown): v is null | undefined => v === null || v === undefined || Number.isNaN(v)

/** 2.342,80 ha */
export const fmtArea = (ha?: number | null) => (isNil(ha) ? EMPTY : `${nf(2).format(ha)} ha`)

/** R$ 1.000,00 — compact: R$ 1,2 mi / R$ 350 mil (só em KPI, nunca em tabela) */
export const fmtMoney = (v?: number | null, opts: { compact?: boolean } = {}) => {
  if (isNil(v)) return EMPTY
  if (opts.compact) {
    const abs = Math.abs(v)
    if (abs >= 1e9) return `R$ ${nf(1).format(v / 1e9)} bi`
    if (abs >= 1e6) return `R$ ${nf(1).format(v / 1e6)} mi`
    if (abs >= 1e3) return `R$ ${nf(0).format(v / 1e3)} mil`
  }
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v)
}

/** 27,8% — recebe fração (0.278) por padrão; passe { isFraction: false } se já vier em %. */
export const fmtPct = (v?: number | null, { isFraction = true } = {}) =>
  isNil(v) ? EMPTY : `${nf(1).format(isFraction ? v * 100 : v)}%`

/** 1.234 */
export const fmtInt = (v?: number | null) => (isNil(v) ? EMPTY : nf(0).format(v))

/** 2.342,80 com casas definidas */
export const fmtNum = (v?: number | null, decimals = 2) => (isNil(v) ? EMPTY : nf(decimals).format(v))

/** 27,8 dias / 1 dia */
export const fmtDays = (v?: number | null) =>
  isNil(v) ? EMPTY : `${nf(0, 1).format(v)} ${Math.abs(v) === 1 ? 'dia' : 'dias'}`

/** tCO₂e com 1 casa */
export const fmtCarbon = (t?: number | null) => (isNil(t) ? EMPTY : `${nf(1).format(t)} tCO₂e`)

const toDate = (d: Date | string | number) => (d instanceof Date ? d : new Date(d))

/** 05/11/2026 */
export const fmtDate = (d?: Date | string | number | null) =>
  isNil(d) || d === '' ? EMPTY : new Intl.DateTimeFormat('pt-BR').format(toDate(d))

/** 05/11/2026 14:32 */
export const fmtDateTime = (d?: Date | string | number | null) =>
  isNil(d) || d === ''
    ? EMPTY
    : new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(toDate(d))

/** nov/2026 */
export const fmtMonth = (d?: Date | string | number | null) =>
  isNil(d) || d === ''
    ? EMPTY
    : new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric' })
        .format(toDate(d))
        .replace('. de ', '/')
        .replace(' de ', '/')

/** Mediana e P90 — use em vez de média para durações (design.md §5). */
export const quantile = (values: number[], q: number) => {
  const xs = values.filter((v) => !isNil(v)).sort((a, b) => a - b)
  if (!xs.length) return null
  const pos = (xs.length - 1) * q
  const lo = Math.floor(pos)
  const hi = Math.ceil(pos)
  return xs[lo] + (xs[hi] - xs[lo]) * (pos - lo)
}
export const median = (values: number[]) => quantile(values, 0.5)
export const p90 = (values: number[]) => quantile(values, 0.9)

/** "Fazenda Boa Vista (TER-0064)" — nome + código, sempre (design.md §11). */
export const entityLabel = (name?: string | null, code?: string | null) =>
  name && code ? `${name} (${code})` : name || code || EMPTY
