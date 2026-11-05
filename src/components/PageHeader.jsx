export default function PageHeader({ tag, title, subtitle, children }) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="page-header-inner">
          {tag && <span className="tag">{tag}</span>}
          <h1 className="page-header-title">{title}</h1>
          {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
          {children}
        </div>
      </div>

      <style>{`
        .page-header {
          padding-top: calc(var(--nav-height) + 48px);
          padding-bottom: 32px;
          background: linear-gradient(180deg, var(--vayo-green-lighter) 0%, var(--bg-white) 100%);
        }
        .page-header-inner {
          max-width: 640px;
        }
        .page-header-title {
          font-size: 2.6rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 16px 0 12px;
        }
        .page-header-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .page-header-title { font-size: 2rem; }
          .page-header-subtitle { font-size: 1rem; }
        }
      `}</style>
    </section>
  )
}
