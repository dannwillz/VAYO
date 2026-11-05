import { useState } from 'react'
import { Mail, Lock, User, Loader, Check, Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [status, setStatus] = useState('idle')

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (mode === 'signup' && !form.name.trim()) e.name = 'Enter your name'
    if (!form.email.trim()) e.email = 'Enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password) e.password = 'Enter a password'
    else if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
    if (mode === 'signup') {
      if (!form.confirm) e.confirm = 'Confirm your password'
      else if (form.password !== form.confirm) e.confirm = 'Passwords do not match'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1200)
  }

  const switchMode = (newMode) => {
    setMode(newMode)
    setErrors({})
    setStatus('idle')
    setForm({ name: '', email: '', password: '', confirm: '' })
  }

  return (
    <section className="auth-page">
      <div className="auth-bg" />
      <div className="container auth-container">
        <div className="auth-card">
          <div className="auth-brand">
            <Link to="/"><Logo size="lg" /></Link>
          </div>

          {status === 'success' ? (
            <div className="auth-success">
              <div className="confirmed-icon"><Check size={28} /></div>
              <h2>{mode === 'login' ? 'Welcome back!' : 'Account created!'}</h2>
              <p>
                You are now signed in to VAYO as <strong>{form.email}</strong>.
              </p>
              <p className="auth-demo-note">
                This is a demo authentication flow. No real account has been created and no data is stored.
              </p>
              <Link to="/book" className="btn btn-primary btn-block btn-lg" style={{ marginTop: 24 }}>
                Continue to booking
              </Link>
            </div>
          ) : (
            <>
              <div className="auth-tabs">
                <button
                  className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
                  onClick={() => switchMode('login')}
                >
                  Log in
                </button>
                <button
                  className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
                  onClick={() => switchMode('signup')}
                >
                  Sign up
                </button>
              </div>

              <form className="auth-form" onSubmit={handleSubmit} noValidate>
                {mode === 'signup' && (
                  <div className="form-group">
                    <label className="form-label">Full name</label>
                    <div className="input-with-icon">
                      <User size={18} />
                      <input
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                      />
                    </div>
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Email address</label>
                  <div className="input-with-icon">
                    <Mail size={18} />
                    <input
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </div>
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="input-with-icon">
                    <Lock size={18} />
                    <input
                      className={`form-input ${errors.password ? 'error' : ''}`}
                      type={showPassword ? 'text' : 'password'}
                      placeholder={mode === 'signup' ? 'Create a password' : 'Enter your password'}
                      value={form.password}
                      onChange={(e) => update('password', e.target.value)}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword((s) => !s)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <div className="form-error">{errors.password}</div>}
                </div>

                {mode === 'signup' && (
                  <div className="form-group">
                    <label className="form-label">Confirm password</label>
                    <div className="input-with-icon">
                      <Lock size={18} />
                      <input
                        className={`form-input ${errors.confirm ? 'error' : ''}`}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Re-enter your password"
                        value={form.confirm}
                        onChange={(e) => update('confirm', e.target.value)}
                      />
                    </div>
                    {errors.confirm && <div className="form-error">{errors.confirm}</div>}
                  </div>
                )}

                {mode === 'login' && (
                  <div className="auth-forgot">
                    <a href="#" onClick={(e) => e.preventDefault()}>Forgot password?</a>
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={status === 'loading'}>
                  {status === 'loading'
                    ? <><Loader size={18} className="spin" /> Please wait...</>
                    : mode === 'login' ? 'Log in' : 'Create account'}
                </button>
              </form>

              <p className="auth-demo-note" style={{ textAlign: 'center', marginTop: 20 }}>
                Demo authentication — no real account is created and no data is stored.
              </p>
            </>
          )}
        </div>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: calc(var(--nav-height) + 40px) 24px 40px;
          position: relative;
          background: linear-gradient(135deg, var(--vayo-green-lighter) 0%, var(--bg-white) 100%);
        }
        .auth-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 20% 80%, var(--vayo-green-muted) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(0,217,113,0.08) 0%, transparent 50%);
        }
        .auth-container { position: relative; z-index: 1; display: flex; justify-content: center; }
        .auth-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 40px;
          box-shadow: var(--shadow-lg);
          width: 100%;
          max-width: 440px;
        }
        .auth-brand { text-align: center; margin-bottom: 28px; }
        .auth-tabs {
          display: flex;
          gap: 4px;
          background: var(--bg-off-white);
          border-radius: var(--radius-sm);
          padding: 4px;
          margin-bottom: 28px;
        }
        .auth-tab {
          flex: 1;
          padding: 10px;
          border: none;
          background: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: all var(--transition);
        }
        .auth-tab.active { background: var(--bg-white); color: var(--text-primary); box-shadow: var(--shadow-sm); }
        .auth-form .input-with-icon { position: relative; }
        .auth-form .input-with-icon svg { position: absolute; left: 14px; color: var(--text-muted); pointer-events: none; }
        .auth-form .input-with-icon .form-input { padding-left: 42px; padding-right: 42px; }
        .password-toggle {
          position: absolute;
          right: 12px;
          background: none; border: none;
          color: var(--text-muted);
          padding: 4px;
        }
        .password-toggle:hover { color: var(--text-primary); }
        .auth-forgot { text-align: right; margin-bottom: 20px; }
        .auth-forgot a { font-size: 0.82rem; color: var(--vayo-green-darker); font-weight: 500; }
        .auth-demo-note { font-size: 0.78rem; color: var(--text-muted); }

        .auth-success { text-align: center; }
        .confirmed-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: var(--vayo-green);
          color: #002a18;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
        }
        .auth-success h2 { font-size: 1.4rem; margin-bottom: 12px; }
        .auth-success p { color: var(--text-secondary); font-size: 0.92rem; margin-bottom: 4px; }

        @media (max-width: 480px) {
          .auth-card { padding: 24px; }
        }
      `}</style>
    </section>
  )
}
