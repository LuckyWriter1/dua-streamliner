// Pattern: Decorator
// Wraps components and conditionally renders based on resolved role
import React from 'react';
import { PermissionService, Permission } from './PermissionService';

interface Props { permission: Permission; children: React.ReactNode; }

const RoleGuard: React.FC<Props> = ({ permission, children }) => {
  const perms = PermissionService.getInstance();
  if (!perms.hasPermission(permission)) return null;
  return <>{children}</>;
};

export default RoleGuard;
