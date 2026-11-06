/* re.green — preset do Tailwind 3 (v1.0). Ver design.md.
   Uso em tailwind.config.ts:
     import regreen from './src/regreen/tailwind.preset'
     export default { presets: [regreen], ...resto do config }
   Remova do config do projeto as chaves fontFamily, fontSize, colors.rg e boxShadow
   antigas para não sobrescrever o preset. */
import type { Config } from 'tailwindcss'

const regreen: Partial<Config> = {
  theme: {
    /* Escala fixa: 12 · 14 · 16 · 20 · 24 · 32. Não existe nada fora dela.
       Atenção: text-lg=20, text-xl=24, text-2xl=32 (diferente do padrão do Tailwind). */
    fontSize: {
      xs: ['12px', { lineHeight: '1.4' }],
      sm: ['14px', { lineHeight: '1.5' }],
      base: ['16px', { lineHeight: '1.5' }],
      lg: ['20px', { lineHeight: '1.3' }],
      xl: ['24px', { lineHeight: '1.2' }],
      '2xl': ['32px', { lineHeight: '1.15' }],
    },
    extend: {
      fontFamily: {
        /* Uma família na UI: Figtree (design.md §3.3) */
        sans: ['Figtree', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        brand: ['"Sharp Grotesk PE"', 'Figtree', 'sans-serif'], /* só login/peças de marca */
      },
      colors: {
        rg: {
          mata: {
            DEFAULT: '#003714',
            900: '#00250D',
            700: '#0D4A24',
            80: '#335F43',
            60: '#668772',
            40: '#99AFA1',
            20: '#CCD7D0',
            10: '#E6EBE8',
            '05': '#F2F5F4',
          },
          mudas: { DEFAULT: '#68C153', 700: '#57A844', 40: '#C3E6BA', 10: '#EAF6E6' },
          eyebrow: '#2D6A1F',
          tonal: { DEFAULT: '#C4E0B9', hover: '#B3D6A5', line: 'rgba(16, 56, 29, 0.16)' },
          creme: { DEFAULT: '#FCF2EB', 600: '#F5EAE1' },
          gelo: '#F4F8F2',
          sunken: '#EBF1E8',
          hover: '#F2F6F0',
          track: '#DCE5D8',
          ink: { DEFAULT: '#1C2620', muted: '#56665B' },
          hairline: { DEFAULT: 'rgba(16, 56, 29, 0.12)', soft: 'rgba(16, 56, 29, 0.07)' },
          linha: '#E4D9CF',
          muted: '#56665B',
          control: '#7F8E83',
          azul: '#419BDC',
          laranja: '#DF8435',
          lavanda: '#AFA5F5',
          amarelo: '#F0D23C',
          vermelho: '#C0392B',
        },
        status: {
          ok: { fg: '#1F6B2B', bg: '#EAF6E6', solid: '#68C153' },
          warn: { fg: '#7A5600', bg: '#FDF5D6', solid: '#F0D23C' },
          crit: { fg: '#A82E21', bg: '#FBEAE6', solid: '#C0392B' },
          info: { fg: '#1F5F94', bg: '#E8F2FA', solid: '#419BDC' },
          neutral: { fg: '#4A6152', bg: '#EEF1EF', solid: '#99AFA1' },
          ai: { fg: '#4B3FA8', bg: '#EFEDFD', solid: '#AFA5F5' },
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        chart: {
          1: '#003714',
          2: '#68C153',
          3: '#419BDC',
          4: '#DF8435',
          5: '#AFA5F5',
          6: '#F0D23C',
          other: '#CCD7D0',
        },
      },
      borderRadius: {
        '2xl': '16px', /* painel, KPI, raia, drawer, modal */
        card: '14px', /* card dentro de raia, toast, popover */
        xl: '12px', /* campos, selects, item da sidebar, menus */
        lg: '10px', /* bloco rebaixado dentro de card */
        sm: '4px', /* checkbox */
      },
      boxShadow: {
        sm: '0 1px 2px rgba(16, 56, 29, 0.06)', /* botão secundário, chip */
        card: '0 1px 2px rgba(16, 56, 29, 0.05), 0 4px 16px rgba(16, 56, 29, 0.05)', /* card, painel, item ativo */
        raised: '0 2px 6px rgba(16, 56, 29, 0.06), 0 10px 28px rgba(16, 56, 29, 0.10)', /* hover de card clicável */
        overlay: '0 4px 12px rgba(16, 56, 29, 0.08), 0 20px 48px rgba(16, 56, 29, 0.14)', /* popover, modal, drawer, toast */
      },
      spacing: {
        sidebar: '248px',
        rail: '64px',
        list: '304px',
        'list-rail': '56px',
      },
      maxWidth: {
        content: '1600px',
        prose: '62ch',
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms',
        slow: '350ms',
      },
      keyframes: {
        'rg-enter': { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'none' } },
        'rg-flash': { '0%, 30%': { backgroundColor: '#EAF6E6', borderColor: '#68C153' }, '100%': {} },
      },
      animation: {
        'rg-enter': 'rg-enter 350ms cubic-bezier(0.16, 1, 0.3, 1) both', /* entrada de cards (escalonar 30ms) */
        'rg-flash': 'rg-flash 1.6s cubic-bezier(0.2, 0, 0.2, 1) both', /* item movido / ir ao ponto exato */
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0.2, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
}

export default regreen
