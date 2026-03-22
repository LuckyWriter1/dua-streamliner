import React from 'react';
interface Props { value: string; onChange: (v: string) => void; placeholder?: string; type?: string; error?: string; }
const Input: React.FC<Props> = ({ value, onChange, placeholder, type = 'text', error }) => (
  <div>
    <input className={error ? 'Input-Error' : 'Input-Default'} type={type} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    {error && <span className="Input-ErrorMessage">{error}</span>}
  </div>
);
export default Input;
