/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useSnapshot } from 'valtio';
import { authStore } from './store';
import { PermissionModule, CRUDAction } from './types';

export const usePermission = () => {
  const { user } = useSnapshot(authStore);

  const can = (module: PermissionModule, action: CRUDAction): boolean => {
    if (!user) return false;
    const modulePerms = user.permissions[module];
    if (modulePerms && typeof modulePerms === 'object' && 'read' in modulePerms) {
      return !!modulePerms[action];
    }
    return false;
  };

  const canAccess = (module: PermissionModule): boolean => {
    if (!user) return false;
    const modulePerms = user.permissions[module];
    if (!modulePerms) return false;
    
    if (module === 'settings') {
      return !!(modulePerms as { access: boolean }).access;
    }

    // For other modules, if they have any CRUD permission, they can "access" the module (usually read)
    if (typeof modulePerms === 'object' && 'read' in modulePerms) {
      return !!modulePerms.read;
    }

    return false;
  };

  return { can, canAccess, user };
};
