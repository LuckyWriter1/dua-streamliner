import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useAuth } from '../../security/hooks/useAuth';

const LoginForm: React.FC = () => {
  const { login, loading } = useAuth();
  const [token, setToken] = useState('');
  return (
    <div className="LoginForm">
      <Input value={token} onChange={setToken} placeholder="One-time token" />
      <Button label="Login" onClick={login} disabled={loading} />
    </div>
  );
};
export default LoginForm;
