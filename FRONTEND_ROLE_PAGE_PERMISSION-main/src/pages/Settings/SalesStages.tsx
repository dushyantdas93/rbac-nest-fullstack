/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Plus, Edit2, Trash2, MoreVertical } from 'lucide-react';
import { PermissionGuard } from '../../auth/PermissionGuard';

const STAGES = [
  { id: 1, name: 'Lead Generated', color: 'bg-blue-100 text-blue-700 border-blue-200', count: 45 },
  { id: 2, name: 'Contacted', color: 'bg-indigo-100 text-indigo-700 border-indigo-200', count: 32 },
  { id: 3, name: 'Proposal Sent', color: 'bg-amber-100 text-amber-700 border-amber-200', count: 18 },
  { id: 4, name: 'Negotiation', color: 'bg-purple-100 text-purple-700 border-purple-200', count: 12 },
  { id: 5, name: 'Closed Won', color: 'bg-emerald-100 text-emerald-700 border-emerald-200', count: 85 },
  { id: 6, name: 'Closed Lost', color: 'bg-rose-100 text-rose-700 border-rose-200', count: 24 },
];

export const SalesStages: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Stages</h1>
          <p className="text-gray-500 mt-1">Manage your CRM pipeline stages and workflows.</p>
        </div>
        
        <PermissionGuard module="sales_stage" action="create">
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm">
            <Plus size={18} />
            Add Stage
          </button>
        </PermissionGuard>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Stage Name</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status Badge</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Active Leads</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {STAGES.map((stage) => (
              <tr key={stage.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4 font-medium text-gray-900">{stage.name}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${stage.color}`}>
                    {stage.name.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="text-sm font-medium text-gray-600">{stage.count}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <PermissionGuard module="sales_stage" action="update">
                      <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-all">
                        <Edit2 size={16} />
                      </button>
                    </PermissionGuard>
                    
                    <PermissionGuard module="sales_stage" action="delete">
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all">
                        <Trash2 size={16} />
                      </button>
                    </PermissionGuard>
                    
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-all">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
