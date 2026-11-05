import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Car } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Ride', to: '/book' },
  { label: 'Drive with VAYO', to: '/drive' },
  { label: 'Business', to: '/business' },
  { label: 'Safety', to: '/safety' },
  { label: 'Help', to: '/help' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`vayo-nav ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container vayo-nav-inner">
        <Link to="/" className="vayo-nav-logo" aria-label="VAYO home">
          <Logo />
        </Link>

        <ul className="vayo-nav-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `vayo-nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="vayo-nav-actions">
          <Link to="/auth" className="vayo-nav-login">Log in</Link>
          <Link to="/book" className="btn btn-primary btn-nav">
            <Car size={16} /> Get a Ride
          </Link>
        </div>

        <button
          className="vayo-nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="vayo-mobile-menu slide-down">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `vayo-mobile-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/auth" className="vayo-mobile-link">Log in</Link>
            </li>
            <li>
              <Link to="/book" className="btn btn-primary btn-block" style={{ marginTop: 8 }}>
                <Car size={16} /> Get a Ride
              </Link>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .vayo-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: var(--nav-height);
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(12px);
          z-index: 1000;
          border-bottom: 1px solid transparent;
          transition: border-color var(--transition), background var(--transition);
        }
        .vayo-nav.scrolled { border-bottom-color: var(--border); }
        .vayo-nav-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .vayo-nav-logo { display: flex; align-items: center; }
        .vayo-nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-left: auto;
        }
        .vayo-nav-link {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition);
        }
        .vayo-nav-link:hover,
        .vayo-nav-link.active { color: var(--text-primary); font-weight: 600; }
        .vayo-nav-actions { display: flex; align-items: center; gap: 20px; }
        .vayo-nav-login {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .vayo-nav-login:hover { color: var(--vayo-green-darker); }
        .btn-nav { padding: 9px 18px; font-size: 0.9rem; }
        .vayo-nav-burger {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          padding: 4px;
        }
        .vayo-mobile-menu {
          background: var(--bg-white);
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-md);
        }
        .vayo-mobile-menu ul { padding: 12px 24px 24px; }
        .vayo-mobile-link {
          display: block;
          padding: 14px 0;
          font-weight: 500;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border-light);
        }
        .vayo-mobile-link:hover,
        .vayo-mobile-link.active { color: var(--vayo-green-darker); }

        @media (max-width: 960px) {
          .vayo-nav-links { display: none; }
          .vayo-nav-actions { display: none; }
          .vayo-nav-burger { display: block; }
        }
      `}</style>
    </header>
  )
}
