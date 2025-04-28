// LoanCard.jsx - Branch-style loan card component
import React from 'react';
import { Button } from '../common/Button';

export const LoanCard = ({
  loanAmount,
  interestRate,
  duration,
  dueDate,
  status = 'pending',
  onApply,
  onRepay,
  className = '',
}) => {
  const getStatusBadge = () => {
    switch(status.toLowerCase()) {
      case 'approved':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Approved</span>;
      case 'pending':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pending</span>;
      case 'rejected':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Rejected</span>;
      case 'active':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Active</span>;
      case 'completed':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">Completed</span>;
      default:
        return null;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {formatCurrency(loanAmount)}
          </h3>
          {getStatusBadge()}
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <p className="text-sm text-gray-500">Interest Rate</p>
            <p className="font-medium">{interestRate}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{duration} days</p>
          </div>
          {dueDate && (
            <div className="col-span-2 mt-2">
              <p className="text-sm text-gray-500">Due Date</p>
              <p className="font-medium">{new Date(dueDate).toLocaleDateString()}</p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          {status === 'pending' && onApply && (
            <Button variant="primary" fullWidth onClick={onApply}>
              Apply Now
            </Button>
          )}
          {status === 'active' && onRepay && (
            <Button variant="success" fullWidth onClick={onRepay}>
              Repay Loan
            </Button>
          )}
          {status === 'approved' && (
            <Button variant="secondary" fullWidth>
              View Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};