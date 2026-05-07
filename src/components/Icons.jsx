const paths = {
  activity: (
    <>
      <path d="M22 12h-4l-3 8L9 4l-3 8H2" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </>
  ),
  barChart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M8 17V9" />
      <path d="M13 17V5" />
      <path d="M18 17v-6" />
    </>
  ),
  briefcase: (
    <>
      <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
      <path d="M4 7h16v12H4z" />
      <path d="M4 12h16" />
      <path d="M9 12v2h6v-2" />
    </>
  ),
  check: (
    <>
      <path d="M20 6 9 17l-5-5" />
    </>
  ),
  code: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3c3.5-.4 7-1.7 7-7a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.8S18.2 0 15.5 1.5a13.4 13.4 0 0 0-7 0C5.8 0 4.6.4 4.6.4a5 5 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 8c0 5.3 3.5 6.6 7 7a4.8 4.8 0 0 0-1 3v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  mail: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  play: (
    <>
      <path d="m8 5 11 7-11 7z" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 8h.01" />
      <path d="M7 17h.01" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h4a3 3 0 0 1 3 3v6" />
      <path d="M12 18H9a3 3 0 0 1-3-3v-3" />
    </>
  ),
};

export function Icon({ name, className = "h-5 w-5", strokeWidth = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      {paths[name] ?? paths.activity}
    </svg>
  );
}
