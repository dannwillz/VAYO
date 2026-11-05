import { Link } from 'react-router-dom'
import { Clock, Wallet, TrendingUp, Car } from 'lucide-react'

const driverImage = 'https://images.pexels.com/photos/13811143/pexels-photo-13811143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'

const benefits = [
  { icon: Clock, title: 'Flexible hours', description: 'Drive on your own schedule. Go online whenever you want and earn.' },
  { icon: Wallet, title: 'Weekly payouts', description: 'Get paid every week with transparent earnings and no hidden fees.' },
  { icon: TrendingUp, title: 'Earn more at peak times', description: 'Higher fares during busy hours mean more money in your pocket.' },
  { icon: Car, title: 'Use your own car', description: 'No special vehicle required. Drive what you already own.' },
]

export default function DriverSection() {
  return (
    <section className="section bg-dark">
      <div className="container">
        <div className="driver-grid">
          <div className="driver-left">
            <span className="tag" style={{ background: 'rgba(0,217,113,0.15)', color: 'var(--vayo-green)' }}>Drive with VAYO</span>
            <h2 className="section-title text-white">Your car. Your schedule. Your opportunity.</h2>
            <p className="driver-subtext">
              Join VAYO as a driver and turn your time behind the wheel into a flexible income stream.
              No experience required — just a valid licence and a passion for getting people where
              they need to go.
            </p>
            <div className="driver-benefits">
              {benefits.map((b) => (
                <div key={b.title} className="driver-benefit">
                  <div className="driver-benefit-icon"><b.icon size={20} /></div>
                  <div>
                    <h4>{b.title}</h4>
                    <p>{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/drive" className="btn btn-primary btn-lg">Become a Driver</Link>
          </div>

          <div className="driver-right">
            <div className="driver-image-wrap">
              <img src={driverImage} alt="Driver behind the wheel" />
            </div>
            <div className="driver-earnings-card">
              <span className="driver-earnings-label">Example earnings</span>
              <div className="driver-earnings-amount">£428<span>/week</span></div>
              <div className="driver-earnings-breakdown">
                <div><span>Trips completed</span><strong>42</strong></div>
                <div><span>Hours online</span><strong>28h</strong></div>
                <div><span>Avg. per trip</span><strong>£10.19</strong></div>
              </div>
              <p className="driver-earnings-note">Illustrative example only. Actual earnings vary.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .driver-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .driver-subtext {
          color: rgba(255,255,255,0.7);
          font-size: 1.05rem;
          margin-bottom: 32px;
          max-width: 520px;
          line-height: 1.6;
        }
        .driver-benefits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 36px;
        }
        .driver-benefit {
          display: flex; gap: 12px;
        }
        .driver-benefit-icon {
          width: 40px; height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(0,217,113,0.15);
          color: var(--vayo-green);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .driver-benefit h4 { color: #fff; font-size: 0.9rem; font-weight: 700; margin-bottom: 4px; }
        .driver-benefit p { color: rgba(255,255,255,0.6); font-size: 0.82rem; line-height: 1.5; }

        .driver-right { position: relative; }
        .driver-image-wrap {
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          aspect-ratio: 4/3;
        }
        .driver-image-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .driver-earnings-card {
          position: absolute;
          bottom: -24px; left: -20px;
          background: var(--bg-white);
          border-radius: var(--radius-md);
          padding: 24px;
          box-shadow: var(--shadow-lg);
          min-width: 260px;
        }
        .driver-earnings-label {
          font-size: 0.75rem; font-weight: 600; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .driver-earnings-amount {
          font-size: 2.4rem; font-weight: 800; color: var(--text-primary);
          letter-spacing: -0.03em; line-height: 1;
          margin: 4px 0 16px;
        }
        .driver-earnings-amount span { font-size: 0.9rem; font-weight: 500; color: var(--text-muted); }
        .driver-earnings-breakdown { display: flex; flex-direction: column; gap: 6px; }
        .driver-earnings-breakdown div {
          display: flex; justify-content: space-between;
          font-size: 0.82rem; color: var(--text-secondary);
        }
        .driver-earnings-breakdown strong { color: var(--text-primary); }
        .driver-earnings-note {
          font-size: 0.7rem; color: var(--text-muted);
          margin-top: 10px; padding-top: 10px;
          border-top: 1px solid var(--border-light);
        }

        @media (max-width: 860px) {
          .driver-grid { grid-template-columns: 1fr; gap: 40px; }
          .driver-earnings-card { position: relative; bottom: 0; left: 0; margin-top: 20px; }
        }
        @media (max-width: 500px) {
          .driver-benefits { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
