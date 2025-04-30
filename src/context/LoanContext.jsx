import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const LoanContext = createContext();

// Custom hook to use the loan context
export const useLoan = () => useContext(LoanContext);

// Provider component
const LoanProvider = ({ children }) => {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Fetch all loans for the authenticated user
  const fetchLoans = async () => {
    try {
      setLoading(true);
      // Replace with actual API call
      // const response = await api.get('/loans');
      // setLoans(response.data);
      
      // Placeholder data - replace with actual API implementation
      setLoans([
        {
          id: 'loan-1',
          amount: 5000,
          term: 6,
          interestRate: 12,
          status: 'approved',
          createdAt: new Date(2025, 3, 15).toISOString(),
          dueDate: new Date(2025, 9, 15).toISOString(),
          balance: 5250,
        },
        {
          id: 'loan-2',
          amount: 10000,
          term: 12,
          interestRate: 10,
          status: 'pending',
          createdAt: new Date(2025, 3, 25).toISOString(),
          dueDate: null,
          balance: 0,
        }
      ]);
      setError(null);
    } catch (err) {
      setError('Failed to fetch loans');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Get a single loan by ID
  const getLoanById = (id) => {
    return loans.find(loan => loan.id === id) || null;
  };

  // Apply for a new loan
  const applyForLoan = async (loanData) => {
    try {
      setLoading(true);
      // Replace with actual API call
      // const response = await api.post('/loans', loanData);
      // const newLoan = response.data;
      
      // Placeholder implementation
      const newLoan = {
        id: `loan-${loans.length + 1}`,
        amount: loanData.amount,
        term: loanData.term,
        interestRate: 10 + Math.random() * 5, // Random interest rate between 10-15%
        status: 'pending',
        createdAt: new Date().toISOString(),
        dueDate: null,
        balance: 0,
      };
      
      setLoans([...loans, newLoan]);
      setError(null);
      return newLoan;
    } catch (err) {
      setError('Failed to apply for loan');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Make a repayment
  const makeRepayment = async (loanId, amount) => {
    try {
      setLoading(true);
      // Replace with actual API call
      // const response = await api.post(`/loans/${loanId}/repayments`, { amount });
      
      // Placeholder implementation
      const updatedLoans = loans.map(loan => {
        if (loan.id === loanId) {
          const newBalance = Math.max(0, loan.balance - amount);
          return {
            ...loan,
            balance: newBalance,
            status: newBalance === 0 ? 'paid' : loan.status
          };
        }
        return loan;
      });
      
      setLoans(updatedLoans);
      setError(null);
      return true;
    } catch (err) {
      setError('Failed to process repayment');
      console.error(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Load loans when the component mounts
  useEffect(() => {
    fetchLoans();
  }, []);

  // Context value
  const value = {
    loans,
    loading,
    error,
    fetchLoans,
    getLoanById,
    applyForLoan,
    makeRepayment
  };

  return (
    <LoanContext.Provider value={value}>
      {children}
    </LoanContext.Provider>
  );
};

export default LoanProvider;