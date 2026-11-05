import { useState } from 'react'
import { Car, Check, User, Mail, Phone, MapPin, Loader } from 'lucide-react'
import PageHeader from '../components/PageHeader'

export default function DriverRegistration() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '',
    vehicleMake: '', vehicleModel: '', vehicleYear: '', licenceNumber: '',
    agree: false,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Enter your full name'
    if (!form.email.trim()) e.email = 'Enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.phone.trim()) e.phone = 'Enter your phone number'
    else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.city.trim()) e.city = 'Select your city'
    if (!form.vehicleMake.trim()) e.vehicleMake = 'Enter your vehicle make'
    if (!form.vehicleModel.trim()) e.vehicleModel = 'Enter your vehicle model'
    if (!form.vehicleYear.trim()) e.vehicleYear = 'Enter the vehicle year'
    else if (Number(form.vehicleYear) < 2005 || Number(form.vehicleYear) > new Date().getFullYear() + 1)
      e.vehicleYear = `Year must be between 2005 and ${new Date().getFullYear() + 1}`
    if (!form.licenceNumber.trim()) e.licenceNumber = 'Enter your licence number'
    if (!form.agree) e.agree = 'You must agree to the terms to continue'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1500)
  }

  if (status === 'success') {
    return (
      <>
        <PageHeader tag="Drive with VAYO" title="Application received" />
        <section className="section" style={{ paddingTop: 24 }}>
          <div className="container">
            <div className="card" style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', padding: 48 }}>
              <div className="confirmed-icon" style={{ margin: '0 auto 20px' }}>
                <Check size={32} />
              </div>
              <h2 style={{ marginBottom: 12 }}>Thank you, {form.name.split(' ')[0]}!</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 8 }}>
                Your driver application has been received. We will review your details and get back to
                you at <strong>{form.email}</strong>.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 16 }}>
                This is a demonstration form — no real application has been submitted and no data is stored.
              </p>
              <button
                className="btn btn-secondary"
                style={{ marginTop: 24 }}
                onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', city: '', vehicleMake: '', vehicleModel: '', vehicleYear: '', licenceNumber: '', agree: false }) }}
              >
                Submit another application
              </button>
            </div>
          </div>
        </section>
        <style>{`
          .confirmed-icon {
            width: 56px; height: 56px;
            border-radius: 50%;
            background: var(--vayo-green);
            color: #002a18;
            display: flex; align-items: center; justify-content: center;
          }
        `}</style>
      </>
    )
  }

  return (
    <>
      <PageHeader
        tag="Drive with VAYO"
        title="Become a VAYO driver"
        subtitle="Fill in your details below to start your driver application. It only takes a few minutes."
      />
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container drive-layout">
          <form className="card drive-form" onSubmit={handleSubmit} noValidate>
            <h3 className="drive-form-section-title">Personal information</h3>
            <div className="drive-form-grid">
              <div className="form-group">
                <label className="form-label">Full name</label>
                <div className="input-with-icon">
                  <User size={18} />
                  <input
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </div>
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Email address</label>
                <div className="input-with-icon">
                  <Mail size={18} />
                  <input
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    type="email"
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Phone number</label>
                <div className="input-with-icon">
                  <Phone size={18} />
                  <input
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    type="tel"
                    placeholder="+44 7700 900123"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>
                {errors.phone && <div className="form-error">{errors.phone}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">City</label>
                <div className="input-with-icon">
                  <MapPin size={18} />
                  <select
                    className={`form-select ${errors.city ? 'error' : ''}`}
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                  >
                    <option value="">Select your city</option>
                    <option value="London">London</option>
                    <option value="Manchester">Manchester</option>
                    <option value="Birmingham">Birmingham</option>
                    <option value="Leeds">Leeds</option>
                    <option value="Bristol">Bristol</option>
                    <option value="Edinburgh">Edinburgh</option>
                  </select>
                </div>
                {errors.city && <div className="form-error">{errors.city}</div>}
              </div>
            </div>

            <h3 className="drive-form-section-title">Vehicle details</h3>
            <div className="drive-form-grid">
              <div className="form-group">
                <label className="form-label">Vehicle make</label>
                <input
                  className={`form-input ${errors.vehicleMake ? 'error' : ''}`}
                  type="text"
                  placeholder="Toyota"
                  value={form.vehicleMake}
                  onChange={(e) => update('vehicleMake', e.target.value)}
                />
                {errors.vehicleMake && <div className="form-error">{errors.vehicleMake}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Vehicle model</label>
                <input
                  className={`form-input ${errors.vehicleModel ? 'error' : ''}`}
                  type="text"
                  placeholder="Corolla"
                  value={form.vehicleModel}
                  onChange={(e) => update('vehicleModel', e.target.value)}
                />
                {errors.vehicleModel && <div className="form-error">{errors.vehicleModel}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Vehicle year</label>
                <input
                  className={`form-input ${errors.vehicleYear ? 'error' : ''}`}
                  type="number"
                  placeholder="2019"
                  value={form.vehicleYear}
                  onChange={(e) => update('vehicleYear', e.target.value)}
                />
                {errors.vehicleYear && <div className="form-error">{errors.vehicleYear}</div>}
              </div>
              <div className="form-group">
                <label className="form-label">Driving licence number</label>
                <input
                  className={`form-input ${errors.licenceNumber ? 'error' : ''}`}
                  type="text"
                  placeholder="SMITH 802034 AB99C"
                  value={form.licenceNumber}
                  onChange={(e) => update('licenceNumber', e.target.value)}
                />
                {errors.licenceNumber && <div className="form-error">{errors.licenceNumber}</div>}
              </div>
            </div>

            <div className="form-group">
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => update('agree', e.target.checked)}
                />
                <span>I confirm the information provided is accurate and I agree to VAYO's driver terms and privacy policy.</span>
              </label>
              {errors.agree && <div className="form-error">{errors.agree}</div>}
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={status === 'loading'}>
              {status === 'loading' ? <><Loader size={18} className="spin" /> Submitting...</> : <>Submit application</>}
            </button>
            <p className="booking-disclaimer" style={{ marginTop: 16 }}>
              Demonstration form only. No real application is submitted and no personal data is stored.
            </p>
          </form>

          <aside className="drive-sidebar">
            <div className="card drive-benefits-card">
              <Car size={28} style={{ color: 'var(--vayo-green)', marginBottom: 16 }} />
              <h3>Why drive with VAYO?</h3>
              <ul>
                <li><Check size={16} /> Flexible hours — drive when you want</li>
                <li><Check size={16} /> Transparent weekly payouts</li>
                <li><Check size={16} /> Higher fares during peak times</li>
                <li><Check size={16} /> Use your own vehicle</li>
                <li><Check size={16} /> In-app safety features for drivers</li>
                <li><Check size={16} /> Support team available 7 days a week</li>
              </ul>
              <div className="drive-earnings-example">
                <small>Example earnings</small>
                <strong>£428<span>/week</span></strong>
                <span>Based on 28 hours online · illustrative only</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .drive-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 24px;
          align-items: start;
        }
        .drive-form { padding: 32px; }
        .drive-form-section-title {
          font-size: 1rem; font-weight: 700;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-light);
        }
        .drive-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 24px;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-with-icon svg {
          position: absolute;
          left: 14px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .input-with-icon .form-input,
        .input-with-icon .form-select {
          padding-left: 42px;
        }
        .checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.88rem;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .checkbox-row input { margin-top: 3px; width: 18px; height: 18px; accent-color: var(--vayo-green); flex-shrink: 0; }
        .spin { animation: pulse 1s infinite; }

        .drive-sidebar { position: sticky; top: calc(var(--nav-height) + 24px); }
        .drive-benefits-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; }
        .drive-benefits-card ul { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
        .drive-benefits-card li {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.88rem; color: var(--text-secondary);
        }
        .drive-benefits-card li svg { color: var(--vayo-green); flex-shrink: 0; }
        .drive-earnings-example {
          padding: 16px;
          background: var(--vayo-green-lighter);
          border-radius: var(--radius-sm);
          display: flex; flex-direction: column; gap: 2px;
        }
        .drive-earnings-example small { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
        .drive-earnings-example strong { font-size: 1.8rem; font-weight: 800; color: var(--text-primary); }
        .drive-earnings-example strong span { font-size: 0.85rem; font-weight: 500; color: var(--text-muted); }
        .drive-earnings-example span:last-child { font-size: 0.75rem; color: var(--text-muted); }

        @media (max-width: 860px) {
          .drive-layout { grid-template-columns: 1fr; }
          .drive-sidebar { position: static; }
        }
        @media (max-width: 500px) {
          .drive-form-grid { grid-template-columns: 1fr; }
          .drive-form { padding: 20px; }
        }
      `}</style>
    </>
  )
}
