import React from 'react';
interface Props { value: number; }
const ProgressBar: React.FC<Props> = ({ value }) => (
  <div className="ProgressBar-Track"><div className="ProgressBar-Fill" style={{ width: `${value}%` }} /></div>
);
export default ProgressBar;
