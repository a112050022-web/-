import React from 'react';

export const EyeGraphic: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 120" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
    >
      {/* Outer Eye Shape */}
      <path 
        d="M10,60 Q100,-20 190,60 Q100,140 10,60 Z" 
        strokeWidth="2" 
        className="opacity-60"
        stroke="#BCC65B"
      />
      <path 
        d="M20,60 Q100,-5 180,60 Q100,125 20,60 Z" 
        strokeWidth="1" 
        className="opacity-40"
        stroke="#BCC65B"
      />
      
      {/* Iris */}
      <circle cx="100" cy="60" r="30" stroke="#BCC65B" strokeWidth="4" className="opacity-80" />
      
      {/* Pupil (Crescent Moon Style from reference) */}
      <path 
        d="M100,45 A15,15 0 1,1 90,72 A20,20 0 1,0 100,45 Z" 
        fill="#BCC65B" 
        className="opacity-90"
      />
      
      {/* Decorative Lines */}
      <line x1="10" y1="60" x2="190" y2="60" stroke="#BCC65B" strokeWidth="0.5" className="opacity-30" />
    </svg>
  );
};
