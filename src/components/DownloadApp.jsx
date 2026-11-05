import { Apple, Play, QrCode, Smartphone } from 'lucide-react'

const phoneImage = 'https://images.pexels.com/photos/17772714/pexels-photo-17772714.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'

export default function DownloadApp() {
  return (
    <section className="section">
      <div className="container">
        <div className="download-grid">
          <div className="download-content">
            <span className="tag">Download the app</span>
            <h2 className="section-title">Book rides in seconds, right from your phone.</h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              The VAYO app puts booking, tracking, and safety features at your fingertips. Download
              now and start riding.
            </p>
            <div className="download-buttons">
              <button className="download-btn">
                <Apple size={24} />
                <div>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </div>
              </button>
              <button className="download-btn">
                <Play size={24} />
                <div>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </div>
              </button>
            </div>
            <div className="download-qr">
              <QrCode size={48} />
              <div>
                <strong>Scan to download</strong>
                <span>Point your camera here to get the VAYO app.</span>
              </div>
            </div>
            <p className="download-disclaimer">
              Demo links — the VAYO app is not yet available in app stores.
            </p>
          </div>

          <div className="download-phone">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-app">
                  <div className="phone-app-header">
                    <span className="phone-app-logo">VAYO</span>
                    <Smartphone size={16} />
                  </div>
                  <div className="phone-app-map">
                    <div className="phone-map-grid" />
                    <div className="phone-map-pin pickup"><span /></div>
                    <div className="phone-map-pin dest"><span /></div>
                    <div className="phone-map-route" />
                  </div>
                  <div className="phone-app-card">
                    <div className="phone-app-row"><span>Pickup</span><strong>King's Cross</strong></div>
                    <div className="phone-app-divider" />
                    <div className="phone-app-row"><span>Destination</span><strong>Canary Wharf</strong></div>
                    <div className="phone-app-fare">
                      <span>Vayo Go · 3 min</span>
                      <strong>£12.40</strong>
                    </div>
                    <button className="btn btn-primary btn-block" style={{ marginTop: 12 }}>Book now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .download-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .download-buttons { display: flex; gap: 14px; margin-bottom: 24px; flex-wrap: wrap; }
        .download-btn {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 20px;
          background: var(--charcoal);
          color: #fff;
          border: 1px solid var(--charcoal);
          border-radius: var(--radius-sm);
          transition: all var(--transition);
        }
        .download-btn:hover { background: var(--charcoal-light); transform: translateY(-2px); }
        .download-btn small { font-size: 0.68rem; display: block; opacity: 0.7; }
        .download-btn strong { font-size: 0.95rem; display: block; }
        .download-qr {
          display: flex; align-items: center; gap: 14px;
          padding: 16px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          max-width: 340px;
        }
        .download-qr svg { color: var(--charcoal); flex-shrink: 0; }
        .download-qr strong { font-size: 0.9rem; display: block; }
        .download-qr span { font-size: 0.8rem; color: var(--text-muted); }
        .download-disclaimer {
          margin-top: 12px; font-size: 0.78rem; color: var(--text-muted);
        }

        .download-phone { display: flex; justify-content: center; }
        .phone-mockup {
          width: 280px;
          background: var(--charcoal);
          border-radius: 40px;
          padding: 12px;
          box-shadow: var(--shadow-lg);
        }
        .phone-screen {
          background: var(--bg-off-white);
          border-radius: 28px;
          overflow: hidden;
          aspect-ratio: 9/19;
        }
        .phone-app { display: flex; flex-direction: column; height: 100%; }
        .phone-app-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px;
          background: var(--bg-white);
        }
        .phone-app-logo { font-weight: 800; font-size: 1rem; letter-spacing: -0.03em; }
        .phone-app-map {
          flex: 1;
          position: relative;
          background: var(--vayo-green-lighter);
          overflow: hidden;
        }
        .phone-map-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border-light) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-light) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.6;
        }
        .phone-map-pin { position: absolute; display: flex; align-items: center; }
        .phone-map-pin span { width: 12px; height: 12px; border-radius: 50%; }
        .phone-map-pin.pickup { top: 30%; left: 25%; }
        .phone-map-pin.pickup span { background: var(--vayo-green); box-shadow: 0 0 0 4px var(--vayo-green-light); }
        .phone-map-pin.dest { bottom: 30%; right: 25%; }
        .phone-map-pin.dest span { background: var(--charcoal); box-shadow: 0 0 0 4px var(--border-light); }
        .phone-map-route {
          position: absolute;
          top: 30%; left: 30%;
          width: 2px; height: 40%;
          background: var(--vayo-green);
          transform: rotate(25deg);
          transform-origin: top;
        }
        .phone-app-card {
          background: var(--bg-white);
          padding: 16px;
          border-top: 1px solid var(--border);
        }
        .phone-app-row { display: flex; justify-content: space-between; font-size: 0.78rem; }
        .phone-app-row span { color: var(--text-muted); }
        .phone-app-row strong { color: var(--text-primary); }
        .phone-app-divider { height: 1px; background: var(--border-light); margin: 8px 0; }
        .phone-app-fare {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 12px; padding-top: 12px;
          border-top: 1px solid var(--border-light);
        }
        .phone-app-fare span { font-size: 0.78rem; color: var(--text-muted); }
        .phone-app-fare strong { font-size: 1.1rem; font-weight: 800; }

        @media (max-width: 860px) {
          .download-grid { grid-template-columns: 1fr; gap: 40px; }
          .download-phone { order: -1; }
        }
      `}</style>
    </section>
  )
}
