import { Tag, UserCheck, Shield, MapPinned } from 'lucide-react'

const features = [
  { icon: Tag, title: 'Transparent upfront pricing', description: 'See your fare before you book. No surge surprises, no hidden fees — just honest, clear pricing.' },
  { icon: UserCheck, title: 'Verified driver profiles', description: 'Every driver is profile-verified. Know who is behind the wheel before you get in.' },
  { icon: Shield, title: 'Safety-focused journeys', description: 'Built-in safety features designed to protect riders and drivers on every trip.' },
  { icon: MapPinned, title: 'Convenient pickup & drop-off', description: 'Precise location tracking means your driver finds you quickly, every time.' },
]

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title center-title">Why choose VAYO?</h2>
          <p className="section-subtitle center-title">We are building a ride-hailing experience that puts people first — reliable, transparent, and designed around your safety.</p>
        </div>
        <div className="features-grid stagger">
          {features.map((f) => (
            <div key={f.title} className="card card-hover features-card">
              <div className="features-icon"><f.icon size={24} /></div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .features-card { text-align: left; }
        .features-icon {
          width: 48px; height: 48px;
          border-radius: var(--radius-sm);
          background: var(--vayo-green-light);
          color: var(--vayo-green-darker);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .features-card h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; }
        .features-card p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; }

        @media (max-width: 960px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .features-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
