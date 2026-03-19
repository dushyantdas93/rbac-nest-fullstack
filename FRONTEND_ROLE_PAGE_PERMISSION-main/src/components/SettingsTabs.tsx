/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePermission } from '../auth/usePermission';
import { PermissionModule } from '../auth/types';
import { 
  Layers, Tag, AlertCircle, Key, Upload, Settings as SettingsIcon, 
  ShieldCheck, FileText, Globe, MessageSquare 
} from 'lucide-react';

interface TabConfig {
  id: string;
  label: string;
  module: PermissionModule;
  icon: React.ReactNode;
}

const TABS: TabConfig[] = [
  { id: 'salesStage', label: 'Sales Stages', module: 'sales_stage', icon: <Layers size={18} /> },
  { id: 'tags', label: 'Tags', module: 'tags', icon: <Tag size={18} /> },
  { id: 'escalation', label: 'Escalation', module: 'escalation', icon: <AlertCircle size={18} /> },
  { id: 'apiKeys', label: 'API Keys', module: 'api_keys', icon: <Key size={18} /> },
  { id: 'uploadData', label: 'Upload Data', module: 'upload_data', icon: <Upload size={18} /> },
  { id: 'configurations', label: 'Configurations', module: 'configurations', icon: <SettingsIcon size={18} /> },
  { id: 'permissions', label: 'Permissions', module: 'permissions', icon: <ShieldCheck size={18} /> },
  { id: 'template', label: 'Template', module: 'template', icon: <FileText size={18} /> },
  { id: 'domainVerification', label: 'Domain Verification', module: 'domain_verification', icon: <Globe size={18} /> },
  { id: 'whatsapp', label: 'WhatsApp', module: 'whatsapp', icon: <MessageSquare size={18} /> },
];

export const SettingsTabs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { canAccess } = usePermission();
  
  const activeTab = searchParams.get('tab') || 'salesStage';

  const visibleTabs = TABS.filter(tab => canAccess(tab.module));

  return (
    <div className="flex flex-col w-64 border-r border-gray-200 h-[calc(100vh-65px)] bg-gray-50/50">
      <div className="p-4 border-b border-gray-200 bg-white">
        <h2 className="font-bold text-gray-900 flex items-center gap-2">
          <SettingsIcon size={20} className="text-indigo-600" />
          Settings Panel
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {visibleTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSearchParams({ tab: tab.id })}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all ${
              activeTab === tab.id
                ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <span className={`${activeTab === tab.id ? 'text-indigo-600' : 'text-gray-400'}`}>
              {tab.icon}
            </span>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
