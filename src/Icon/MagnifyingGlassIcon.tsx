import React from 'react'

interface MagnifyingGlassIconProps {
  size?: number
  color?: string
  className?: string
}

const MagnifyingGlassIcon: React.FC<MagnifyingGlassIconProps> = ({ size = 24, color = '#445F6F', className }) => (
  <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M17.8719 15.0943H16.7878L16.4036 14.7238C17.7484 13.1595 18.558 11.1286 18.558 8.91938C18.558 3.99314 14.5649 0 9.63862 0C4.71238 0 0.719238 3.99314 0.719238 8.91938C0.719238 13.8456 4.71238 17.8388 9.63862 17.8388C11.8479 17.8388 13.8788 17.0292 15.4431 15.6844L15.8136 16.0686V17.1527L22.6746 24L24.7192 21.9554L17.8719 15.0943ZM9.63862 15.0943C6.22181 15.0943 3.46366 12.3362 3.46366 8.91938C3.46366 5.50257 6.22181 2.74443 9.63862 2.74443C13.0554 2.74443 15.8136 5.50257 15.8136 8.91938C15.8136 12.3362 13.0554 15.0943 9.63862 15.0943Z"
      fill={color}
    />
  </svg>
)

export default MagnifyingGlassIcon
