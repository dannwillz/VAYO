import { Link } from 'react-router-dom'
import { Building2, ArrowRight } from 'lucide-react'

const businessImage = 'https://images.pexels.com/photos/7108454/pexels-photo-7108454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'

export default function BusinessSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="business-grid">
          <div className="business-image-wrap">
            <img src={businessImage} alt="Business team meeting" />
          </div>
          <div className="business-content">
            <span className="tag"><Building2 size={12} /> VAYO for Business</span>
            <h2 className="section-title">Transport solutions for modern companies.</h2>
            <p className="section-subtitle" style={{ marginBottom: 24 }}>
              Manage employee rides, client pickups, and corporate travel with a single dashboard.
              Set budgets, track expenses, and simplify reporting — all in one place.
            </p>
            <ul className="business-list">
              <li>Centralised billing and invoicing</li>
              <li>Ride scheduling for employees and guests</li>
              <li>Spending limits and expense controls</li>
              <li>Detailed trip reporting</li>
            </ul>
            <Link to="/help" className="btn btn-dark btn-lg">
              Explore Business <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .business-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: center;
        }
        .business-image-wrap {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          aspect-ratio: 4/3;
        }
        .business-image-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .business-list {
          margin-bottom: 28px;
          display: flex; flex-direction: column; gap: 10px;
        }
        .business-list li {
          font-size: 0.92rem;
          color: var(--text-secondary);
          padding-left: 24px;
          position: relative;
        }
        .business-list li::before {
          content: '';
          position: absolute;
          left: 0; top: 9px;
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--vayo-green);
        }

        @media (max-width: 860px) {
          .business-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  )
}
