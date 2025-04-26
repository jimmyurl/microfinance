import React from 'react';
import { Card } from '../common/Card';
import { Progress } from '../common/Progress';

export const CreditScore = ({
  score,
  maxScore = 850,
  previousScore,
  className = '',
  ...props
}) => {
  const getScoreCategory = (score) => {
    if (score >= 750) return { label: 'Excellent', color: 'success' };
    if (score >= 700) return { label: 'Good', color: 'primary' };
    if (score >= 650) return { label: 'Fair', color: 'warning' };
    if (score >= 600) return { label: 'Poor', color: 'danger' };
    return { label: 'Very Poor', color: 'danger' };
  };
  
  const scoreInfo = getScoreCategory(score);
  const scoreDifference = previousScore ? score - previousScore : 0;

  return (
    <Card 
      title="Credit Score" 
      className={className}
      {...props}
    >
      <div className="py-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-3xl font-bold text-gray-800">{score}</span>
          <span className={`
            px-2 py-1 text-xs font-medium rounded-full 
            ${scoreInfo.color === 'success' ? 'bg-green-100 text-green-800' : 
              scoreInfo.color === 'primary' ? 'bg-blue-100 text-blue-800' : 
              scoreInfo.color === 'warning' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-red-100 text-red-800'
            }
          `}>
            {scoreInfo.label}
          </span>
        </div>
        
        <Progress 
          value={score} 
          max={maxScore} 
          size="lg" 
          variant={scoreInfo.color}
        />
        
        {previousScore && (
          <div className="mt-4 flex items-center">
            <span className="text-sm text-gray-500 mr-2">From last month:</span>
            {scoreDifference > 0 ? (
              <span className="text-sm font-medium text-green-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                +{scoreDifference} points
              </span>
            ) : scoreDifference < 0 ? (
              <span className="text-sm font-medium text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                {scoreDifference} points
              </span>
            ) : (
              <span className="text-sm font-medium text-gray-600">No change</span>
            )}
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700">Factors affecting your score:</h4>
          <ul className="mt-2 space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              On-time payments
            </li>
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Limited credit history
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};