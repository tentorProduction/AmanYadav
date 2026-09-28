export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="Aman — home" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.5 40.5Q18.5 24 25 7.5" />
      <path d="M25 7.5Q31 23 35 40.5" />
      <path d="M17.5 29.5Q24.5 27.6 31.5 28.8" />
      <circle cx="38.5" cy="10.5" r="2.4" className="logo-dot" fill="var(--lime)" stroke="var(--black)" strokeWidth="1.6" />
    </svg>
  );
}
