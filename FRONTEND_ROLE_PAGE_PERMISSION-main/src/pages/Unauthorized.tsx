/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldX, ArrowLeft } from 'lucide-react';

export const Unauthorized: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] flex flex-col items-center justify-center p-6 text-center bg-gray-50">
      <div className="w-24 h-24 bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center mb-6 shadow-sm">
        <ShieldX size={48} />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Access Denied</h1>
      <p className="text-gray-500 max-w-md mb-8">
        You don't have the necessary permissions to access this module. Please contact your administrator if you believe this is an error.
      </p>
      <Link 
        to="/" 
        className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-md"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>
    </div>
  );
};
