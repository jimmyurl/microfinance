import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../hooks/useAuth';

export const Settings = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { user } = useAuth();
    
    const [notificationSettings, setNotificationSettings] = useState({
      emailNotifications: true,
      smsNotifications: true,
      pushNotifications: true,
      loanReminders: true,
      promotionalAlerts: false,
      accountActivity: true
    });
    
    const [securitySettings, setSecuritySettings] = useState({
      twoFactorAuth: false,
      loginAlerts: true,
      saveLoginInfo: false
    });
    
    const handleNotificationChange = (setting) => {
      setNotificationSettings({
        ...notificationSettings,
        [setting]: !notificationSettings[setting]
      });
    };
    
    const handleSecurityChange = (setting) => {
      setSecuritySettings({
        ...securitySettings,
        [setting]: !securitySettings[setting]
      });
    };
    
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Appearance</h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={isDarkMode}
                onChange={toggleTheme}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            {Object.keys(notificationSettings).map((setting) => (
              <div key={setting} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">
                  {setting.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={notificationSettings[setting]}
                    onChange={() => handleNotificationChange(setting)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Security</h2>
          <div className="space-y-4">
            {Object.keys(securitySettings).map((setting) => (
              <div key={setting} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">
                  {setting.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={securitySettings[setting]}
                    onChange={() => handleSecurityChange(setting)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Account</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-gray-700">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Change Password</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Update your password regularly to enhance security</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Change
              </button>
            </div>
            
            <div className="flex justify-between items-center border-b pb-4 border-gray-200 dark:border-gray-700">
              <div>
                <p className="font-medium text-gray-700 dark:text-gray-300">Contact Information</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Update your email address and phone number</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Update
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-red-600 dark:text-red-400">Delete Account</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Permanently delete your account and all data</p>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Settings;