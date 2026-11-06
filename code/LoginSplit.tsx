/* re.green — tela de login meio a meio (design: references/componentes.md › Tela de login).
   Copie para src/regreen/LoginSplit.tsx. Requer src/regreen/Logo.tsx e tokens.css.

   <LoginSplit
     productName="Gestão de Terras"
     image={{ src: '/brand/login.jpg', position: 'center 40%' }}   // foto aprovada pelo Marketing
     statement="Restauração em escala, com dados."
     onSubmit={async ({ email, password }) => { ... }}
     onMicrosoftLogin={() => ...}                                   // opcional (SSO)
   />

   Sem `image`, o painel visual fica em Verde Mata chapado com o logotipo off-white:
   nunca use foto de banco de imagens nem imagem gerada por IA no lugar da foto oficial. */
import { useState, type FormEvent } from 'react'
import { Logo } from './Logo'

type LoginSplitProps = {
  productName: string
  image?: { src: string; position?: string }
  statement?: string
  onSubmit: (data: { email: string; password: string }) => Promise<void> | void
  onForgotPassword?: () => void
  onMicrosoftLogin?: () => void
  error?: string
}

export function LoginSplit({
  productName,
  image,
  statement,
  onSubmit,
  onForgotPassword,
  onMicrosoftLogin,
  error,
}: LoginSplitProps) {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setLoading(true)
    try {
      await onSubmit({ email: String(form.get('email') ?? ''), password: String(form.get('password') ?? '') })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid min-h-screen bg-rg-creme lg:grid-cols-2">
      {/* Metade visual: foto oficial com proteção de leitura, ou Verde Mata chapado */}
      <aside
        className="relative hidden overflow-hidden bg-rg-mata lg:block"
        aria-hidden={image ? undefined : true}
      >
        {image && (
          <img
            src={image.src}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: image.position ?? 'center' }}
          />
        )}
        {/* Scrim: só embaixo, onde fica o texto */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,37,13,.72), rgba(0,37,13,0) 55%)' }}
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-12">
          <Logo variant="offwhite" className="h-8 w-auto self-start" />
          {statement && (
            <p className="max-w-[22ch] text-2xl font-semibold leading-tight tracking-tight text-rg-creme">
              {statement}
            </p>
          )}
        </div>
      </aside>

      {/* Metade do formulário */}
      <main className="flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="flex w-full max-w-sm flex-col gap-8">
          <div className="flex flex-col gap-6">
            <Logo className="h-8 w-auto self-start lg:hidden" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.06em] text-rg-eyebrow">{productName}</span>
              <h1 className="text-xl font-bold tracking-tight text-rg-ink">Entrar</h1>
            </div>
          </div>

          {onMicrosoftLogin && (
            <>
              <button
                type="button"
                onClick={onMicrosoftLogin}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-rg-hairline bg-white px-5 text-sm font-semibold text-rg-ink shadow-sm transition-colors hover:bg-rg-hover active:scale-[.98]"
              >
                Entrar com a conta Microsoft da re.green
              </button>
              <div className="flex items-center gap-3 text-xs text-rg-ink-muted">
                <span className="h-px flex-1 bg-rg-hairline" />
                ou com e-mail
                <span className="h-px flex-1 bg-rg-hairline" />
              </div>
            </>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="login-email" className="text-sm font-semibold text-rg-ink">E-mail</label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                className="h-10 rounded-xl border border-rg-control bg-white px-3 text-sm text-rg-ink placeholder:text-rg-control focus:border-rg-mata focus:outline-none focus:ring-[3px] focus:ring-[rgba(104,193,83,.25)]"
                placeholder="nome@re.green"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between">
                <label htmlFor="login-password" className="text-sm font-semibold text-rg-ink">Senha</label>
                {onForgotPassword && (
                  <button type="button" onClick={onForgotPassword} className="text-xs font-medium text-rg-mata hover:underline">
                    Esqueci a senha
                  </button>
                )}
              </div>
              <input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? 'login-error' : undefined}
                className="h-10 rounded-xl border border-rg-control bg-white px-3 text-sm text-rg-ink focus:border-rg-mata focus:outline-none focus:ring-[3px] focus:ring-[rgba(104,193,83,.25)]"
              />
            </div>

            {error && (
              <p id="login-error" role="alert" className="rounded-xl bg-status-crit-bg px-3 py-2 text-sm text-status-crit-fg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-rg-mata px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-rg-mata-700 active:scale-[.98] disabled:cursor-not-allowed disabled:bg-rg-sunken disabled:text-rg-control"
            >
              {loading ? 'Entrando…' : 'Entrar'}
            </button>
          </form>

          <p className="text-xs text-rg-ink-muted">Acesso restrito a colaboradores e parceiros autorizados da re.green.</p>
        </div>
      </main>
    </div>
  )
}

export default LoginSplit
