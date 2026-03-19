/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-100 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-500 font-medium animate-pulse">Loading module...</p>
    </div>
  );
};
