import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navigation = ({
  onSidebarToggle,
  className = '',
  ...props
}) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Loan Approved',
      message: 'Your loan application has been approved!',
      read: false,
      date: new Date()
    },
    {
      id: 2,
      title: 'Payment Due',
      message: 'Your loan payment is due in 3 days',
      read: true,
      date: new Date(Date.now() - 86400000)
    }
  ]);
  
  const [showNotifications, setShowNotifications] = useState(false);
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAsRead = (id) => {
    setNotifications(
      notifications.map(n => 
        n.id === id ? { ...n, read: true } : n
      )
    );
  };
  
  return (
    <div className={`bg-white shadow-sm z-10 ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <button
                className="p-2 rounded-md text-gray-400 lg:hidden"
                onClick={onSidebarToggle}
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </button>
              
              <Link to="/" className="ml-4 lg:ml-0">
                <span className="sr-only">FinanceApp</span>
                <span className="text-blue-600 font-bold text-xl">FinanceApp</span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="relative">
              <button
                className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={toggleNotifications}
              >
                <span className="sr-only">View notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 transform translate-x-1/2 -translate-y-1/2"></span>
                )}
              </button>
              
              {showNotifications && (
                <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-medium text-gray-700">Notifications</h3>
                  </div>
                  
                  {notifications.length === 0 ? (
                    <p className="px-4 py-2 text-sm text-gray-500">No notifications</p>
                  ) : (
                    <div className="max-h-60 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id}
                          className={`px-4 py-3 border-b border-gray-100 ${notification.read ? '' : 'bg-blue-50'}`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                              <p className="text-sm text-gray-500">{notification.message}</p>
                              <p className="mt-1 text-xs text-gray-400">
                                {new Date(notification.date).toLocaleDateString()}
                              </p>
                            </div>
                            {!notification.read && (
                              <button
                                className="text-xs text-blue-600 hover:text-blue-800"
                                onClick={() => markAsRead(notification.id)}
                              >
                                Mark read
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Link 
                    to="/notifications"
                    className="block px-4 py-2 text-center text-xs font-medium text-blue-600 border-t border-gray-100"
                  >
                    View all notifications
                  </Link>
                </div>
              )}
            </div>
            
            <div className="ml-4 relative flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                U
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};