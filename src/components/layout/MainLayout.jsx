import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

export const MainLayout = ({
  children,
  showSidebar = true,
  showFooter = true,
  user,
  onLogout,
  className = '',
  ...props
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-gray-100" {...props}>
      <Header 
        user={user} 
        onLogout={onLogout}
      />
      
      <div className="flex">
        {showSidebar && (
          <Sidebar 
            isOpen={sidebarOpen} 
            onClose={() => setSidebarOpen(false)} 
          />
        )}
        
        <div className={`flex-1 ${className}`}>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>
          
          {showFooter && <Footer />}
        </div>
      </div>
    </div>
  );
};