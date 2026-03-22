import React from 'react';
interface Props { message: string; type: 'error' | 'warning' | 'success'; }
const AlertMessage: React.FC<Props> = ({ message, type }) => (
  <div className={`AlertMessage-${type}`}>{message}</div>
);
export default AlertMessage;
