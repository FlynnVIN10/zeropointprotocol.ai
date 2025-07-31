import React, { useState, useEffect, useRef } from 'react';
import styles from './LivePromptOutput.module.css';
import clsx from 'clsx';

function LivePromptOutput() {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);
  const eventSourceRef = useRef(null);

  useEffect(() => {
    const connectToSSE = () => {
      try {
        const eventSource = new EventSource('http://localhost:3000/v1/ui/stream');
        eventSourceRef.current = eventSource;

        eventSource.onopen = () => {
          setIsConnected(true);
          setError(null);
          console.log('SSE connection established');
        };

        eventSource.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            setMessages(prev => [...prev, {
              id: Date.now(),
              timestamp: new Date().toISOString(),
              data: data
            }]);
          } catch (err) {
            console.error('Error parsing SSE data:', err);
          }
        };

        eventSource.onerror = (error) => {
          console.error('SSE connection error:', error);
          setError('Connection lost. Attempting to reconnect...');
          setIsConnected(false);
          
          // Attempt to reconnect after 5 seconds
          setTimeout(() => {
            if (eventSourceRef.current) {
              eventSourceRef.current.close();
              connectToSSE();
            }
          }, 5000);
        };

      } catch (err) {
        setError('Failed to connect to stream');
        setIsConnected(false);
      }
    };

    connectToSSE();

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Live Output Stream</h3>
        <div className={styles.controls}>
          <div className={clsx(styles.status, {
            [styles.connected]: isConnected,
            [styles.disconnected]: !isConnected
          })}>
            {isConnected ? '● Connected' : '○ Disconnected'}
          </div>
          <button onClick={clearMessages} className={styles.clearButton}>
            Clear
          </button>
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      <div className={styles.messagesContainer}>
        {messages.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📡</div>
            <p>Waiting for live output...</p>
            <small>Stream will display real-time responses from Zeropoint Protocol</small>
          </div>
        ) : (
          <div className={styles.messages}>
            {messages.map((message) => (
              <div key={message.id} className={styles.message}>
                <div className={styles.messageHeader}>
                  <span className={styles.timestamp}>
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                  <span className={styles.type}>
                    {message.data.type || 'data'}
                  </span>
                </div>
                <div className={styles.messageContent}>
                  <pre className={styles.jsonOutput}>
                    {JSON.stringify(message.data, null, 2)}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LivePromptOutput; 