import React from 'react';
import clsx from 'clsx';

export function ChatBubble({ author, children, timestamp }) {
  return (
    <div className={clsx(
      'flex mb-4',
      author === 'synthiant' ? 'justify-end' : 'justify-start'
    )}>
      <div className={clsx(
        'p-4 rounded-lg max-w-xs shadow-lg',
        author === 'synthiant' 
          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white ml-auto' 
          : 'bg-gradient-to-r from-orange-400 to-red-500 text-white'
      )}>
        <div className="text-sm font-medium mb-1">
          {author === 'synthiant' ? 'Synthiant' : 'You'}
        </div>
        <div className="text-sm leading-relaxed">
          {children}
        </div>
        {timestamp && (
          <div className="text-xs opacity-70 mt-2">
            {new Date(timestamp).toLocaleTimeString()}
          </div>
        )}
      </div>
    </div>
  );
} 