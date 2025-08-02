import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Interact.module.css';

function InteractPage() {
  const {siteConfig} = useDocusaurusContext();
  const [prompt, setPrompt] = useState('');
  const [context, setContext] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setResponse(null);

    try {
      const response = await fetch('http://localhost:3000/v1/ui/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          context: context || undefined
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      title="Interact - Zeropoint Protocol"
      description="Interact with the Zeropoint Protocol AI system">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Interact with Zeropoint</h1>
          <p className={styles.subtitle}>
            Experience ethical AI through our Zeroth-gate validated interface
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.promptSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="prompt" className={styles.label}>
                  Your Prompt
                </label>
                <textarea
                  id="prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter your prompt here..."
                  className={styles.textarea}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="context" className={styles.label}>
                  Context (Optional)
                </label>
                <textarea
                  id="context"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Provide additional context..."
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !prompt.trim()}
                className={clsx(styles.submitButton, {
                  [styles.submitting]: isSubmitting
                })}
              >
                {isSubmitting ? 'Processing...' : 'Submit to Zeropoint'}
              </button>
            </form>
          </div>

          <div className={styles.responseSection}>
            {error && (
              <div className={styles.error}>
                <h3>Error</h3>
                <p>{error}</p>
              </div>
            )}

            {response && (
              <div className={styles.response}>
                <h3>AI Response</h3>
                <div className={styles.responseContent}>
                  {/* Main AI Response Content */}
                  <div className={styles.responseItem}>
                    <strong>Response:</strong>
                    <div className={styles.aiContent}>
                      {response.data?.content || 'No content received'}
                    </div>
                  </div>

                  {/* Processing Information */}
                  <div className={styles.responseItem}>
                    <strong>Confidence:</strong> {response.data?.confidence ? `${(response.data.confidence * 100).toFixed(1)}%` : 'N/A'}
                  </div>

                  <div className={styles.responseItem}>
                    <strong>Consensus Type:</strong> {response.data?.consensus?.type || 'N/A'}
                  </div>

                  <div className={styles.responseItem}>
                    <strong>Processing Time:</strong> {response.data?.processing?.duration ? `${response.data.processing.duration}ms` : 'N/A'}
                  </div>

                  <div className={styles.responseItem}>
                    <strong>Model:</strong> {response.data?.processing?.model || 'N/A'}
                  </div>

                  <div className={styles.responseItem}>
                    <strong>Agents Involved:</strong>
                    <div className={styles.agentsList}>
                      {response.data?.consensus?.agents ? 
                        response.data.consensus.agents.map((agent, index) => (
                          <span key={index} className={styles.agentTag}>{agent}</span>
                        )) : 
                        'N/A'
                      }
                    </div>
                  </div>

                  <div className={styles.responseItem}>
                    <strong>Timestamp:</strong> {response.timestamp}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default InteractPage; 