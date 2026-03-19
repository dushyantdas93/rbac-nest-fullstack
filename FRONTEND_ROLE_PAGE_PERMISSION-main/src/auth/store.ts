/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { proxy } from 'valtio';
import { User, Role, Permission } from './types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Helper to generate permissions based on role
const getPermissionsForRole = (role: Role): Permission => {
  const AcessfullCRUD = {access: true, create: true, read: true, update: true, delete: true };
  const fullCRUD = { create: true, read: true, update: true, delete: true };
  const readOnly = { create: false, read: true, update: false, delete: false };
  const managerCRUD = { create: true, read: true, update: true, delete: false };

  switch (role) {
    case 'SUPER_ADMIN':
      return {
        settings: AcessfullCRUD,
        sales_stage: fullCRUD,
        tags: fullCRUD,
        escalation: fullCRUD,
        api_keys: fullCRUD,
        upload_data: fullCRUD,
        configurations: fullCRUD,
        permissions: fullCRUD,
        template: fullCRUD,
        domain_verification: fullCRUD,
        whatsapp: fullCRUD,
      };
    case 'ADMIN':
      return {
            settings: AcessfullCRUD,
        sales_stage: fullCRUD,
        tags: fullCRUD,
        escalation: fullCRUD,
        api_keys: fullCRUD,
        upload_data: fullCRUD,
        configurations: fullCRUD,
        permissions: readOnly,
        template: fullCRUD,
        domain_verification: fullCRUD,
        whatsapp: fullCRUD,
      };
    case 'MANAGER':
      return {
            settings: AcessfullCRUD,
        sales_stage: managerCRUD,
        tags: managerCRUD,
        escalation: managerCRUD,
        api_keys: readOnly,
        upload_data: managerCRUD,
        configurations: readOnly,
        permissions: { ...readOnly, read: false },
        template: managerCRUD,
        domain_verification: readOnly,
        whatsapp: managerCRUD,
      };
    case 'EMPLOYEE':
      return {
        settings: { access: false },
        sales_stage: readOnly,
        tags: readOnly,
        escalation: readOnly,
        api_keys: { ...readOnly, read: false },
        upload_data: { ...readOnly, read: false },
        configurations: { ...readOnly, read: false },
        permissions: { ...readOnly, read: false },
        template: readOnly,
        domain_verification: { ...readOnly, read: false },
        whatsapp: readOnly,
      };
    default:
      return {};
  }
};

export const authStore = proxy<AuthState>({
  user: null,
  isAuthenticated: false,
});

export const authActions = {
  login: (role: Role) => {
    const permissions = getPermissionsForRole(role);
    authStore.user = {
      id: Math.random().toString(36).substr(2, 9),
      name: role.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase()),
      email: `${role.toLowerCase()}@example.com`,
      role,
      permissions,
    };
    authStore.isAuthenticated = true;
  },
  logout: () => {
    authStore.user = null;
    authStore.isAuthenticated = false;
  },
};
