import { Link } from 'react-router-dom'
import Logo from './Logo'

const footerSections = [
  {
    title: 'Company',
    links: [
      { label: 'About us', to: '/' },
      { label: 'Our mission', to: '/' },
      { label: 'Careers', to: '/drive' },
      { label: 'Newsroom', to: '/' },
    ],
  },
  {
    title: 'Ride Options',
    links: [
      { label: 'Book a ride', to: '/book' },
      { label: 'Vayo Go', to: '/book' },
      { label: 'Vayo Comfort', to: '/book' },
      { label: 'Vayo XL', to: '/book' },
    ],
  },
  {
    title: 'Driver Opportunities',
    links: [
      { label: 'Drive with VAYO', to: '/drive' },
      { label: 'Driver requirements', to: '/drive' },
      { label: 'Earnings', to: '/drive' },
      { label: 'Driver sign up', to: '/drive' },
    ],
  },
  {
    title: 'Safety',
    links: [
      { label: 'Safety features', to: '/safety' },
      { label: 'Community guidelines', to: '/safety' },
      { label: 'Responsible riding', to: '/safety' },
    ],
  },
  {
    title: 'Help & Support',
    links: [
      { label: 'Help centre', to: '/help' },
      { label: 'Contact us', to: '/help' },
      { label: 'Privacy policy', to: '/help' },
      { label: 'Terms of service', to: '/help' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="vayo-footer">
      <div className="container">
        <div className="vayo-footer-grid">
          <div className="vayo-footer-brand">
            <Logo />
            <p>
              VAYO is a modern ride-hailing platform built for reliable, affordable, and safe urban
              travel. This is a demonstration project showcasing a transportation startup concept.
            </p>
            <div className="vayo-footer-social">
              <a href="https://github.com/dannwillz" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-40.4s-70 15-84.8-29.8c0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.2 23.6-58.9-2.6-6.5-11.1-33.4 2.6-68.3 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.7 69-27 13.7 34.9 5.2 61.8 2.6 68.3 16 17.7 25.8 31.4 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.4-.3 74.4-.3 82.4 0 6.5 4.6 14.4 17.3 12.1C426.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" /></svg></a>
              <a href="https://www.linkedin.com/in/dannwillz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 448 512" fill="currentColor"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.68-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg></a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="vayo-footer-col">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="vayo-footer-bottom">
          <p>&copy; {new Date().getFullYear()} VAYO Technologies Ltd. All rights reserved. This is a demo project.</p>
        </div>
      </div>

      <style>{`
        .vayo-footer {
          background: var(--bg-off-white);
          border-top: 1px solid var(--border);
          padding: 64px 0 32px;
        }
        .vayo-footer-grid {
          display: grid;
          grid-template-columns: 2fr repeat(5, 1fr);
          gap: 32px;
        }
        .vayo-footer-brand p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin: 16px 0;
          line-height: 1.6;
          max-width: 320px;
        }
        .vayo-footer-social { display: flex; gap: 12px; }
        .vayo-footer-social a {
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%;
          background: var(--bg-white);
          border: 1px solid var(--border);
          color: var(--text-secondary);
          transition: all var(--transition);
        }
        .vayo-footer-social a:hover {
          background: var(--vayo-green);
          color: #002a18;
          border-color: var(--vayo-green);
        }
        .vayo-footer-col h4 {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .vayo-footer-col ul li { margin-bottom: 10px; }
        .vayo-footer-col a {
          font-size: 0.88rem;
          color: var(--text-secondary);
          transition: color var(--transition);
        }
        .vayo-footer-col a:hover { color: var(--vayo-green-darker); }
        .vayo-footer-bottom {
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        @media (max-width: 960px) {
          .vayo-footer-grid { grid-template-columns: 1fr 1fr; }
          .vayo-footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 500px) {
          .vayo-footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
