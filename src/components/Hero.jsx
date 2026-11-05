import { Link } from 'react-router-dom'
import { Shield, Tag, Zap } from 'lucide-react'
import BookingWidget from './BookingWidget'

const heroImage = 'https://images.pexels.com/photos/6772855/pexels-photo-6772855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left stagger">
          <span className="tag hero-tag"><Zap size={12} /> Ride with VAYO</span>
          <h1 className="hero-headline">
            Your city.<br />Your ride.<br />Your way.
          </h1>
          <p className="hero-subtext">
            Get where you need to go with reliable rides, upfront pricing, and drivers you can trust.
          </p>
          <div className="hero-ctas">
            <Link to="/book" className="btn btn-primary btn-lg">Book a Ride</Link>
            <Link to="/drive" className="btn btn-secondary btn-lg">Become a Driver</Link>
          </div>
          <div className="hero-trust">
            <div className="hero-trust-item"><Shield size={16} /> <span>Safe journeys</span></div>
            <div className="hero-trust-item"><Tag size={16} /> <span>Transparent pricing</span></div>
            <div className="hero-trust-item"><Zap size={16} /> <span>Convenient pickups</span></div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrap">
            <img src={heroImage} alt="Modern city street at night" className="hero-image" />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-booking-card">
            <BookingWidget compact />
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding-top: calc(var(--nav-height) + 48px);
          padding-bottom: 80px;
          background: linear-gradient(180deg, var(--vayo-green-lighter) 0%, var(--bg-white) 60%);
          overflow: hidden;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .hero-tag { margin-bottom: 20px; }
        .hero-headline {
          font-size: 3.6rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin-bottom: 20px;
        }
        .hero-subtext {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 460px;
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .hero-ctas { display: flex; gap: 14px; margin-bottom: 36px; flex-wrap: wrap; }
        .hero-trust { display: flex; gap: 24px; flex-wrap: wrap; }
        .hero-trust-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);
        }
        .hero-trust-item svg { color: var(--vayo-green); }

        .hero-right { position: relative; }
        .hero-image-wrap {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4/3.2;
        }
        .hero-image {
          width: 100%; height: 100%;
          object-fit: cover;
        }
        .hero-image-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.25) 100%);
        }
        .hero-booking-card {
          position: absolute;
          bottom: -24px;
          right: -12px;
          width: 360px;
          max-width: 90%;
          z-index: 2;
        }

        @media (max-width: 960px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .hero-headline { font-size: 2.6rem; }
          .hero-booking-card {
            position: relative;
            bottom: 0; right: 0;
            width: 100%;
            margin-top: 24px;
          }
        }
        @media (max-width: 640px) {
          .hero-headline { font-size: 2.1rem; }
          .hero-subtext { font-size: 1rem; }
          .hero-ctas { flex-direction: column; }
          .hero-ctas .btn { width: 100%; }
          .hero-trust { gap: 16px; }
        }
      `}</style>
    </section>
  )
}
