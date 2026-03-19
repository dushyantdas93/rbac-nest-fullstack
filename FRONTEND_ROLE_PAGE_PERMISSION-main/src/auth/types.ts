/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CRUDPermissions = {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};

export type Permission = {
  settings?: {
    access: boolean;
  };
  sales_stage?: CRUDPermissions;
  tags?: CRUDPermissions;
  escalation?: CRUDPermissions;
  api_keys?: CRUDPermissions;
  upload_data?: CRUDPermissions;
  configurations?: CRUDPermissions;
  permissions?: CRUDPermissions;
  template?: CRUDPermissions;
  domain_verification?: CRUDPermissions;
  whatsapp?: CRUDPermissions;
};

export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'MANAGER' | 'EMPLOYEE';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  permissions: Permission;
}

export type PermissionModule = keyof Permission;
export type CRUDAction = keyof CRUDPermissions;
