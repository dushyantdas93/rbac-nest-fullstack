/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Plus, Edit2, Trash2, Tag as TagIcon } from 'lucide-react';
import { PermissionGuard } from '../../auth/PermissionGuard';

const TAGS = [
  { id: 1, name: 'High Priority', color: 'bg-red-500' },
  { id: 2, name: 'New Customer', color: 'bg-blue-500' },
  { id: 3, name: 'Follow Up', color: 'bg-amber-500' },
  { id: 4, name: 'Enterprise', color: 'bg-purple-500' },
  { id: 5, name: 'Qualified', color: 'bg-emerald-500' },
];

export const Tags: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tags Management</h1>
          <p className="text-gray-500 mt-1">Categorize your leads and contacts with custom tags.</p>
        </div>
        
        <PermissionGuard module="tags" action="create">
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-sm">
            <Plus size={18} />
            Create Tag
          </button>
        </PermissionGuard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TAGS.map((tag) => (
          <div key={tag.id} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-all group">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${tag.color}`} />
              <div className="flex items-center gap-2">
                <TagIcon size={14} className="text-gray-400" />
                <span className="font-semibold text-gray-900">{tag.name}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <PermissionGuard module="tags" action="update">
                <button className="p-1.5 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-all">
                  <Edit2 size={14} />
                </button>
              </PermissionGuard>
              
              <PermissionGuard module="tags" action="delete">
                <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-all">
                  <Trash2 size={14} />
                </button>
              </PermissionGuard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
