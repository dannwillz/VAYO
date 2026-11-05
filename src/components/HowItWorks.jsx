import { MapPin, Car, Smile } from 'lucide-react'

const steps = [
  { icon: MapPin, title: 'Enter your destination', description: 'Tell us where you want to go. We will find the closest available drivers.' },
  { icon: Car, title: 'Choose your ride', description: 'Pick from Vayo Go, Comfort, or XL. See your fare upfront before you book.' },
  { icon: Smile, title: 'Enjoy the journey', description: 'Meet your driver, relax, and track your trip until you arrive safely.' },
]

export default function HowItWorks() {
  return (
    <section className="section bg-off-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title center-title">How it works</h2>
          <p className="section-subtitle center-title">Booking a ride with VAYO takes seconds. Three simple steps from request to arrival.</p>
        </div>
        <div className="howitworks-grid stagger">
          {steps.map((step, i) => (
            <div key={step.title} className="howitworks-card">
              <div className="howitworks-number">{i + 1}</div>
              <div className="howitworks-icon"><step.icon size={28} /></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .howitworks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .howitworks-card {
          text-align: center;
          padding: 36px 28px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          position: relative;
          transition: all var(--transition);
        }
        .howitworks-card:hover { border-color: var(--vayo-green); box-shadow: var(--shadow-md); transform: translateY(-4px); }
        .howitworks-number {
          position: absolute;
          top: 20px; right: 24px;
          font-size: 3rem; font-weight: 800;
          color: var(--border-light);
          line-height: 1;
        }
        .howitworks-icon {
          width: 64px; height: 64px;
          border-radius: var(--radius);
          background: var(--vayo-green-light);
          color: var(--vayo-green-darker);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
        }
        .howitworks-card h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 8px; }
        .howitworks-card p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }

        @media (max-width: 768px) {
          .howitworks-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
