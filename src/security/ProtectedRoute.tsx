// Pattern: Proxy
// Intercepts route access and delegates to AuthService before rendering
import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthService } from './AuthService';

interface Props { children: React.ReactNode; }

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const auth = AuthService.getInstance();
  if (!auth.isAuthenticated()) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

export default ProtectedRoute;
