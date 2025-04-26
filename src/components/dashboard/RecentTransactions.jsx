import React from 'react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Link } from 'react-router-dom';

export const RecentTransactions = ({
  transactions = [],
  className = '',
  ...props
}) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  const getTransactionIcon = (type) => {
    switch(type) {
      case 'loan_disbursement':
        return (
          <div className="flex-shrink-0 rounded-full bg-green-100 p-2">
            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        );
      case 'repayment':
        return (
          <div className="flex-shrink-0 rounded-full bg-blue-100 p-2">
            <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'fee':
        return (
          <div className="flex-shrink-0 rounded-full bg-red-100 p-2">
            <svg className="h-4 w-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="flex-shrink-0 rounded-full bg-gray-100 p-2">
            <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        );
    }
  };
  
  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return <Badge variant="success" size="sm">Completed</Badge>;
      case 'pending':
        return <Badge variant="warning" size="sm">Pending</Badge>;
      case 'failed':
        return <Badge variant="danger" size="sm">Failed</Badge>;
      default:
        return <Badge variant="gray" size="sm">{status}</Badge>;
    }
  };

  return (
    <Card 
      title="Recent Transactions" 
      className={className}
      {...props}
    >
      {transactions.length === 0 ? (
        <div className="py-6 text-center">
          <p className="text-gray-500 text-sm">No recent transactions</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="py-4">
              <div className="flex items-center space-x-4">
                {getTransactionIcon(transaction.type)}
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(transaction.createdAt).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className={`text-sm font-medium ${
                    transaction.type === 'loan_disbursement' ? 'text-green-600' : 'text-gray-900'
                  }`}>
                    {transaction.type === 'loan_disbursement' ? '+' : ''}
                    {formatCurrency(transaction.amount)}
                  </span>
                  
                  {getStatusBadge(transaction.status)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-4 border-t border-gray-200 pt-4">
        <Link
          to="/transactions"
          className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
        >
          View all transactions
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </Card>
  );
};