import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonMailto extends React.HTMLProps<HTMLAnchorElement> {
  mailto: string;
  label: string;
}
const ButtonMailto: React.FC<ButtonMailto> = ({ mailto, label, ...props }) => {
  const { className } = props;
  return (
    <Link
      className={className}
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
