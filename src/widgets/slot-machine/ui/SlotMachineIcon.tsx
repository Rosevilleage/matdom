interface SlotMachineIconProps {
  className?: string;
}

export function SlotMachineIcon({ className = "w-16 h-16" }: SlotMachineIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradients */}
      <defs>
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
        <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
      </defs>
      
      {/* Top Crown */}
      <rect
        x="30"
        y="12"
        width="40"
        height="10"
        rx="5"
        fill="url(#crownGradient)"
      />
      
      {/* Machine Body */}
      <rect
        x="18"
        y="22"
        width="64"
        height="52"
        rx="8"
        fill="url(#bodyGradient)"
      />
      
      {/* Inner Shadow Effect */}
      <rect
        x="18"
        y="22"
        width="64"
        height="8"
        opacity="0.2"
        fill="white"
      />
      
      {/* Display Screen - Yellow/Gold */}
      <rect
        x="25"
        y="30"
        width="50"
        height="30"
        rx="4"
        fill="url(#screenGradient)"
      />
      
      {/* Screen Border */}
      <rect
        x="25"
        y="30"
        width="50"
        height="30"
        rx="4"
        fill="none"
        stroke="#D97706"
        strokeWidth="2"
      />
      
      {/* Slot Symbols - Colorful 7s */}
      <text
        x="33"
        y="51"
        fill="#DC2626"
        fontSize="16"
        fontWeight="bold"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        7
      </text>
      <text
        x="48"
        y="51"
        fill="#DC2626"
        fontSize="16"
        fontWeight="bold"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        7
      </text>
      <text
        x="63"
        y="51"
        fill="#DC2626"
        fontSize="16"
        fontWeight="bold"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        7
      </text>
      
      {/* Lever Ball */}
      <circle
        cx="88"
        cy="38"
        r="6"
        fill="#EF4444"
      />
      <circle
        cx="88"
        cy="38"
        r="6"
        fill="url(#crownGradient)"
        opacity="0.3"
      />
      
      {/* Lever Handle */}
      <rect
        x="86"
        y="38"
        width="4"
        height="22"
        rx="2"
        fill="#4338CA"
      />
      
      {/* Coin Slot */}
      <rect
        x="45"
        y="64"
        width="10"
        height="4"
        rx="2"
        fill="#312E81"
      />
      
      {/* Base Platform */}
      <rect
        x="12"
        y="74"
        width="76"
        height="12"
        rx="6"
        fill="url(#baseGradient)"
      />
      
      {/* Base Highlight */}
      <rect
        x="12"
        y="74"
        width="76"
        height="4"
        rx="6"
        fill="white"
        opacity="0.2"
      />
      
      {/* Coin Tray */}
      <path
        d="M 22 86 L 28 92 L 72 92 L 78 86 Z"
        fill="#6366F1"
      />
      
      {/* Decorative Buttons */}
      <circle cx="32" cy="68" r="2.5" fill="#FBBF24" />
      <circle cx="42" cy="68" r="2.5" fill="#FBBF24" />
      <circle cx="58" cy="68" r="2.5" fill="#FBBF24" />
      <circle cx="68" cy="68" r="2.5" fill="#FBBF24" />
    </svg>
  );
}

