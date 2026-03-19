/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import { LoadingScreen } from '../components/LoadingScreen';

// Lazy loaded components
const Dashboard = lazy(() => import('../pages/Dashboard').then(module => ({ default: module.Dashboard })));
const Login = lazy(() => import('../pages/Login').then(module => ({ default: module.Login })));
const Unauthorized = lazy(() => import('../pages/Unauthorized').then(module => ({ default: module.Unauthorized })));
const SettingsLayout = lazy(() => import('../pages/Settings/SettingsLayout').then(module => ({ default: module.SettingsLayout })));

const Layout = () => (
  <div className="min-h-screen bg-gray-50 font-sans">
    <Navbar />
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route 
            path="/" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/panel/settings" 
            element={
              <ProtectedRoute module="settings">
                <SettingsLayout />
              </ProtectedRoute>
            } 
          />
          
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
