import React, { useState, useEffect } from 'react';

export function TypingIndicator() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center p-4 rounded-lg max-w-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg">
      <div className="flex items-center space-x-2">
        <div className="text-sm font-medium">Synthiant is typing</div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
} 