export const rideOptions = [
  {
    id: 'vayo-go',
    name: 'Vayo Go',
    description: 'Affordable everyday rides for getting around the city.',
    capacity: 4,
    eta: '3 min',
    baseFare: 2.50,
    perKm: 0.85,
    perMin: 0.15,
    image: 'https://images.pexels.com/photos/35628774/pexels-photo-35628774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Most popular',
  },
  {
    id: 'vayo-comfort',
    name: 'Vayo Comfort',
    description: 'Extra comfort, newer cars, and more legroom for a smoother ride.',
    capacity: 4,
    eta: '5 min',
    baseFare: 4.00,
    perKm: 1.20,
    perMin: 0.22,
    image: 'https://images.pexels.com/photos/32281845/pexels-photo-32281845.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'vayo-xl',
    name: 'Vayo XL',
    description: 'Larger vehicles for groups up to six and extra luggage space.',
    capacity: 6,
    eta: '7 min',
    baseFare: 5.50,
    perKm: 1.60,
    perMin: 0.30,
    image: 'https://images.pexels.com/photos/27497571/pexels-photo-27497571.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
]

// Demo-only fare estimator. Not connected to a real pricing engine.
export function estimateFare(ride, distanceKm, durationMin) {
  if (!ride || !distanceKm || !durationMin) return ride ? ride.baseFare : 0
  return (ride.baseFare + ride.perKm * distanceKm + ride.perMin * durationMin).toFixed(2)
}
