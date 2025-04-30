// src/pages/LoanDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LoanDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [loan, setLoan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLoanDetails = async () => {
      setLoading(true);
      try {
        // In a real application, you would fetch this data from your API
        // Example: const response = await api.get(`/loans/${id}`);
        
        // For demo purposes, we'll create sample data
        setTimeout(() => {
          const sampleLoan = {
            id,
            amount: 5000,
            currency: 'USD',
            term: 12, // months
            interestRate: 8.5,
            status: 'active',
            disbursementDate: '2025-03-15',
            nextPaymentDate: '2025-04-15',
            totalPayments: 12,
            paymentsCompleted: 1,
            remainingBalance: 4650,
            monthlyPayment: 433.33,
            purpose: 'Business expansion',
            collateral: 'Business inventory',
            guarantors: [
              { name: 'Jane Smith', relationship: 'Business Partner' }
            ],
            documents: [
              { name: 'Loan Agreement', url: '#', uploadDate: '2025-03-10' },
              { name: 'Business Plan', url: '#', uploadDate: '2025-03-05' }
            ],
            paymentHistory: [
              { 
                id: 'pmt-001', 
                date: '2025-04-15', 
                amount: 433.33, 
                status: 'completed', 
                principal: 350, 
                interest: 83.33 
              }
            ]
          };
          setLoan(sampleLoan);
          setLoading(false);
        }, 800); // Simulate network delay
      } catch (err) {
        console.error('Error fetching loan details:', err);
        setError('Failed to load loan details. Please try again.');
        setLoading(false);
      }
    };

    fetchLoanDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Error</h3>
            <div className="mt-2 text-sm text-red-700">
              <p>{error}</p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => window.location.reload()}
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!loan) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-gray-600">Loan not found</h2>
        <p className="mt-2 text-gray-500">The loan you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
          Return to dashboard
        </Link>
      </div>
    );
  }

  // Calculate loan progress
  const progressPercentage = (loan.paymentsCompleted / loan.totalPayments) * 100;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Loan Details</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Details and information about loan #{loan.id}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          loan.status === 'active' ? 'bg-green-100 text-green-800' :
          loan.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          loan.status === 'completed' ? 'bg-blue-100 text-blue-800' :
          'bg-red-100 text-red-800'
        }`}>
          {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
        </span>
      </div>
      
      {/* Loan progress */}
      <div className="px-4 py-5 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Loan Progress</h4>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{loan.paymentsCompleted} of {loan.totalPayments} payments completed</span>
          <span>{progressPercentage.toFixed(0)}% complete</span>
        </div>
      </div>

      {/* Loan details grid */}
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Loan Amount</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {loan.currency} {loan.amount.toLocaleString()}
            </dd>
          </div>
          <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Interest Rate</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {loan.interestRate}% per annum
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Term</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {loan.term} months
            </dd>
          </div>
          <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Monthly Payment</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {loan.currency} {loan.monthlyPayment.toFixed(2)}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Remaining Balance</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {loan.currency} {loan.remainingBalance.toLocaleString()}
            </dd>
          </div>
          <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Disbursement Date</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {new Date(loan.disbursementDate).toLocaleDateString()}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Next Payment Due</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {new Date(loan.nextPaymentDate).toLocaleDateString()}
            </dd>
          </div>
          <div className="bg-white px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Purpose</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {loan.purpose}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Collateral</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {loan.collateral}
            </dd>
          </div>
        </dl>
      </div>

      {/* Payment History Section */}
      <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Payment History</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">List of all payments made for this loan</p>
      </div>

      <div className="bg-white overflow-hidden">
        {loan.paymentHistory && loan.paymentHistory.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Principal
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Interest
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loan.paymentHistory.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(payment.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {loan.currency} {payment.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {loan.currency} {payment.principal.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {loan.currency} {payment.interest.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        payment.status === 'completed' ? 'bg-green-100 text-green-800' :
                        payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="px-6 py-4 text-center text-sm text-gray-500">
            No payment history available yet.
          </div>
        )}
      </div>

      {/* Documents Section */}
      <div className="px-4 py-5 sm:px-6 border-t border-gray-200">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Loan Documents</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Attached documentation for this loan</p>
      </div>

      <div className="bg-white overflow-hidden border-t border-gray-200">
        {loan.documents && loan.documents.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {loan.documents.map((doc, index) => (
              <li key={index} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-2 text-sm font-medium text-gray-900">{doc.name}</p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="text-sm text-gray-500">Uploaded on {new Date(doc.uploadDate).toLocaleDateString()}</p>
                    <a href={doc.url} className="ml-4 font-medium text-blue-600 hover:text-blue-500">
                      View
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="px-6 py-4 text-center text-sm text-gray-500">
            No documents available for this loan.
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-4 sm:px-6 border-t border-gray-200 flex justify-end space-x-3">
        <Link
          to="/repayment"
          state={{ loanId: loan.id }}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Make Payment
        </Link>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => window.print()}
        >
          Download Statement
        </button>
      </div>
    </div>
  );
};

export default LoanDetails;