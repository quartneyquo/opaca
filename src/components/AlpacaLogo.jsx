export default function AlpacaLogo({ size = 36, color = 'currentColor' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Big fluffy sitting body */}
      <ellipse cx="46" cy="86" rx="38" ry="22" />

      {/* Neck - slightly forward-curved, wider at base */}
      <path d="M32 70 C28 54 38 42 56 38 C64 36 68 42 66 54 C62 64 50 70 36 72 Z" />

      {/* Head - small oval, tilted, facing right */}
      <ellipse cx="68" cy="30" rx="15" ry="12" transform="rotate(-8 68 30)" />

      {/* Ear - one pointed ear on top of head */}
      <polygon points="61,20 57,6 72,18" />

      {/* Snout - slight elongation at the front of the head */}
      <ellipse cx="80" cy="34" rx="6" ry="4" transform="rotate(-8 80 34)" />

      {/* Front left paw (sitting, folded underneath) */}
      <ellipse cx="20" cy="103" rx="9" ry="5" />

      {/* Front right paw */}
      <ellipse cx="38" cy="105" rx="9" ry="5" />
    </svg>
  )
}
