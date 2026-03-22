import React from 'react';
interface Props { label: string; onClick: () => void; variant?: 'primary' | 'secondary'; disabled?: boolean; }
const Button: React.FC<Props> = ({ label, onClick, variant = 'primary', disabled }) => (
  <button className={`Button-${variant}`} onClick={onClick} disabled={disabled}>{label}</button>
);
export default Button;
