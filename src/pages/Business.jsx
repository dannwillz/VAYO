import { Building2, ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const businessImage = 'https://images.pexels.com/photos/7108454/pexels-photo-7108454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'

const features = [
  { title: 'Centralised dashboard', description: 'Manage all employee rides from a single, intuitive control panel.' },
  { title: 'Automated invoicing', description: 'Receive one consolidated invoice for all trips — no more receipt chasing.' },
  { title: 'Spending controls', description: 'Set per-employee ride budgets and spending limits with real-time alerts.' },
  { title: 'Trip reporting', description: 'Detailed trip history and analytics for accounting and compliance.' },
  { title: 'Priority support', description: 'Dedicated account management and priority support for your team.' },
  { title: 'Flexible ride policies', description: 'Define ride rules by department, time of day, or trip purpose.' },
]

export default function Business() {
  return (
    <>
      <PageHeader
        tag="VAYO for Business"
        title="Transport solutions for modern companies."
        subtitle="Simplify corporate travel with centralised billing, ride policies, and spending controls — all in one dashboard."
      />

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="business-hero-grid">
            <div className="business-hero-content">
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>One platform for all your company rides</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 24 }}>
                Whether it is daily employee commutes, client pickups, or airport transfers, VAYO for
                Business gives you the tools to manage it all — with transparent pricing and no
                hidden fees.
              </p>
              <div className="business-hero-stats">
                <div className="business-stat">
                  <strong>£0</strong>
                  <span>Setup fee</span>
                </div>
                <div className="business-stat">
                  <strong>24/7</strong>
                  <span>Ride availability</span>
                </div>
                <div className="business-stat">
                  <strong>1</strong>
                  <span>Monthly invoice</span>
                </div>
              </div>
              <Link to="/help" className="btn btn-dark btn-lg">
                Explore Business <ArrowRight size={16} />
              </Link>
            </div>
            <div className="business-hero-image">
              <img src={businessImage} alt="Business team collaboration" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title center-title">Everything you need to manage corporate travel</h2>
            <p className="section-subtitle center-title">Powerful features designed for finance teams, operations managers, and employees alike.</p>
          </div>
          <div className="business-features-grid stagger">
            {features.map((f) => (
              <div key={f.title} className="card card-hover">
                <div className="business-feature-check"><Check size={18} /></div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="business-cta">
            <Building2 size={36} style={{ color: 'var(--vayo-green)', marginBottom: 16 }} />
            <h2 className="section-title" style={{ marginBottom: 12 }}>Ready to get started?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: 28, maxWidth: 520 }}>
              Contact our team to set up a VAYO for Business account tailored to your company's needs.
            </p>
            <Link to="/help" className="btn btn-primary btn-lg">Contact sales</Link>
            <p style={{ marginTop: 16, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Demonstration page — no real business accounts are created.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .business-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .business-hero-stats {
          display: flex; gap: 32px;
          margin-bottom: 32px;
        }
        .business-stat strong {
          font-size: 2rem; font-weight: 800;
          color: var(--vayo-green-darker);
          display: block;
        }
        .business-stat span { font-size: 0.82rem; color: var(--text-muted); }
        .business-hero-image {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          aspect-ratio: 4/3;
        }
        .business-hero-image img { width: 100%; height: 100%; object-fit: cover; }

        .business-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .business-feature-check {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: var(--vayo-green-light);
          color: var(--vayo-green-darker);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }
        .business-features-grid h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; }
        .business-features-grid p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; }

        .business-cta {
          text-align: center;
          background: var(--vayo-green-lighter);
          border: 1px solid var(--vayo-green-muted);
          border-radius: var(--radius-lg);
          padding: 56px 32px;
        }

        @media (max-width: 860px) {
          .business-hero-grid { grid-template-columns: 1fr; }
          .business-features-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
