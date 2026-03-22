import { PermissionService, Permission } from '../PermissionService';

export function usePermissions() {
  const perms = PermissionService.getInstance();
  return { hasPermission: (p: Permission) => perms.hasPermission(p) };
}
