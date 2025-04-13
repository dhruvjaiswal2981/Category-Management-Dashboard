import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar: hidden on mobile, visible on md+ */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleToggleSidebar} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar toggleSidebar={handleToggleSidebar} />
        <main className="p-4 overflow-y-auto flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
