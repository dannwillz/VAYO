export default function Logo({ variant = 'dark', size = 'md' }) {
  const textColor = variant === 'light' ? '#fff' : 'var(--text-primary)'
  const textSize = size === 'lg' ? '1.6rem' : '1.25rem'
  const iconSize = size === 'lg' ? 32 : 26

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 800, letterSpacing: '-0.03em' }}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#00d971" />
        <path d="M9 9L16 23L23 9" stroke="#002a18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ color: textColor, fontSize: textSize }}>VAYO</span>
    </span>
  )
}
