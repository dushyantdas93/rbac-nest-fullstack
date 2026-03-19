/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../auth/store';
import { Role } from '../auth/types';
import { ShieldCheck, User, Users, ShieldAlert } from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (role: Role) => {
    authActions.login(role);
    navigate('/');
  };

  const roles: { role: Role; label: string; icon: React.ReactNode; color: string; desc: string }[] = [
    { 
      role: 'SUPER_ADMIN', 
      label: 'Super Admin', 
      icon: <ShieldCheck size={24} />, 
      color: 'bg-purple-600', 
      desc: 'Full access to all modules and permissions management.' 
    },
    { 
      role: 'ADMIN', 
      label: 'Admin', 
      icon: <ShieldAlert size={24} />, 
      color: 'bg-indigo-600', 
      desc: 'Access to most modules, limited permissions management.' 
    },
    { 
      role: 'MANAGER', 
      label: 'Manager', 
      icon: <Users size={24} />, 
      color: 'bg-blue-600', 
      desc: 'Access to sales and tags, limited settings access.' 
    },
    { 
      role: 'EMPLOYEE', 
      label: 'Employee', 
      icon: <User size={24} />, 
      color: 'bg-gray-600', 
      desc: 'Read-only access to most modules.' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl text-white font-bold text-3xl mb-4 shadow-lg">
            C
          </div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">CRM RBAC Demo</h1>
          <p className="text-gray-500 mt-2 text-lg">Select a role to explore the permission system.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((item) => (
            <button
              key={item.role}
              onClick={() => handleLogin(item.role)}
              className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all text-left group flex flex-col h-full"
            >
              <div className={`w-12 h-12 ${item.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
              <div className="mt-6 flex items-center text-indigo-600 font-bold text-sm">
                Login as {item.label}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
        
        <p className="mt-12 text-center text-gray-400 text-sm">
          Built with React, TypeScript, TailwindCSS, and Valtio.
        </p>
      </div>
    </div>
  );
};
