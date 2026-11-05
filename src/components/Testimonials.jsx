import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="section bg-off-white">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title center-title">What riders are saying</h2>
          <p className="section-subtitle center-title">
            Sample testimonials for demonstration. These do not represent verified customer reviews.
          </p>
        </div>
        <div className="testimonials-grid stagger">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <Quote size={24} className="testimonial-quote-icon" />
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < t.rating ? '#f5a623' : 'none'}
                    color={i < t.rating ? '#f5a623' : '#d1d5db'}
                  />
                ))}
              </div>
              <p className="testimonial-text">"{t.review}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .testimonial-card {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 28px;
          position: relative;
          transition: all var(--transition);
        }
        .testimonial-card:hover { border-color: var(--vayo-green); box-shadow: var(--shadow-md); }
        .testimonial-quote-icon {
          color: var(--vayo-green);
          opacity: 0.3;
          margin-bottom: 12px;
        }
        .testimonial-stars { display: flex; gap: 2px; margin-bottom: 14px; }
        .testimonial-text {
          font-size: 0.92rem; color: var(--text-primary); line-height: 1.6;
          margin-bottom: 20px;
        }
        .testimonial-author { display: flex; align-items: center; gap: 12px; }
        .testimonial-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--vayo-green);
          color: #002a18;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem; font-weight: 700;
        }
        .testimonial-author strong { display: block; font-size: 0.9rem; }
        .testimonial-author span { font-size: 0.8rem; color: var(--text-muted); }

        @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
