import React, { useState, useEffect, useRef } from 'react';
import { ChatBubble } from './ChatBubble';
import { TypingIndicator } from './TypingIndicator';
import { API_ENDPOINTS } from '../config/api';

export function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState('Connecting...');
  const messagesEndRef = useRef(null);
  const eventSourceRef = useRef(null);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed.slice(-50)); // Keep last 50 messages
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // SSE connection for real-time messages
  useEffect(() => {
    const connectSSE = () => {
      try {
        eventSourceRef.current = new EventSource(API_ENDPOINTS.CHAT_STREAM);
        
        eventSourceRef.current.onopen = () => {
          setIsConnected(true);
          setConnectionStatus('Connected');
        };

        eventSourceRef.current.onmessage = (event) => {
          const data = JSON.parse(event.data);
          
          if (data.type === 'message') {
            setMessages(prev => [...prev, {
              id: Date.now(),
              author: 'synthiant',
              content: data.content,
              timestamp: new Date().toISOString()
            }]);
            setIsTyping(false);
          } else if (data.type === 'typing') {
            setIsTyping(true);
          }
        };

        eventSourceRef.current.onerror = () => {
          setIsConnected(false);
          setConnectionStatus('Connection lost. Reconnecting...');
          eventSourceRef.current?.close();
          
          // Attempt to reconnect after 5 seconds
          setTimeout(connectSSE, 5000);
        };

      } catch (error) {
        console.error('SSE connection error:', error);
        setConnectionStatus('Connection failed');
        setIsConnected(false);
      }
    };

    connectSSE();

    return () => {
      eventSourceRef.current?.close();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || !isConnected) return;

    const userMessage = {
      id: Date.now(),
      author: 'user',
      content: inputValue,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Send message to backend
      const response = await fetch(API_ENDPOINTS.CHAT_SEND, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-4 border-b bg-white rounded-t-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Symbiotic Chat</h3>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600">{connectionStatus}</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            author={message.author}
            timestamp={message.timestamp}
          >
            {message.content}
          </ChatBubble>
        ))}
        
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t bg-white rounded-b-lg">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            disabled={!isConnected}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || !isConnected}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
} 