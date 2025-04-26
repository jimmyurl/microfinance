import React, { useState } from 'react';

const LoanEligibility = () => {
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    creditScore: '',
    existingDebt: '',
    employmentStatus: 'employed',
    loanPurpose: 'personal'
  });
  
  const [eligibilityResult, setEligibilityResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const calculateEligibility = () => {
    setIsSubmitting(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Basic eligibility logic - this could be much more sophisticated
      const { monthlyIncome, creditScore, existingDebt, employmentStatus } = formData;
      
      const monthlyIncomeNum = parseFloat(monthlyIncome);
      const creditScoreNum = parseInt(creditScore);
      const existingDebtNum = parseFloat(existingDebt);
      
      // Calculate debt-to-income ratio
      const debtToIncomeRatio = existingDebtNum / monthlyIncomeNum;
      
      let eligible = false;
      let maxLoanAmount = 0;
      let interestRate = 0;
      let reason = '';
      
      // Eligibility rules
      if (creditScoreNum < 550) {
        eligible = false;
        reason = 'Credit score too low';
      } else if (debtToIncomeRatio > 0.5) {
        eligible = false;
        reason = 'Debt-to-income ratio too high';
      } else if (employmentStatus === 'unemployed') {
        eligible = false;
        reason = 'Current employment required';
      } else {
        eligible = true;
        
        // Calculate max loan amount based on income and credit
        maxLoanAmount = monthlyIncomeNum * (creditScoreNum >= 700 ? 10 : 5);
        
        // Calculate interest rate based on credit score
        if (creditScoreNum >= 750) interestRate = 7.99;
        else if (creditScoreNum >= 700) interestRate = 10.99;
        else if (creditScoreNum >= 650) interestRate = 14.99;
        else interestRate = 18.99;
      }
      
      setEligibilityResult({
        eligible,
        maxLoanAmount: eligible ? maxLoanAmount : 0,
        interestRate: eligible ? interestRate : 0,
        reason: eligible ? 'Congratulations! You qualify for a loan.' : reason
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateEligibility();
  };
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Loan Eligibility Check</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Income
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="monthlyIncome"
                id="monthlyIncome"
                required
                min="0"
                value={formData.monthlyIncome}
                onChange={handleChange}
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700 mb-1">
              Credit Score
            </label>
            <input
              type="number"
              name="creditScore"
              id="creditScore"
              required
              min="300"
              max="850"
              value={formData.creditScore}
              onChange={handleChange}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="300-850"
            />
          </div>
          
          <div>
            <label htmlFor="existingDebt" className="block text-sm font-medium text-gray-700 mb-1">
              Monthly Debt Payments
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="existingDebt"
                id="existingDebt"
                required
                min="0"
                value={formData.existingDebt}
                onChange={handleChange}
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="0.00"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700 mb-1">
              Employment Status
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="retired">Retired</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="loanPurpose" className="block text-sm font-medium text-gray-700 mb-1">
              Loan Purpose
            </label>
            <select
              id="loanPurpose"
              name="loanPurpose"
              value={formData.loanPurpose}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="personal">Personal</option>
              <option value="education">Education</option>
              <option value="business">Business</option>
              <option value="home">Home Improvement</option>
              <option value="debt">Debt Consolidation</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isSubmitting ? 'bg-blue-300' : 'bg-blue-600 hover:bg-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : 'Check Eligibility'}
          </button>
        </div>
      </form>
      
      {eligibilityResult && (
        <div className={`mt-8 p-4 rounded-md ${eligibilityResult.eligible ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex">
            <div className="flex-shrink-0">
              {eligibilityResult.eligible ? (
                <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <h3 className={`text-sm font-medium ${eligibilityResult.eligible ? 'text-green-800' : 'text-red-800'}`}>
                {eligibilityResult.eligible ? 'Eligible for a Loan' : 'Not Eligible for a Loan'}
              </h3>
              <div className={`mt-2 text-sm ${eligibilityResult.eligible ? 'text-green-700' : 'text-red-700'}`}>
                <p>{eligibilityResult.reason}</p>
              </div>
              
              {eligibilityResult.eligible && (
                <div className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-md bg-white p-4 shadow-sm border border-green-200">
                      <p className="text-sm text-gray-500">Maximum Loan Amount</p>
                      <p className="text-xl font-bold text-gray-800">{formatCurrency(eligibilityResult.maxLoanAmount)}</p>
                    </div>
                    
                    <div className="rounded-md bg-white p-4 shadow-sm border border-green-200">
                      <p className="text-sm text-gray-500">Estimated Interest Rate</p>
                      <p className="text-xl font-bold text-gray-800">{eligibilityResult.interestRate}%</p>
                      <p className="text-xs text-gray-500 mt-1">APR based on your credit profile</p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      onClick={() => window.location.href = '/apply'}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-900">How is eligibility determined?</h3>
        <p className="mt-2 text-sm text-gray-500">
          Loan eligibility is based on multiple factors including your income, credit score, existing debt obligations, 
          and employment status. Our system analyzes these inputs to determine if you qualify and what loan terms we can offer.
        </p>
        <div className="mt-4 bg-blue-50 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                This is just a preliminary check
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  The final loan amount, interest rate, and approval decision may vary based on additional verification 
                  steps and our underwriting process. This tool gives you an estimate of what you might qualify for.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanEligibility;