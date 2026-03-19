/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface OtherTabsProps {
  tabId: string;
}

export const OtherTabs: React.FC<OtherTabsProps> = ({ tabId }) => {
  const label = tabId.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

  return (
    <div className="p-8 flex flex-col items-center justify-center h-full text-center">
      <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4">
        <ShieldAlert size={32} />
      </div>
      <h1 className="text-2xl font-bold text-gray-900">{label}</h1>
      <p className="text-gray-500 mt-2 max-w-md">
        This module is currently under development. You have the necessary permissions to view this module, but the UI is not yet implemented.
      </p>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200 w-full max-w-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Module Status</span>
          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase">In Progress</span>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-4 bg-gray-200 rounded-full w-full animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
};
