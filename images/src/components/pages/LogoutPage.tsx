import React, { useEffect } from 'react';
import { useAuth } from '../../security/hooks/useAuth';
import MainLayout from '../templates/MainLayout';
const LogoutPage: React.FC = () => {
  const { logout } = useAuth();
  useEffect(() => { logout(); }, []);
  return <MainLayout><p>You have been logged out.</p></MainLayout>;
};
export default LogoutPage;
