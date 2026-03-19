/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { usePermission } from './usePermission';
import { PermissionModule } from './types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  module?: PermissionModule;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, module }) => {
  const { canAccess, user } = usePermission();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (module && !canAccess(module)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
