/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useSnapshot } from 'valtio';
import { authStore } from '../auth/store';
import { 
  Users, DollarSign, TrendingUp, Clock, 
  ArrowUpRight, ArrowDownRight, Calendar
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user } = useSnapshot(authStore);

  const stats = [
    { label: 'Total Revenue', value: '$128,430', change: '+12.5%', icon: <DollarSign className="text-emerald-600" />, trend: 'up' },
    { label: 'Active Leads', value: '1,240', change: '+5.2%', icon: <Users className="text-blue-600" />, trend: 'up' },
    { label: 'Conversion Rate', value: '24.8%', change: '-2.1%', icon: <TrendingUp className="text-indigo-600" />, trend: 'down' },
    { label: 'Avg. Deal Cycle', value: '14 Days', change: '+1.4%', icon: <Clock className="text-amber-600" />, trend: 'up' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-500 mt-1">Here's what's happening with your CRM today.</p>
        </div>
        <div className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">
          <Calendar size={18} className="text-gray-400" />
          <span className="text-sm font-semibold text-gray-700">March 12, 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-50 rounded-xl border border-gray-100">
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                stat.trend === 'up' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
              }`}>
                {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">Recent Activity</h2>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View All</button>
          </div>
          <div className="divide-y divide-gray-50">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="p-6 flex items-center gap-4 hover:bg-gray-50/50 transition-colors">
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold text-sm">
                  JD
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    <span className="font-bold">John Doe</span> moved <span className="font-bold">Acme Corp</span> to <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase">Negotiation</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">2 hours ago</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 className="font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl border border-gray-100 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Users size={18} />
                </div>
                <span className="font-semibold text-sm">Add New Lead</span>
              </div>
              <Plus size={18} className="text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl border border-gray-100 transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <TrendingUp size={18} />
                </div>
                <span className="font-semibold text-sm">Generate Report</span>
              </div>
              <Plus size={18} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Plus = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);
