import { useState } from 'react'
import { MapPin, Navigation, ArrowUpDown, Users, Clock, Calendar, Search, Car, Check, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { rideOptions, estimateFare } from '../data/rideOptions'

export default function BookRide() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [selectedRide, setSelectedRide] = useState('vayo-go')
  const [passengers, setPassengers] = useState(1)
  const [schedule, setSchedule] = useState('now')
  const [showResults, setShowResults] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [errors, setErrors] = useState({})

  const swap = () => {
    setPickup(destination)
    setDestination(pickup)
  }

  const validate = () => {
    const e = {}
    if (!pickup.trim()) e.pickup = 'Enter a pickup location'
    if (!destination.trim()) e.destination = 'Enter a destination'
    if (pickup.trim() && destination.trim() && pickup.trim() === destination.trim())
      e.destination = 'Pickup and destination must be different'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleFindRides = (ev) => {
    ev.preventDefault()
    setConfirmed(false)
    if (validate()) setShowResults(true)
  }

  const handleConfirm = () => setConfirmed(true)

  const demoDistance = 7.5
  const demoDuration = 18
  const selectedRideData = rideOptions.find((r) => r.id === selectedRide)
  const fare = estimateFare(selectedRideData, demoDistance, demoDuration)

  return (
    <>
      <PageHeader
        tag="Book a ride"
        title="Find your ride"
        subtitle="Enter your pickup and destination to see available ride options with upfront fares."
      />
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container bookride-layout">
          <div className="bookride-main">
            <form className="card bookride-form" onSubmit={handleFindRides} noValidate>
              <div className="booking-field-row">
                <div className="booking-field-icon pickup-icon"><span /><span /></div>
                <div className="booking-field-inputs">
                  <input
                    className={`form-input ${errors.pickup ? 'error' : ''}`}
                    type="text"
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => { setPickup(e.target.value); setShowResults(false); setConfirmed(false) }}
                    aria-label="Pickup location"
                  />
                  {errors.pickup && <div className="form-error" style={{ padding: '4px 14px' }}>{errors.pickup}</div>}
                  <div className="booking-field-divider" />
                  <input
                    className={`form-input ${errors.destination ? 'error' : ''}`}
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => { setDestination(e.target.value); setShowResults(false); setConfirmed(false) }}
                    aria-label="Destination"
                  />
                  {errors.destination && <div className="form-error" style={{ padding: '4px 14px' }}>{errors.destination}</div>}
                </div>
                <button type="button" className="booking-swap" onClick={swap} aria-label="Swap pickup and destination">
                  <ArrowUpDown size={16} />
                </button>
              </div>

              <div className="booking-options">
                <div className="booking-option">
                  <Users size={18} className="booking-option-icon" />
                  <select className="form-select booking-select" value={passengers} onChange={(e) => setPassengers(Number(e.target.value))} aria-label="Passenger count">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} passenger{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div className="booking-option">
                  <Clock size={18} className="booking-option-icon" />
                  <select className="form-select booking-select" value={schedule} onChange={(e) => setSchedule(e.target.value)} aria-label="Pickup time">
                    <option value="now">Pickup now</option>
                    <option value="schedule">Schedule for later</option>
                  </select>
                </div>
              </div>

              {schedule === 'schedule' && (
                <div className="booking-schedule slide-down">
                  <Calendar size={18} className="booking-option-icon" />
                  <input type="datetime-local" className="form-input" aria-label="Scheduled pickup date and time" />
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-block btn-lg">
                <Search size={18} /> Find Rides
              </button>
            </form>

            {showResults && !confirmed && (
              <div className="card bookride-results slide-down" style={{ marginTop: 24 }}>
                <h3 style={{ marginBottom: 4 }}>Available rides</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 20 }}>
                  <MapPin size={12} style={{ display: 'inline' }} /> {pickup} → {destination} · {demoDistance} km · {demoDuration} min (demo data)
                </p>
                <div className="ride-list">
                  {rideOptions.map((ride) => {
                    const rideFare = estimateFare(ride, demoDistance, demoDuration)
                    const isSelected = selectedRide === ride.id
                    const tooSmall = passengers > ride.capacity
                    return (
                      <button
                        key={ride.id}
                        type="button"
                        className={`ride-item ${isSelected ? 'selected' : ''} ${tooSmall ? 'disabled' : ''}`}
                        onClick={() => !tooSmall && setSelectedRide(ride.id)}
                        disabled={tooSmall}
                      >
                        <div className="ride-item-icon"><Car size={28} /></div>
                        <div className="ride-item-info">
                          <div className="ride-item-name">{ride.name}{ride.badge && <span className="ride-badge">{ride.badge}</span>}</div>
                          <div className="ride-item-meta"><Clock size={12} /> {ride.eta} · <Users size={12} /> {ride.capacity} max</div>
                          {tooSmall && <div className="ride-item-note">Too small for your group</div>}
                        </div>
                        <div className="ride-item-fare">
                          {isSelected && <Check size={14} className="ride-check" />}
                          <span className="fare-amount">£{rideFare}</span>
                          <span className="fare-label">est. fare</span>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {confirmed && (
              <div className="card bookride-confirmed slide-down" style={{ marginTop: 24 }}>
                <div className="confirmed-icon"><Check size={32} /></div>
                <h3>Ride requested!</h3>
                <p>Your <strong>{selectedRideData.name}</strong> will pick you up at <strong>{pickup}</strong> and take you to <strong>{destination}</strong>.</p>
                <div className="confirmed-details">
                  <div><span>Ride</span><strong>{selectedRideData.name}</strong></div>
                  <div><span>Passengers</span><strong>{passengers}</strong></div>
                  <div><span>Estimated fare</span><strong>£{fare}</strong></div>
                  <div><span>ETA</span><strong>{selectedRideData.eta}</strong></div>
                  <div><span>Distance</span><strong>{demoDistance} km</strong></div>
                  <div><span>Duration</span><strong>~{demoDuration} min</strong></div>
                </div>
                <p className="booking-disclaimer" style={{ marginTop: 16 }}>
                  This is a demonstration booking. No real ride has been dispatched and no payment has been processed.
                </p>
                <Link to="/" className="btn btn-secondary" style={{ marginTop: 16 }}>
                  <ArrowLeft size={16} /> Back to home
                </Link>
              </div>
            )}
          </div>

          <aside className="bookride-summary-card">
            <h3>Booking summary</h3>
            {!showResults ? (
              <div className="summary-empty">
                <Navigation size={32} />
                <p>Enter your trip details and find rides to see a summary here.</p>
              </div>
            ) : (
              <div className="summary-content fade-in">
                <div className="summary-route">
                  <div className="summary-route-item">
                    <span className="summary-dot green" />
                    <div><small>Pickup</small><strong>{pickup}</strong></div>
                  </div>
                  <div className="summary-route-line" />
                  <div className="summary-route-item">
                    <span className="summary-dot dark" />
                    <div><small>Destination</small><strong>{destination}</strong></div>
                  </div>
                </div>
                <div className="summary-details">
                  <div><span>Selected ride</span><strong>{selectedRideData.name}</strong></div>
                  <div><span>Passengers</span><strong>{passengers}</strong></div>
                  <div><span>Estimated fare</span><strong className="summary-fare">£{fare}</strong></div>
                  <div><span>Pickup in</span><strong>{selectedRideData.eta}</strong></div>
                </div>
                {showResults && !confirmed && (
                  <button className="btn btn-primary btn-block btn-lg" onClick={handleConfirm}>
                    Confirm Booking
                  </button>
                )}
                <p className="booking-disclaimer">Demo estimates only — no real booking or payment.</p>
              </div>
            )}
          </aside>
        </div>
      </section>

      <style>{`
        .bookride-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 24px;
          align-items: start;
        }
        .bookride-form { padding: 24px; }
        .summary-empty {
          text-align: center;
          padding: 40px 20px;
          color: var(--text-muted);
        }
        .summary-empty svg { margin-bottom: 12px; opacity: 0.4; }
        .summary-empty p { font-size: 0.88rem; line-height: 1.5; }
        .summary-content { display: flex; flex-direction: column; gap: 20px; }
        .summary-route { display: flex; flex-direction: column; gap: 0; }
        .summary-route-item { display: flex; gap: 12px; align-items: flex-start; }
        .summary-route-item small { font-size: 0.75rem; color: var(--text-muted); display: block; }
        .summary-route-item strong { font-size: 0.9rem; }
        .summary-dot { width: 10px; height: 10px; border-radius: 50%; margin-top: 5px; flex-shrink: 0; }
        .summary-dot.green { background: var(--vayo-green); box-shadow: 0 0 0 3px var(--vayo-green-light); }
        .summary-dot.dark { background: var(--charcoal); box-shadow: 0 0 0 3px var(--border-light); }
        .summary-route-line { width: 2px; height: 24px; background: var(--border); margin-left: 4px; }
        .summary-details { display: flex; flex-direction: column; gap: 10px; }
        .summary-details div { display: flex; justify-content: space-between; font-size: 0.88rem; }
        .summary-details span { color: var(--text-secondary); }
        .summary-fare { font-size: 1.2rem; font-weight: 800; color: var(--vayo-green-darker); }
        .bookride-summary-card { position: sticky; top: calc(var(--nav-height) + 24px); }
        .bookride-summary-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; }

        .confirmed-icon {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: var(--vayo-green);
          color: #002a18;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .confirmed-details {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          margin-top: 20px;
        }
        .confirmed-details div {
          display: flex; flex-direction: column;
          padding: 12px;
          background: var(--bg-off-white);
          border-radius: var(--radius-sm);
        }
        .confirmed-details span { font-size: 0.75rem; color: var(--text-muted); }
        .confirmed-details strong { font-size: 0.95rem; }

        @media (max-width: 860px) {
          .bookride-layout { grid-template-columns: 1fr; }
          .bookride-summary-card { position: static; }
          .confirmed-details { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .booking-options { flex-direction: column; }
        }
      `}</style>
    </>
  )
}
