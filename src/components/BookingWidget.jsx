import { useState } from 'react'
import { MapPin, Navigation, ArrowUpDown, Users, Clock, Calendar, Search, Car, Check } from 'lucide-react'
import { rideOptions, estimateFare } from '../data/rideOptions'

export default function BookingWidget({ compact = false }) {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [selectedRide, setSelectedRide] = useState('vayo-go')
  const [passengers, setPassengers] = useState(1)
  const [schedule, setSchedule] = useState('now')
  const [showResults, setShowResults] = useState(false)
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
    if (validate()) {
      setShowResults(true)
    }
  }

  // Demo distance/duration — clearly illustrative
  const demoDistance = 7.5
  const demoDuration = 18

  return (
    <div className={`booking-widget ${compact ? 'compact' : ''}`}>
      <form className="booking-form" onSubmit={handleFindRides} noValidate>
        <div className="booking-fields">
          <div className="booking-field-row">
            <div className="booking-field-icon pickup-icon"><span /></div>
            <div className="booking-field-inputs">
              <div className="form-group" style={{ marginBottom: 0 }}>
                <input
                  className={`form-input ${errors.pickup ? 'error' : ''}`}
                  type="text"
                  placeholder="Pickup location"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  aria-label="Pickup location"
                />
                {errors.pickup && <div className="form-error">{errors.pickup}</div>}
              </div>
              <div className="booking-field-divider" />
              <div className="form-group" style={{ marginBottom: 0 }}>
                <input
                  className={`form-input ${errors.destination ? 'error' : ''}`}
                  type="text"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  aria-label="Destination"
                />
                {errors.destination && <div className="form-error">{errors.destination}</div>}
              </div>
            </div>
            <button type="button" className="booking-swap" onClick={swap} aria-label="Swap pickup and destination">
              <ArrowUpDown size={16} />
            </button>
          </div>

          <div className="booking-options">
            <div className="booking-option">
              <Users size={18} className="booking-option-icon" />
              <select
                className="form-select booking-select"
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                aria-label="Passenger count"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} passenger{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div className="booking-option">
              <Clock size={18} className="booking-option-icon" />
              <select
                className="form-select booking-select"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                aria-label="Pickup time"
              >
                <option value="now">Pickup now</option>
                <option value="schedule">Schedule for later</option>
              </select>
            </div>
          </div>

          {schedule === 'schedule' && (
            <div className="booking-schedule slide-down">
              <Calendar size={18} className="booking-option-icon" />
              <input
                type="datetime-local"
                className="form-input"
                aria-label="Scheduled pickup date and time"
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary btn-block btn-lg">
            <Search size={18} /> Find Rides
          </button>
        </div>
      </form>

      {showResults && (
        <div className="booking-results slide-down">
          <div className="booking-results-header">
            <h4>Available rides</h4>
            <span className="tag">
              <MapPin size={12} /> {demoDistance} km · {demoDuration} min (demo)
            </span>
          </div>
          <div className="ride-list">
            {rideOptions.map((ride) => {
              const fare = estimateFare(ride, demoDistance, demoDuration)
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
                  <div className="ride-item-icon">
                    <Car size={28} />
                  </div>
                  <div className="ride-item-info">
                    <div className="ride-item-name">
                      {ride.name}
                      {ride.badge && <span className="ride-badge">{ride.badge}</span>}
                    </div>
                    <div className="ride-item-meta">
                      <Clock size={12} /> {ride.eta} · <Users size={12} /> {ride.capacity} max
                    </div>
                    {tooSmall && <div className="ride-item-note">Too small for your group</div>}
                  </div>
                  <div className="ride-item-fare">
                    {isSelected && <Check size={14} className="ride-check" />}
                    <span className="fare-amount">£{fare}</span>
                    <span className="fare-label">est. fare</span>
                  </div>
                </button>
              )
            })}
          </div>
          <div className="booking-summary">
            <div className="booking-summary-info">
              <strong>{rideOptions.find((r) => r.id === selectedRide)?.name}</strong>
              <span>£{estimateFare(rideOptions.find((r) => r.id === selectedRide), demoDistance, demoDuration)} · {passengers} passenger{passengers > 1 ? 's' : ''}</span>
            </div>
            <button className="btn btn-dark">Confirm Booking</button>
          </div>
          <p className="booking-disclaimer">
            Demonstrative estimates only — no real ride is booked and no payment is processed.
          </p>
        </div>
      )}

      <style>{`
        .booking-widget {
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: var(--shadow-lg);
        }
        .booking-widget.compact { padding: 20px; }
        .booking-field-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }
        .booking-field-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 16px;
          gap: 4px;
        }
        .booking-field-icon span {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--vayo-green);
          box-shadow: 0 0 0 3px var(--vayo-green-light);
        }
        .booking-field-icon span:nth-child(2) {
          background: var(--charcoal);
          box-shadow: 0 0 0 3px var(--border-light);
        }
        .booking-field-inputs {
          flex: 1;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .booking-field-inputs .form-input {
          border: none;
          border-radius: 0;
          padding: 12px 14px;
        }
        .booking-field-inputs .form-input:focus { box-shadow: inset 0 0 0 2px var(--vayo-green); }
        .booking-field-divider {
          height: 1px;
          background: var(--border-light);
        }
        .booking-field-inputs .form-error {
          padding: 4px 14px 6px;
          margin: 0;
        }
        .booking-swap {
          margin-top: 12px;
          background: var(--bg-white);
          border: 1px solid var(--border);
          border-radius: 50%;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition);
          flex-shrink: 0;
        }
        .booking-swap:hover { background: var(--vayo-green-light); color: var(--vayo-green-darker); border-color: var(--vayo-green); }
        .booking-options { display: flex; gap: 12px; margin-bottom: 16px; }
        .booking-option {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0 12px;
        }
        .booking-option-icon { color: var(--text-muted); flex-shrink: 0; }
        .booking-select { border: none; padding: 10px 0; }
        .booking-schedule {
          display: flex; align-items: center; gap: 8px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 0 12px;
          margin-bottom: 16px;
        }
        .booking-schedule .form-input { border: none; padding: 10px 0; }

        .booking-results {
          margin-top: 20px;
          border-top: 1px solid var(--border-light);
          padding-top: 20px;
        }
        .booking-results-header {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 12px;
        }
        .booking-results-header h4 { font-size: 1rem; font-weight: 700; }
        .ride-list { display: flex; flex-direction: column; gap: 8px; }
        .ride-item {
          display: flex; align-items: center; gap: 14px;
          padding: 14px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--bg-white);
          transition: all var(--transition);
          text-align: left;
          width: 100%;
        }
        .ride-item:hover:not(.disabled) { border-color: var(--vayo-green); background: var(--vayo-green-lighter); }
        .ride-item.selected { border-color: var(--vayo-green); background: var(--vayo-green-lighter); box-shadow: 0 0 0 1px var(--vayo-green); }
        .ride-item.disabled { opacity: 0.5; cursor: not-allowed; }
        .ride-item-icon {
          width: 48px; height: 48px;
          background: var(--bg-off-white);
          border-radius: var(--radius-sm);
          display: flex; align-items: center; justify-content: center;
          color: var(--charcoal);
          flex-shrink: 0;
        }
        .ride-item-info { flex: 1; }
        .ride-item-name {
          font-size: 0.95rem; font-weight: 700;
          display: flex; align-items: center; gap: 8px;
        }
        .ride-badge {
          font-size: 0.7rem; font-weight: 600;
          padding: 2px 8px;
          background: var(--vayo-green-light);
          color: var(--vayo-green-darker);
          border-radius: 100px;
        }
        .ride-item-meta {
          font-size: 0.8rem; color: var(--text-muted);
          display: flex; align-items: center; gap: 4px;
          margin-top: 2px;
        }
        .ride-item-note { font-size: 0.75rem; color: var(--error); margin-top: 2px; }
        .ride-item-fare {
          display: flex; flex-direction: column; align-items: flex-end;
          flex-shrink: 0;
        }
        .ride-check { color: var(--vayo-green); margin-bottom: 2px; }
        .fare-amount { font-size: 1.15rem; font-weight: 800; color: var(--text-primary); }
        .fare-label { font-size: 0.72rem; color: var(--text-muted); }
        .booking-summary {
          margin-top: 16px;
          padding: 16px;
          background: var(--bg-off-white);
          border-radius: var(--radius);
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
        }
        .booking-summary-info { display: flex; flex-direction: column; }
        .booking-summary-info strong { font-size: 0.95rem; }
        .booking-summary-info span { font-size: 0.85rem; color: var(--text-secondary); }
        .booking-disclaimer {
          margin-top: 12px;
          font-size: 0.75rem; color: var(--text-muted); text-align: center;
        }

        @media (max-width: 480px) {
          .booking-options { flex-direction: column; }
          .booking-swap { display: none; }
        }
      `}</style>
    </div>
  )
}
