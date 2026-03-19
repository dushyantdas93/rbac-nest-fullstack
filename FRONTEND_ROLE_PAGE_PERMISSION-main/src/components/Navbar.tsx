/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import { authStore, authActions } from '../auth/store';
import { LogOut, User as UserIcon, LayoutDashboard, Settings } from 'lucide-react';
import { PermissionGuard } from '../auth/PermissionGuard';

export const Navbar: React.FC = () => {
  const { user } = useSnapshot(authStore);
  const navigate = useNavigate();

  const handleLogout = () => {
    authActions.logout();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">CRM Pro</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 flex items-center gap-1.5 text-sm font-medium transition-colors">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>

           <PermissionGuard module="settings" action="access">
                       <Link to="/panel/settings" className="text-gray-600 hover:text-indigo-600 flex items-center gap-1.5 text-sm font-medium transition-colors">
            <Settings size={18} />
            Settings
          </Link>
                    </PermissionGuard>

       
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100">
          <div className="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700">
            <UserIcon size={16} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-gray-900 leading-tight">{user.name}</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">{user.role.replace('_', ' ')}</span>
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
};
