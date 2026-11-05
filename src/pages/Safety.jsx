import { ShieldCheck, Share2, Siren, Star, Phone, Users, Eye, MessageSquare } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { safetyFeatures } from '../data/safetyFeatures'

const iconMap = {
  'shield-check': ShieldCheck,
  'share-2': Share2,
  'siren': Siren,
  'star': Star,
}

const responsiblePractices = [
  { icon: Eye, title: 'Verify your ride', description: 'Always check the driver name, photo, and licence plate before getting in the vehicle.' },
  { icon: Users, title: 'Share your trip', description: 'Use trip-sharing to let friends and family follow your journey in real time.' },
  { icon: Phone, title: 'Use emergency tools', description: 'The in-app assistance button is designed to connect you to help when you need it.' },
  { icon: MessageSquare, title: 'Rate and report', description: 'Provide honest feedback after each trip to help keep the VAYO community safe.' },
]

export default function Safety() {
  return (
    <>
      <PageHeader
        tag="Safety"
        title="Every journey deserves peace of mind."
        subtitle="Safety is at the heart of VAYO. These are the features and practices we are building to protect riders and drivers."
      />

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="safety-features-grid stagger">
            {safetyFeatures.map((f) => {
              const Icon = iconMap[f.icon] || ShieldCheck
              return (
                <div key={f.id} className="card card-hover safety-feature-card">
                  <div className="safety-feature-icon"><Icon size={26} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              )
            })}
          </div>
          <p className="safety-disclaimer">
            These are proposed product features for a demonstration project. Real-time emergency
            services, identity verification, and live trip tracking are not operational unless
            explicitly implemented.
          </p>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title center-title">Responsible ride practices</h2>
            <p className="section-subtitle center-title">Simple habits that help make every VAYO trip safer for everyone.</p>
          </div>
          <div className="safety-practices-grid stagger">
            {responsiblePractices.map((p) => (
              <div key={p.title} className="safety-practice-card">
                <div className="safety-practice-icon"><p.icon size={22} /></div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="safety-commitment">
            <div className="safety-commitment-content">
              <h2 className="section-title">Our safety commitment</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: 24 }}>
                At VAYO, we believe that safety is not a feature — it is the foundation. We are
                committed to building a platform where every rider feels secure and every driver
                feels respected. From the moment you request a ride to the moment you arrive, we
                are designing systems that prioritise your wellbeing.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                This is a demonstration project. The safety features described here represent our
                vision for a responsible ride-hailing platform and are not yet operational features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .safety-features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .safety-feature-card { text-align: left; }
        .safety-feature-icon {
          width: 48px; height: 48px;
          border-radius: var(--radius-sm);
          background: var(--vayo-green-light);
          color: var(--vayo-green-darker);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .safety-feature-card h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; }
        .safety-feature-card p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; }
        .safety-disclaimer {
          text-align: center;
          margin-top: 32px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .safety-practices-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .safety-practice-card {
          text-align: center;
          padding: 28px 20px;
        }
        .safety-practice-icon {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: var(--bg-white);
          border: 1px solid var(--border);
          color: var(--vayo-green);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 14px;
        }
        .safety-practice-card h3 { font-size: 0.98rem; font-weight: 700; margin-bottom: 6px; }
        .safety-practice-card p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; }

        .safety-commitment {
          background: var(--vayo-green-lighter);
          border: 1px solid var(--vayo-green-muted);
          border-radius: var(--radius-lg);
          padding: 48px;
        }
        .safety-commitment-content { max-width: 720px; }

        @media (max-width: 960px) {
          .safety-features-grid { grid-template-columns: repeat(2, 1fr); }
          .safety-practices-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .safety-features-grid { grid-template-columns: 1fr; }
          .safety-practices-grid { grid-template-columns: 1fr; }
          .safety-commitment { padding: 24px; }
        }
      `}</style>
    </>
  )
}
