import React from 'react';

export const BackgroundCircles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
      {/* Large outer ring */}
      <div className="absolute w-[600px] h-[600px] border border-[#BCC65B] rounded-full opacity-20 transform scale-110"></div>
      <div className="absolute w-[580px] h-[580px] border border-[#BCC65B] rounded-full opacity-10 transform scale-110"></div>
      
      {/* Middle ring */}
      <div className="absolute w-[450px] h-[450px] border-2 border-[#BCC65B] rounded-full opacity-30"></div>
      
      {/* Inner Glow */}
      <div className="absolute w-[300px] h-[300px] bg-[#BCC65B] rounded-full blur-[120px] opacity-20"></div>
    </div>
  );
};
