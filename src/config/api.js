// API Configuration for Zeropoint Protocol
// This file manages API endpoints for different environments

const isDevelopment = process.env.NODE_ENV === 'development';

// API Base URL - use production URL for the live website
export const API_BASE_URL = isDevelopment 
  ? 'http://localhost:3000' 
  : 'https://api.zeropointprotocol.ai'; // Production API URL

// API Endpoints
export const API_ENDPOINTS = {
  // Health and Status
  HEALTH: `${API_BASE_URL}/v1/health`,
  CONSENSUS_STATUS: `${API_BASE_URL}/v1/consensus/status`,
  
  // UI Endpoints
  UI_STATUS: `${API_BASE_URL}/v1/ui/status`,
  UI_AGENTS: `${API_BASE_URL}/v1/ui/agents`,
  
  // Chat Endpoints
  CHAT_STREAM: `${API_BASE_URL}/v1/chat/stream`,
  CHAT_SEND: `${API_BASE_URL}/v1/chat/send`,
  
  // Telemetry
  TELEMETRY: `${API_BASE_URL}/v1/soulchain/telemetry`,
  
  // Authentication
  OAUTH_AUTHORIZE: `${API_BASE_URL}/v1/oauth/authorize`,
  OAUTH_TOKEN: `${API_BASE_URL}/v1/oauth/token`,
  OAUTH_REVOKE: `${API_BASE_URL}/v1/oauth/revoke`,
};

// Helper function to get API URL
export const getApiUrl = (endpoint) => {
  return `${API_BASE_URL}${endpoint}`;
};

// Default fetch options
export const defaultFetchOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include', // Include cookies for authentication
};

// Error handling helper
export const handleApiError = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
  }
  return response;
}; 