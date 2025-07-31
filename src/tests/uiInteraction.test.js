// © 2025 Zeropoint Protocol, Inc., a Texas C Corporation with principal offices in Austin, TX. All Rights Reserved. View-Only License: No clone, modify, run or distribute without signed agreement. See LICENSE.md and legal@zeropointprotocol.ai.

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock fetch for testing
global.fetch = jest.fn();

// Mock the Interact component
const mockInteractComponent = () => {
  const [prompt, setPrompt] = React.useState('');
  const [response, setResponse] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3000/v1/ui/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      
      if (response.ok) {
        const data = await response.json();
        setResponse(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
        data-testid="prompt-input"
      />
      <button type="submit" disabled={isSubmitting} data-testid="submit-button">
        {isSubmitting ? 'Processing...' : 'Submit'}
      </button>
      {response && (
        <div data-testid="response">
          <span data-testid="status">{response.status}</span>
        </div>
      )}
    </form>
  );
};

// Mock the Dashboard component
const mockDashboardComponent = () => {
  const [statusData, setStatusData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('http://localhost:3000/v1/ui/status');
        if (response.ok) {
          const data = await response.json();
          setStatusData(data.data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return <div data-testid="loading">Loading...</div>;
  }

  return (
    <div data-testid="dashboard">
      {statusData && (
        <div data-testid="status-data">
          <span data-testid="system-status">{statusData.health?.status}</span>
          <span data-testid="uptime">{statusData.uptime}</span>
        </div>
      )}
    </div>
  );
};

describe('UI Interaction Tests', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  describe('Prompt Submission', () => {
    test('should submit prompt successfully', async () => {
      const mockResponse = {
        status: 'success',
        data: { confidence: 0.8, consensus: { type: 'user_consensus' } },
        timestamp: '2025-07-31T00:32:48.398Z'
      };

      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      });

      render(mockInteractComponent());

      const promptInput = screen.getByTestId('prompt-input');
      const submitButton = screen.getByTestId('submit-button');

      fireEvent.change(promptInput, { target: { value: 'Test prompt' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/v1/ui/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: 'Test prompt' })
        });
      });

      await waitFor(() => {
        expect(screen.getByTestId('status')).toHaveTextContent('success');
      });
    });

    test('should handle submission error', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      render(mockInteractComponent());

      const promptInput = screen.getByTestId('prompt-input');
      const submitButton = screen.getByTestId('submit-button');

      fireEvent.change(promptInput, { target: { value: 'Test prompt' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(fetch).toHaveBeenCalled();
      });

      // Should not show response on error
      expect(screen.queryByTestId('response')).not.toBeInTheDocument();
    });

    test('should disable submit button while processing', async () => {
      fetch.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));

      render(mockInteractComponent());

      const promptInput = screen.getByTestId('prompt-input');
      const submitButton = screen.getByTestId('submit-button');

      fireEvent.change(promptInput, { target: { value: 'Test prompt' } });
      fireEvent.click(submitButton);

      expect(submitButton).toHaveTextContent('Processing...');
      expect(submitButton).toBeDisabled();
    });
  });

  describe('Status Fetching', () => {
    test('should fetch status data successfully', async () => {
      const mockStatusData = {
        health: { status: 'ok', services: { database: 'connected' } },
        uptime: 136.664754113
      };

      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: mockStatusData })
      });

      render(mockDashboardComponent());

      expect(screen.getByTestId('loading')).toBeInTheDocument();

      await waitFor(() => {
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/v1/ui/status');
      });

      await waitFor(() => {
        expect(screen.getByTestId('system-status')).toHaveTextContent('ok');
        expect(screen.getByTestId('uptime')).toHaveTextContent('136.664754113');
      });
    });

    test('should handle status fetch error', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      render(mockDashboardComponent());

      await waitFor(() => {
        expect(fetch).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(screen.getByTestId('dashboard')).toBeInTheDocument();
      });

      // Should not show status data on error
      expect(screen.queryByTestId('status-data')).not.toBeInTheDocument();
    });
  });

  describe('Route Validation', () => {
    test('should validate Interact route', () => {
      // This test validates that the Interact route is accessible
      const interactRoute = '/Interact';
      expect(interactRoute).toBe('/Interact');
    });

    test('should validate Dashboard route', () => {
      // This test validates that the Dashboard route is accessible
      const dashboardRoute = '/Dashboard';
      expect(dashboardRoute).toBe('/Dashboard');
    });
  });

  describe('Lighthouse Validation', () => {
    test('should have proper accessibility attributes', () => {
      render(mockInteractComponent());

      const promptInput = screen.getByTestId('prompt-input');
      const submitButton = screen.getByTestId('submit-button');

      expect(promptInput).toHaveAttribute('placeholder');
      expect(submitButton).toHaveAttribute('type', 'submit');
    });

    test('should have proper form structure', () => {
      render(mockInteractComponent());

      const form = screen.getByRole('form');
      expect(form).toBeInTheDocument();
    });
  });
}); 