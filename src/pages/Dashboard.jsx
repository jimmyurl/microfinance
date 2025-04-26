// Dashboard.jsx - Example dashboard layout using Branch styling
import React from 'react';
import { Card } from './Card';
import { LoanCard } from './LoanCard';
import { Progress } from './Progress';
import { Button } from './Button';

export const Dashboard = () => {
  // Mock data
  const activeLoans = [
    { id: 1, amount: 500, interestRate: 5, duration: 30, dueDate: '2025-05-25', status: 'active' },
    { id: 2, amount: 1000, interestRate: 4.5, duration: 60, dueDate: '2025-06-25', status: 'pending' },
  ];
  
  const creditScore = 720;
  const maxLoanAmount = 2500;
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <Button variant="outline" size="sm">My Account</Button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Credit Score" className="col-span-1">
            <div className="py-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-3xl font-bold text-gray-800">{creditScore}</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Good</span>
              </div>
              <Progress value={creditScore} max={850} size="lg" variant="success" />
            </div>
          </Card>
          
          <Card title="Loan Eligibility" className="col-span-1">
            <div className="py-4">
              <p className="text-sm text-gray-500 mb-2">Maximum loan amount</p>
              <p className="text-2xl font-bold text-gray-800">${maxLoanAmount}</p>
              <div className="mt-4">
                <Button variant="primary" fullWidth>Apply for a Loan</Button>
              </div>
            </div>
          </Card>
          
          <Card title="Quick Repayment" className="col-span-1">
            <div className="py-4">
              <p className="text-sm text-gray-500 mb-4">Need to make a payment?</p>
              <div className="space-y-2">
                <Button variant="success" fullWidth>Make a Payment</Button>
                <Button variant="outline" fullWidth>Payment History</Button>
              </div>
            </div>
          </Card>
          
          <Card title="Active Loans" subtitle="Your current loan portfolio" className="col-span-1 md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeLoans.map(loan => (
                <LoanCard
                  key={loan.id}
                  loanAmount={loan.amount}
                  interestRate={loan.interestRate}
                  duration={loan.duration}
                  dueDate={loan.dueDate}
                  status={loan.status}
                  onRepay={() => console.log('Repay loan', loan.id)}
                />
              ))}
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                <Button variant="ghost">+ Apply for a new loan</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};