import React, { useState } from 'react';
import { Card } from '../components/common/Card';
import { LoanApplicationForm } from '../components/loans/LoanApplicationForm';
import { Button } from '../components/common/Button';

export const LoanApplication = () => {
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationData, setApplicationData] = useState(null);

  const handleApplicationSubmit = (data) => {
    // In a real app, you would send this data to your API
    console.log('Application submitted:', data);
    setApplicationData(data);
    setApplicationSubmitted(true);
  };

  const startNewApplication = () => {
    setApplicationSubmitted(false);
    setApplicationData(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Loan Application</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {!applicationSubmitted ? (
          <Card title="Apply for a Loan" subtitle="Please fill out the application form below">
            <LoanApplicationForm onSubmit={handleApplicationSubmit} />
          </Card>
        ) : (
          <Card title="Application Received" className="text-center">
            <div className="py-8">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-4 text-lg font-medium text-gray-900">Your application has been submitted!</h2>
              <p className="mt-2 text-sm text-gray-500">
                We've received your loan application for ${applicationData?.loanAmount}. Our team will review your application 
                and get back to you within 1-2 business days.
              </p>
              
              <div className="mt-8 bg-gray-50 border border-gray-200 rounded-md p-4">
                <h3 className="text-sm font-medium text-gray-900">Application Summary</h3>
                <dl className="mt-2 divide-y divide-gray-200">
                  <div className="flex justify-between py-2">
                    <dt className="text-sm font-medium text-gray-500">Application ID</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      {Math.random().toString(36).substring(2, 10).toUpperCase()}
                    </dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-sm font-medium text-gray-500">Loan Amount</dt>
                    <dd className="text-sm font-medium text-gray-900">${applicationData?.loanAmount}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-sm font-medium text-gray-500">Loan Purpose</dt>
                    <dd className="text-sm font-medium text-gray-900">{applicationData?.loanPurpose}</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-sm font-medium text-gray-500">Loan Term</dt>
                    <dd className="text-sm font-medium text-gray-900">{applicationData?.loanTerm} days</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-sm font-medium text-gray-500">Submitted On</dt>
                    <dd className="text-sm font-medium text-gray-900">{new Date().toLocaleDateString()}</dd>
                  </div>
                </dl>
              </div>
              
              <div className="mt-6">
                <Button variant="primary" onClick={() => window.location.href = '/dashboard'}>
                  Return to Dashboard
                </Button>
                <Button variant="outline" className="ml-4" onClick={startNewApplication}>
                  Start New Application
                </Button>
              </div>
            </div>
          </Card>
        )}

        {!applicationSubmitted && (
          <div className="mt-6">
            <Card title="Need Help?" className="bg-blue-50">
              <div className="p-4">
                <h3 className="text-sm font-medium text-blue-800">Loan Application Tips</h3>
                <ul className="mt-2 list-disc list-inside text-sm text-blue-700 space-y-1">
                  <li>Make sure all information provided is accurate and matches your identification documents</li>
                  <li>Higher credit scores typically qualify for better interest rates</li>
                  <li>The requested loan amount should be within your eligibility range</li>
                  <li>Having a clear purpose for your loan can improve your chances of approval</li>
                  <li>If you need assistance, contact our support team at support@financeapp.com</li>
                </ul>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default LoanApplication;