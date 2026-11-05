import { Users, Clock, Car } from 'lucide-react'
import { rideOptions } from '../data/rideOptions'

export default function RideCategories() {
  return (
    <section className="section bg-off-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title center-title">Ride categories</h2>
          <p className="section-subtitle center-title">Choose the ride that fits your needs — from everyday trips to group travel.</p>
        </div>
        <div className="ride-categories-grid stagger">
          {rideOptions.map((ride) => (
            <div key={ride.id} className="ride-category-card">
              <div className="ride-category-image">
                <img src={ride.image} alt={ride.name} />
                {ride.badge && <span className="ride-category-badge">{ride.badge}</span>}
              </div>
              <div className="ride-category-body">
                <h3>{ride.name}</h3>
                <p>{ride.description}</p>
                <div className="ride-category-meta">
                  <span><Users size={14} /> {ride.capacity} passengers</span>
                  <span><Clock size={14} /> {ride.eta} pickup</span>
                  <span><Car size={14} /> From £{ride.baseFare}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ride-categories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .ride-category-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: all var(--transition);
        }
        .ride-category-card:hover { border-color: var(--vayo-green); box-shadow: var(--shadow-md); transform: translateY(-4px); }
        .ride-category-image {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: var(--bg-light);
        }
        .ride-category-image img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .ride-category-card:hover .ride-category-image img { transform: scale(1.05); }
        .ride-category-badge {
          position: absolute;
          top: 14px; left: 14px;
          padding: 4px 12px;
          font-size: 0.72rem; font-weight: 700;
          background: var(--vayo-green);
          color: #002a18;
          border-radius: 100px;
        }
        .ride-category-body { padding: 22px; }
        .ride-category-body h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; }
        .ride-category-body p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px; }
        .ride-category-meta {
          display: flex; flex-wrap: wrap; gap: 14px;
          font-size: 0.82rem; color: var(--text-muted);
        }
        .ride-category-meta span { display: flex; align-items: center; gap: 4px; }

        @media (max-width: 960px) { .ride-categories-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
