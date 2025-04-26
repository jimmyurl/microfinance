import React, { useState } from 'react';
import { Button } from './Button';
import { Progress } from './Progress';

export const LoanApplicationForm = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Financial Information
    monthlyIncome: '',
    employmentStatus: 'full-time',
    employer: '',
    employmentLength: '',
    
    // Loan Details
    loanAmount: '',
    loanPurpose: 'personal',
    loanTerm: 30,
    
    // Bank Information
    accountNumber: '',
    routingNumber: '',
    accountType: 'checking',
    
    // Additional Information
    hasCoBorrower: 'no',
    hasSecurity: 'no',
    agreeToTerms: false
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
    }, 1500);
  };
  
  // Validate current step
  const validateStep = () => {
    if (currentStep === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.phone &&
             formData.dateOfBirth && formData.address && formData.city && formData.state && 
             formData.zipCode;
    } else if (currentStep === 2) {
      return formData.monthlyIncome && formData.employmentStatus && formData.employer && 
             formData.employmentLength;
    } else if (currentStep === 3) {
      return formData.loanAmount && formData.loanPurpose && formData.loanTerm;
    } else if (currentStep === 4) {
      return formData.accountNumber && formData.routingNumber && formData.accountType;
    } else if (currentStep === 5) {
      return formData.agreeToTerms;
    }
    return false;
  };
  
  const isNextButtonDisabled = !validateStep();
  
  return (
    <div className="py-4">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">Step {currentStep} of 5</span>
          <span className="text-sm font-medium text-gray-500">
            {currentStep === 1 ? 'Personal Information' : 
             currentStep === 2 ? 'Financial Information' :
             currentStep === 3 ? 'Loan Details' :
             currentStep === 4 ? 'Bank Information' : 'Review & Submit'}
          </span>
        </div>
        <Progress value={currentStep} max={5} size="md" variant="primary" />
      </div>
      
      <form onSubmit={currentStep === 5 ? handleSubmit : e => e.preventDefault()}>
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1  block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Step 2: Financial Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700">Monthly Income ($)</label>
              <input
                type="number"
                id="monthlyIncome"
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleChange}
                required
                min="0"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700">Employment Status</label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="self-employed">Self Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="retired">Retired</option>
                <option value="student">Student</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="employer" className="block text-sm font-medium text-gray-700">Employer Name</label>
              <input
                type="text"
                id="employer"
                name="employer"
                value={formData.employer}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="employmentLength" className="block text-sm font-medium text-gray-700">Length of Employment</label>
              <select
                id="employmentLength"
                name="employmentLength"
                value={formData.employmentLength}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select an option</option>
                <option value="less-than-1-year">Less than 1 year</option>
                <option value="1-2-years">1-2 years</option>
                <option value="3-5-years">3-5 years</option>
                <option value="5-plus-years">More than 5 years</option>
              </select>
            </div>
          </div>
        )}
        
        {/* Step 3: Loan Details */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div>
              <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Loan Amount ($)</label>
              <input
                type="number"
                id="loanAmount"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                required
                min="100"
                max="10000"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <p className="mt-1 text-xs text-gray-500">Min: $100, Max: $10,000</p>
            </div>
            
            <div>
              <label htmlFor="loanPurpose" className="block text-sm font-medium text-gray-700">Loan Purpose</label>
              <select
                id="loanPurpose"
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="personal">Personal Expenses</option>
                <option value="education">Education</option>
                <option value="medical">Medical Expenses</option>
                <option value="debt-consolidation">Debt Consolidation</option>
                <option value="home-improvement">Home Improvement</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">Loan Term (Days)</label>
              <select
                id="loanTerm"
                name="loanTerm"
                value={formData.loanTerm}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="30">30 days</option>
                <option value="60">60 days</option>
                <option value="90">90 days</option>
                <option value="180">180 days</option>
                <option value="365">365 days</option>
              </select>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Interest Rate Information</h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>Your interest rate will be determined based on your credit score, loan amount, and term length. Current rates range from 4.99% to 18.99% APR.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Step 4: Bank Information */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <div className="bg-yellow-50 p-4 rounded-md mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Secure Information</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>Your bank information is encrypted and securely stored. We will never share this information with third parties.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Account Type</label>
              <select
                id="accountType"
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="checking">Checking Account</option>
                <option value="savings">Savings Account</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="routingNumber" className="block text-sm font-medium text-gray-700">Routing Number</label>
              <input
                type="text"
                id="routingNumber"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        )}
        
        {/* Step 5: Review & Submit */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Review Your Application</h3>
            
            <div className="bg-gray-50 rounded-md p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Personal Information</h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="text-sm text-gray-900">{formData.firstName} {formData.lastName}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="text-sm text-gray-900">{formData.email}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Phone</dt>
                  <dd className="text-sm text-gray-900">{formData.phone}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
                  <dd className="text-sm text-gray-900">{formData.dateOfBirth}</dd>
                </div>
              </dl>
            </div>
            
            <div className="bg-gray-50 rounded-md p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Loan Details</h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Loan Amount</dt>
                  <dd className="text-sm text-gray-900">${formData.loanAmount}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Loan Purpose</dt>
                  <dd className="text-sm text-gray-900">{formData.loanPurpose}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Loan Term</dt>
                  <dd className="text-sm text-gray-900">{formData.loanTerm} days</dd>
                </div>
              </dl>
            </div>
            
            <div className="bg-gray-50 rounded-md p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Employment & Financial</h4>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Monthly Income</dt>
                  <dd className="text-sm text-gray-900">${formData.monthlyIncome}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Employment Status</dt>
                  <dd className="text-sm text-gray-900">{formData.employmentStatus}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Employer</dt>
                  <dd className="text-sm text-gray-900">{formData.employer}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Length of Employment</dt>
                  <dd className="text-sm text-gray-900">{formData.employmentLength}</dd>
                </div>
              </dl>
            </div>
            
            <div className="mt-4">
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                    I agree to the terms and conditions
                  </label>
                  <p className="text-gray-500">
                    By checking this box, you agree to our <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 flex justify-between">
          {currentStep > 1 ? (
            <Button type="button" variant="outline" onClick={goToPreviousStep}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          
          {currentStep < 5 ? (
            <Button 
              type="button" 
              variant="primary" 
              onClick={goToNextStep}
              disabled={isNextButtonDisabled}
            >
              Next
            </Button>
          ) : (
            <Button 
              type="submit" 
              variant="primary" 
              disabled={!formData.agreeToTerms || isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
          )}
        </div>
        
        {/* Success Message */}
        {isSubmitting && (
          <div className="mt-6 bg-blue-50 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Processing your application</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>Please wait while we process your loan application. This may take a few moments.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};