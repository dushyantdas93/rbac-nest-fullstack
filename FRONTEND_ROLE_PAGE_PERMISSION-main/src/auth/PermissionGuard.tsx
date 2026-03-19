/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { usePermission } from './usePermission';
import { PermissionModule, CRUDAction } from './types';

interface PermissionGuardProps {
  module: PermissionModule;
  action?: CRUDAction;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const PermissionGuard: React.FC<PermissionGuardProps> = ({
  module,
  action,
  children,
  fallback = null,
}) => {
  const { can, canAccess } = usePermission();

  const hasPermission = action ? can(module, action) : canAccess(module);

  if (!hasPermission) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
