// Pattern: Singleton
// Resolves RBAC roles and permissions from the active session token
export type Permission =
  | 'MANAGE_USERS'
  | 'VIEW_REPORTS'
  | 'EDIT_TEMPLATES'
  | 'LOAD_FILES'
  | 'GENERATE_DUA'
  | 'DOWNLOAD_DUA';

export class PermissionService {
  private static instance: PermissionService;
  private constructor() {}

  static getInstance(): PermissionService {
    if (!PermissionService.instance) PermissionService.instance = new PermissionService();
    return PermissionService.instance;
  }

  hasPermission(permission: Permission): boolean {
    // TODO: Resolve from JWT claims
    return false;
  }
}
