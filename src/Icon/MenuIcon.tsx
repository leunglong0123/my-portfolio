import React from 'react'

interface MenuIconProps {
  size?: number
  color?: string
  className?: string
}

const MenuIcon: React.FC<MenuIconProps> = ({ size = 30, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g id="Fether Icons /menu">
      <path
        id="Vector (Stroke)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 15C2.5 14.3096 3.05964 13.75 3.75 13.75H26.25C26.9404 13.75 27.5 14.3096 27.5 15C27.5 15.6904 26.9404 16.25 26.25 16.25H3.75C3.05964 16.25 2.5 15.6904 2.5 15Z"
        fill={color}
      />
      <path
        id="Vector (Stroke)_2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 7.5C2.5 6.80964 3.05964 6.25 3.75 6.25H26.25C26.9404 6.25 27.5 6.80964 27.5 7.5C27.5 8.19036 26.9404 8.75 26.25 8.75H3.75C3.05964 8.75 2.5 8.19036 2.5 7.5Z"
        fill={color}
      />
      <path
        id="Vector (Stroke)_3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 22.5C2.5 21.8096 3.05964 21.25 3.75 21.25H26.25C26.9404 21.25 27.5 21.8096 27.5 22.5C27.5 23.1904 26.9404 23.75 26.25 23.75H3.75C3.05964 23.75 2.5 23.1904 2.5 22.5Z"
        fill={color}
      />
    </g>
  </svg>
)

export default MenuIcon
