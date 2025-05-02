import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Monitor, Smartphone } from 'lucide-react';

const BranchThemeSystem = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isDesktopView, setIsDesktopView] = useState(true);
  
  // Branch app color palette
  const branchColors = {
    primary: isDarkMode ? '#00D775' : '#0ABF53', // Branch green
    background: isDarkMode ? '#121212' : '#FFFFFF',
    card: isDarkMode ? '#1E1E1E' : '#F8F8F8',
    text: isDarkMode ? '#FFFFFF' : '#333333',
    secondaryText: isDarkMode ? '#B0B0B0' : '#6E6E6E',
    border: isDarkMode ? '#333333' : '#E0E0E0',
  };
  
  // Toggle between desktop and mobile layout preview
  const toggleDeviceView = () => {
    setIsDesktopView(prev => !prev);
  };
  
  // Apply Branch app color scheme to the page
  useEffect(() => {
    // Apply colors to CSS variables for global use
    document.documentElement.style.setProperty('--branch-primary', branchColors.primary);
    document.documentElement.style.setProperty('--branch-bg', branchColors.background);
    document.documentElement.style.setProperty('--branch-card', branchColors.card);
    document.documentElement.style.setProperty('--branch-text', branchColors.text);
    document.documentElement.style.setProperty('--branch-secondary-text', branchColors.secondaryText);
    document.documentElement.style.setProperty('--branch-border', branchColors.border);
  }, [isDarkMode]);
  
  return (
    <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Demo page with Branch-like styling */}
      <div className={`min-h-screen ${isDesktopView ? 'px-6 py-4' : 'px-4 py-2'}`} 
           style={{ backgroundColor: branchColors.background, color: branchColors.text }}>
        
        {/* Header with theme controls */}
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg mr-2 flex items-center justify-center" 
                 style={{ backgroundColor: branchColors.primary }}>
              <span className="text-white font-bold">B</span>
            </div>
            <h1 className="text-xl font-bold">Branch</h1>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={toggleDeviceView}
              className="p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
              title={isDesktopView ? "Switch to mobile view" : "Switch to desktop view"}
            >
              {isDesktopView ? <Smartphone size={20} /> : <Monitor size={20} />}
            </button>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
              title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>
        
        {/* Main content - desktop optimized */}
        <main className={isDesktopView ? "grid grid-cols-12 gap-6" : "flex flex-col space-y-4"}>
          {/* Sidebar - only visible in desktop */}
          {isDesktopView && (
            <div className="col-span-3" style={{ color: branchColors.text }}>
              <div className="sticky top-4">
                <nav className="space-y-2">
                  {['Dashboard', 'Transactions', 'Budget', 'Goals', 'Reports', 'Settings'].map(item => (
                    <div 
                      key={item}
                      className="px-4 py-3 rounded-lg flex items-center cursor-pointer transition-colors"
                      style={{ 
                        backgroundColor: item === 'Dashboard' ? branchColors.card : 'transparent',
                        borderLeft: item === 'Dashboard' ? `3px solid ${branchColors.primary}` : 'none',
                      }}
                    >
                      <span className={item === 'Dashboard' ? 'font-medium' : ''}>{item}</span>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          )}
          
          {/* Main content area */}
          <div className={isDesktopView ? "col-span-9" : "w-full"}>
            {/* Welcome card */}
            <div className="p-6 rounded-xl mb-6" 
                 style={{ backgroundColor: branchColors.card, borderRadius: '16px' }}>
              <h2 className="text-2xl font-bold mb-2">Welcome to Branch</h2>
              <p style={{ color: branchColors.secondaryText }} className="mb-4">
                Your financial dashboard is now optimized for desktop viewing
              </p>
              <button className="px-4 py-2 rounded-lg text-white font-medium"
                      style={{ backgroundColor: branchColors.primary }}>
                Explore Features
              </button>
            </div>
            
            {/* Cards grid/list */}
            <div className={isDesktopView ? "grid grid-cols-2 gap-4" : "flex flex-col space-y-4"}>
              {/* Account Summary */}
              <div className="p-4 rounded-xl" style={{ backgroundColor: branchColors.card, borderRadius: '12px' }}>
                <h3 className="text-lg font-medium mb-3">Account Summary</h3>
                <div className="flex justify-between items-center">
                  <span style={{ color: branchColors.secondaryText }}>Total Balance</span>
                  <span className="text-xl font-bold">$12,580.44</span>
                </div>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ 
                    width: '65%', 
                    backgroundColor: branchColors.primary 
                  }}></div>
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="p-4 rounded-xl" style={{ backgroundColor: branchColors.card, borderRadius: '12px' }}>
                <h3 className="text-lg font-medium mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Grocery Store', amount: '-$65.29', date: 'Today' },
                    { name: 'Salary Deposit', amount: '+$2,750.00', date: 'Yesterday' }
                  ].map(item => (
                    <div key={item.name} className="flex justify-between py-2 border-b" 
                         style={{ borderColor: branchColors.border }}>
                      <div>
                        <div>{item.name}</div>
                        <div style={{ color: branchColors.secondaryText }} className="text-sm">{item.date}</div>
                      </div>
                      <div className={item.amount.startsWith('+') ? 'text-green-500' : ''}>
                        {item.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Spending Analysis */}
              <div className="p-4 rounded-xl" style={{ backgroundColor: branchColors.card, borderRadius: '12px' }}>
                <h3 className="text-lg font-medium mb-3">Spending Categories</h3>
                <div className="space-y-3">
                  {[
                    { category: 'Housing', percentage: 35, amount: '$1,225' },
                    { category: 'Food', percentage: 20, amount: '$700' },
                    { category: 'Transport', percentage: 15, amount: '$525' }
                  ].map(item => (
                    <div key={item.category} className="space-y-1">
                      <div className="flex justify-between">
                        <span>{item.category}</span>
                        <span>{item.amount}</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ 
                          width: `${item.percentage}%`, 
                          backgroundColor: branchColors.primary 
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Upcoming Bills */}
              <div className="p-4 rounded-xl" style={{ backgroundColor: branchColors.card, borderRadius: '12px' }}>
                <h3 className="text-lg font-medium mb-3">Upcoming Bills</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Rent', amount: '$1,200', date: 'May 5' },
                    { name: 'Internet', amount: '$75', date: 'May 8' },
                    { name: 'Utilities', amount: '$120', date: 'May 12' }
                  ].map(item => (
                    <div key={item.name} className="flex justify-between py-2 border-b" 
                         style={{ borderColor: branchColors.border }}>
                      <div>
                        <div>{item.name}</div>
                        <div style={{ color: branchColors.secondaryText }} className="text-sm">Due: {item.date}</div>
                      </div>
                      <div>
                        {item.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="mt-12 py-6 text-center" style={{ color: branchColors.secondaryText }}>
          <p>Branch Financial Dashboard - Desktop Version</p>
          <p className="text-sm mt-1">© 2025 Branch Financial</p>
        </footer>
      </div>
    </div>
  );
};

export default BranchThemeSystem;