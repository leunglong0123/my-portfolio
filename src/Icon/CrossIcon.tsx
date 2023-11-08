import React from 'react'

interface CrossIconProps {
  size?: number
  color?: string
  className?: string
}

const CrossIcon: React.FC<CrossIconProps> = ({ size = 24, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6L18 18M6 18L18 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CrossIcon
