import { ShieldCheck, Share2, Siren, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { safetyFeatures } from '../data/safetyFeatures'

const iconMap = {
  'shield-check': ShieldCheck,
  'share-2': Share2,
  'siren': Siren,
  'star': Star,
}

export default function SafetySection() {
  return (
    <section className="section">
      <div className="container">
        <div className="safety-grid">
          <div className="safety-left">
            <span className="tag"><ShieldCheck size={12} /> Safety at VAYO</span>
            <h2 className="section-title">Every journey deserves peace of mind.</h2>
            <p className="section-subtitle" style={{ marginBottom: 28 }}>
              We are designing VAYO with safety at its core — from driver verification to in-trip
              assistance. These are proposed product features for this demonstration.
            </p>
            <Link to="/safety" className="btn btn-secondary">Learn more about safety</Link>
          </div>
          <div className="safety-right stagger">
            {safetyFeatures.map((f) => {
              const Icon = iconMap[f.icon] || ShieldCheck
              return (
                <div key={f.id} className="safety-card">
                  <div className="safety-card-icon"><Icon size={22} /></div>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .safety-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 56px;
          align-items: center;
        }
        .safety-right { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .safety-card {
          padding: 22px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--bg-white);
          transition: all var(--transition);
        }
        .safety-card:hover { border-color: var(--vayo-green); box-shadow: var(--shadow); }
        .safety-card-icon {
          width: 44px; height: 44px;
          border-radius: var(--radius-sm);
          background: var(--vayo-green-light);
          color: var(--vayo-green-darker);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 14px;
        }
        .safety-card h3 { font-size: 0.95rem; font-weight: 700; margin-bottom: 6px; }
        .safety-card p { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }

        @media (max-width: 860px) {
          .safety-grid { grid-template-columns: 1fr; gap: 32px; }
          .safety-right { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
