import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import  LoanProvider from './context/LoanContext';
import { MainLayout} from './components/layout/MainLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import Verification from './pages/auth/Verification';
import { Dashboard } from './pages/Dashboard';
import { LoanApplication } from './pages/LoanApplication';
import LoanDetails from '/src/pages/LoanDetails.jsx';
import { Repayment } from './pages/Repayment';
import { TransactionHistory } from './pages/TransactionHistory';
import  Profile  from './pages/Profile';
import { Settings } from './pages/Settings';
import { useAuth } from './hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <LoanProvider>
          <Router>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/verification" element={<Verification />} />
              
              {/* Protected Routes with Layout */}
              <Route path="/" element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Dashboard />} />
                <Route path="apply" element={<LoanApplication />} />
                <Route path="loans/:id" element={<LoanDetails />} />
                <Route path="repayment" element={<Repayment />} />
                <Route path="transactions" element={<TransactionHistory />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </LoanProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;