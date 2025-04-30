import React, { useState, useEffect } from 'react';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { TextField } from '../components/common/TextField';
import { Tabs } from '../components/common/Tabs';
import { Alert } from '../components/common/Alert';
import { Badge } from '../components/common/Badge';
import { Loader } from '../components/common/Loader';
import { Modal } from '../components/common/Modal';
import { Progress } from '../components/common/Progress';

export function Repayment() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mobile');
  const [mobileNumber, setMobileNumber] = useState('');
  
  // Sample data for demonstration
  const loanData = [
    {
      id: 'L001',
      name: 'Business Loan',
      amount: 5000000,
      currency: 'TZS',
      balance: 3750000,
      nextPayment: 350000,
      dueDate: '2025-05-15',
      status: 'active'
    },
    {
      id: 'L002',
      name: 'Emergency Loan',
      amount: 1000000,
      currency: 'TZS',
      balance: 500000,
      nextPayment: 120000,
      dueDate: '2025-05-10',
      status: 'active'
    }
  ];
  
  const paymentHistory = [
    {
      id: 'P001',
      loanId: 'L001',
      amount: 350000,
      currency: 'TZS',
      date: '2025-03-15',
      method: 'mobile',
      reference: 'MOB12345678',
      status: 'completed'
    },
    {
      id: 'P002',
      loanId: 'L001',
      amount: 350000,
      currency: 'TZS',
      date: '2025-04-15',
      method: 'mobile',
      reference: 'MOB23456789',
      status: 'completed'
    },
    {
      id: 'P003',
      loanId: 'L002',
      amount: 120000,
      currency: 'TZS',
      date: '2025-04-10',
      method: 'bank',
      reference: 'BNK12345678',
      status: 'completed'
    }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePaymentClick = (loan) => {
    setSelectedLoan(loan);
    setPaymentAmount(loan.nextPayment.toString());
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // After successful payment
      setMessage({
        type: 'success',
        text: `Payment of ${formatCurrency(parseInt(paymentAmount))} for loan ${selectedLoan.id} has been initiated successfully.`
      });
      setShowPaymentModal(false);
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'Failed to process payment. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount, currency = 'TZS') => {
    return `${amount.toLocaleString()} ${currency}`;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Loan Repayments</h1>
      
      {message.text && (
        <Alert 
          type={message.type} 
          message={message.text} 
          onClose={() => setMessage({ type: '', text: '' })}
        />
      )}
      
      <Tabs 
        items={[
          { id: 'upcoming', label: 'Upcoming Payments' },
          { id: 'history', label: 'Payment History' }
        ]}
        activeTab={activeTab}
        onChange={handleTabChange}
      />
      
      {activeTab === 'upcoming' && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Payments</h2>
          
          {loanData.map(loan => (
            <Card key={loan.id} className="mb-4">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{loan.name}</h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-600">
                        <span className="font-medium">Loan Amount:</span> {formatCurrency(loan.amount, loan.currency)}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Outstanding Balance:</span> {formatCurrency(loan.balance, loan.currency)}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Next Payment:</span> {formatCurrency(loan.nextPayment, loan.currency)}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Due Date:</span> {formatDate(loan.dueDate)} 
                        <span className="ml-2">
                          <Badge 
                            type={calculateDaysLeft(loan.dueDate) < 5 ? "error" : "success"}
                          >
                            {calculateDaysLeft(loan.dueDate)} days left
                          </Badge>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Badge type={loan.status === 'active' ? 'primary' : 'secondary'}>
                      {loan.status === 'active' ? 'Active' : 'Completed'}
                    </Badge>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Progress 
                    value={loan.amount - loan.balance} 
                    max={loan.amount}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span>{Math.round(((loan.amount - loan.balance) / loan.amount) * 100)}% paid</span>
                    <span>{formatCurrency(loan.amount - loan.balance)} of {formatCurrency(loan.amount)}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <Button 
                    variant="primary" 
                    onClick={() => handlePaymentClick(loan)}
                  >
                    Make Payment
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      
      {activeTab === 'history' && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Payment History</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Reference</th>
                  <th className="py-3 px-4 text-left">Loan ID</th>
                  <th className="py-3 px-4 text-left">Amount</th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Method</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paymentHistory.map(payment => (
                  <tr key={payment.id}>
                    <td className="py-3 px-4">{payment.reference}</td>
                    <td className="py-3 px-4">{payment.loanId}</td>
                    <td className="py-3 px-4">{formatCurrency(payment.amount, payment.currency)}</td>
                    <td className="py-3 px-4">{formatDate(payment.date)}</td>
                    <td className="py-3 px-4 capitalize">{payment.method}</td>
                    <td className="py-3 px-4">
                      <Badge type={payment.status === 'completed' ? 'success' : 'warning'}>
                        {payment.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {paymentHistory.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No payment history found.</p>
            </div>
          )}
        </div>
      )}
      
      {/* Payment Modal */}
      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        title="Make Payment"
      >
        {selectedLoan && (
          <form onSubmit={handlePaymentSubmit}>
            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Loan:</span> {selectedLoan.name} ({selectedLoan.id})
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Outstanding Balance:</span> {formatCurrency(selectedLoan.balance, selectedLoan.currency)}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Next Due Date:</span> {formatDate(selectedLoan.dueDate)}
              </p>
            </div>
            
            <div className="mb-4">
              <TextField
                label="Payment Amount"
                id="paymentAmount"
                name="paymentAmount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                type="number"
                min="100"
                max={selectedLoan.balance.toString()}
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                Minimum payment: {formatCurrency(100, selectedLoan.currency)}
              </p>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Method
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div 
                  className={`border rounded-md p-3 cursor-pointer flex items-center ${paymentMethod === 'mobile' ? 'border-primary bg-primary/10' : 'bg-gray-50'}`}
                  onClick={() => setPaymentMethod('mobile')}
                >
                  <span className="ml-2">Mobile Money</span>
                </div>
                <div 
                  className={`border rounded-md p-3 cursor-pointer flex items-center ${paymentMethod === 'bank' ? 'border-primary bg-primary/10' : 'bg-gray-50'}`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <span className="ml-2">Bank Transfer</span>
                </div>
              </div>
            </div>
            
            {paymentMethod === 'mobile' && (
              <div className="mb-4">
                <TextField
                  label="Mobile Number"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="e.g. 255712345678"
                  required
                />
              </div>
            )}
            
            {paymentMethod === 'bank' && (
              <div className="mb-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2">Bank Details</h4>
                  <p className="text-sm">Bank: National Microfinance Bank</p>
                  <p className="text-sm">Account Name: MicroFinance Ltd</p>
                  <p className="text-sm">Account Number: 1234567890</p>
                  <p className="text-sm mt-2 font-medium">
                    Please include your Loan ID ({selectedLoan.id}) as reference
                  </p>
                </div>
              </div>
            )}
            
            <div className="flex justify-end gap-2 mt-6">
              <Button 
                type="button" 
                variant="secondary" 
                onClick={() => setShowPaymentModal(false)}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="primary"
                disabled={loading}
              >
                {loading ? <Loader size="sm" /> : 'Confirm Payment'}
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}