import React from 'react';
import { Card } from '../common/Card';
import { Progress } from '../common/Progress';
import { Badge } from '../common/Badge';

export const LoanSummary = ({
  activeLoans = [],
  totalBalance = 0,
  totalPaid = 0,
  nextPaymentDate,
  nextPaymentAmount,
  className = '',
  ...props
}) => {
  const totalLoanAmount = activeLoans.reduce((sum, loan) => sum + loan.amount, 0);
  const percentPaid = totalLoanAmount > 0 ? (totalPaid / totalLoanAmount) * 100 : 0;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <Card 
      title="Loan Summary" 
      className={className}
      {...props}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total Balance</p>
            <p className="text-2xl font-bold text-gray-800">{formatCurrency(totalBalance)}</p>
          </div>
          <Badge variant="primary">
            {activeLoans.length} Active {activeLoans.length === 1 ? 'Loan' : 'Loans'}
          </Badge>
        </div>
        
        <Progress 
          value={percentPaid} 
          max={100} 
          label="Repayment Progress" 
          variant="success"
        />
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">Next Payment</p>
          {nextPaymentDate && nextPaymentAmount ? (
            <div className="flex justify-between items-center mt-1">
              <p className="font-medium text-gray-900">
                {formatCurrency(nextPaymentAmount)}
              </p>
              <p className="text-sm text-gray-500">
                Due {new Date(nextPaymentDate).toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p className="text-sm text-gray-700">No upcoming payments</p>
          )}
        </div>
      </div>
    </Card>
  );
};