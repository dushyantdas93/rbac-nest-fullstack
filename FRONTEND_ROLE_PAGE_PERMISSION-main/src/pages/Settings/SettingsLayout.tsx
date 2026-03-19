/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { SettingsTabs } from '../../components/SettingsTabs';
import { SalesStages } from './SalesStages';
import { Tags } from './Tags';
import { OtherTabs } from './OtherTabs';
import { motion, AnimatePresence } from 'motion/react';

export const SettingsLayout: React.FC = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'salesStage';

  const renderContent = () => {
    switch (activeTab) {
      case 'salesStage':
        return <SalesStages />;
      case 'tags':
        return <Tags />;
      default:
        return <OtherTabs tabId={activeTab} />;
    }
  };

  return (
    <div className="flex h-[calc(100vh-65px)] overflow-hidden">
      <SettingsTabs />
      <main className="flex-1 overflow-y-auto bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
