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
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const connectSSE = () => {
      try {
        const eventSource = new EventSource(API_ENDPOINTS.CHAT_STREAM);

        eventSource.onopen = () => {
          setIsConnected(true);
          setConnectionStatus('Connected');
          console.log('SSE connection opened.');
        };

        eventSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            console.log('Received SSE data:', data);

            if (data.type === 'message') {
              // Add AI message to chat
              const aiMessage = {
                id: data.id || Date.now(),
                author: data.author || 'ai',
                content: data.content,
                timestamp: data.timestamp || new Date().toISOString()
              };
              
              setMessages(prevMessages => {
                const updatedMessages = [...prevMessages, aiMessage];
                return updatedMessages;
              });
              
              setIsTyping(false);
            } else if (data.type === 'connected') {
              console.log('Connected to chat stream:', data.message);
            } else if (data.type === 'ping') {
              // Keep connection alive
              console.log('Ping received');
            }
          } catch (error) {
            console.error('Error parsing SSE data:', error);
          }
        };

        eventSource.onerror = (error) => {
          console.error('SSE error:', error);
          setConnectionStatus('Disconnected');
          setIsConnected(false);
          eventSource.close();
          
          // Try to reconnect after 5 seconds
          setTimeout(() => {
            if (!isConnected) {
              connectSSE();
            }
          }, 5000);
        };

        eventSourceRef.current = eventSource;

        return () => {
          eventSource.close();
          console.log('SSE connection closed.');
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
      content: inputValue.trim(),
      timestamp: new Date().toISOString()
    };

    // Add user message immediately
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
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Message sent successfully:', result);
      
      // The AI response will come through the SSE stream
      // We don't need to handle it here as it's handled in the onmessage event
      
    } catch (error) {
      console.error('Error sending message:', error);
      setIsTyping(false);
      
      // Add error message
      setMessages(prev => [...prev, {
        id: Date.now(),
        author: 'ai',
        content: 'Sorry, I encountered an error processing your message. Please try again.',
        timestamp: new Date().toISOString()
      }]);
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