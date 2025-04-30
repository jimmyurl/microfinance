// src/context/AuthContext.js
import React, { useState, useEffect, createContext, useContext } from 'react';

// Create an auth context
const AuthContext = createContext(null);

// Provider component that wraps your app and makes auth object available to any
// child component that calls useAuth().
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Add any additional auth state you need here
  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage or a token)
    const checkUserLoggedIn = async () => {
      try {
        // Example check for stored auth token
        const token = localStorage.getItem('authToken');
        if (token) {
          // You might validate the token with your backend here
          // For now, we'll just assume it's valid
          setUser({ token });
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
      } finally {
        setLoading(false);
      }
    };
    
    checkUserLoggedIn();
  }, []);

  // Auth methods
  const login = async (email, password) => {
    // Replace this with your actual authentication logic
    setLoading(true);
    try {
      // Example API call
      // const response = await api.post('/auth/login', { email, password });
      
      // For demo purposes, simulate a successful login if credentials match
      if (email && password) {
        // Replace with actual login logic that validates credentials
        const fakeToken = `auth-token-${Math.random().toString(36).substring(2)}`;
        localStorage.setItem('authToken', fakeToken);
        setUser({ email, token: fakeToken });
        return { success: true };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const signup = async (email, password, name) => {
    setLoading(true);
    try {
      // Replace with your signup logic
      // const response = await api.post('/auth/signup', { email, password, name });
      
      // For demo
      const fakeToken = `auth-token-${Math.random().toString(36).substring(2)}`;
      localStorage.setItem('authToken', fakeToken);
      setUser({ email, name, token: fakeToken });
      return { success: true };
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Return the auth context with the user and auth methods
  const value = {
    user,
    loading,
    login,
    logout,
    signup,
    isAuthenticated: !!user,
  };

  // Use React.createElement instead of JSX
  return React.createElement(AuthContext.Provider, { value }, children);
}

// Custom hook that shorthands the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};