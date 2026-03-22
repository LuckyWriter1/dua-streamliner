import React from 'react';
interface Props { status: 'high' | 'medium' | 'low'; label: string; }
const StatusBadge: React.FC<Props> = ({ status, label }) => (
  <span className={`StatusBadge-${status}`}>{label}</span>
);
export default StatusBadge;
