// ForgotPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '../../components/common/TextField';
import { Button } from '../../components/common/Button';
import { Alert } from '../../components/common/Alert';
import { useAuth } from '../../hooks/useAuth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { requestPasswordReset } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);
    
    try {
      await requestPasswordReset(email);
      setMessage('Password reset instructions have been sent to your email.');
    } catch (err) {
      setError('Failed to send reset email. Please verify your email address.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="m-auto w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Forgot Password</h1>
          <p className="text-gray-600 mt-2">Enter your email to reset your password</p>
        </div>

        {message && <Alert type="success" message={message} className="mb-4" />}
        {error && <Alert type="error" message={error} className="mb-4" />}

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />

          <Button
            type="submit"
            fullWidth
            loading={loading}
            disabled={loading}
          >
            Send Reset Link
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Remember your password?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;