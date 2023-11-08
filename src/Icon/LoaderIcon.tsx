import React from 'react'

interface LoaderIconProps {
  size?: number
  color?: string
  className?: string
}

const LoaderIcon: React.FC<LoaderIconProps> = ({ size = 24, color = 'currentColor', className }) => (
  <svg width={size} className={`${className}`} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C12.5523 1 13 1.44772 13 2V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V2C11 1.44772 11.4477 1 12 1Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 17C12.5523 17 13 17.4477 13 18V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V18C11 17.4477 11.4477 17 12 17Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.22282 4.22307C4.61335 3.83254 5.24651 3.83254 5.63704 4.22307L8.46704 7.05307C8.85756 7.44359 8.85756 8.07676 8.46704 8.46728C8.07651 8.85781 7.44335 8.85781 7.05283 8.46728L4.22282 5.63728C3.8323 5.24676 3.8323 4.61359 4.22282 4.22307Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5329 15.5331C15.9234 15.1426 16.5566 15.1426 16.9471 15.5331L19.7771 18.3631C20.1676 18.7537 20.1676 19.3868 19.7771 19.7773C19.3866 20.1679 18.7534 20.1679 18.3629 19.7773L15.5329 16.9473C15.1424 16.5568 15.1424 15.9237 15.5329 15.5331Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C1 11.4477 1.44772 11 2 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H2C1.44772 13 1 12.5523 1 12Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 12C17 11.4477 17.4477 11 18 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H18C17.4477 13 17 12.5523 17 12Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.46704 15.5331C8.85756 15.9237 8.85756 16.5568 8.46704 16.9473L5.63704 19.7773C5.24651 20.1679 4.61335 20.1679 4.22282 19.7773C3.8323 19.3868 3.8323 18.7537 4.22282 18.3631L7.05283 15.5331C7.44335 15.1426 8.07652 15.1426 8.46704 15.5331Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7771 4.22307C20.1676 4.61359 20.1676 5.24676 19.7771 5.63728L16.9471 8.46728C16.5566 8.85781 15.9234 8.85781 15.5329 8.46728C15.1424 8.07676 15.1424 7.44359 15.5329 7.05307L18.3629 4.22307C18.7534 3.83254 19.3866 3.83254 19.7771 4.22307Z"
      fill={color}
    />
  </svg>
)

export default LoaderIcon
