---
sidebar_position: 2
---

# API Reference

## Overview

The Zeropoint Protocol AI provides a comprehensive REST API for AI generation, authentication, and system management. All endpoints are protected by the Zeroth Gate ethical validation system.

## Base URL

```
https://zeropointprotocol.ai/v1
```

## Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Health & Monitoring

### GET /health

Check the health status of the API gateway and connected services.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-07-26T16:30:00Z",
  "services": {
    "api_gateway": "healthy",
    "python_backend": "healthy",
    "database": "healthy"
  },
  "version": "0.0.1"
}
```

### GET /metrics

Get Prometheus metrics for monitoring and alerting.

**Response:** Prometheus-formatted metrics

## AI Generation

### POST /generate/text

Generate text using the distributed BLOOM model.

**Request Body:**
```json
{
  "prompt": "Explain quantum computing in simple terms",
  "max_length": 200,
  "temperature": 0.7,
  "top_p": 0.9
}
```

**Response:**
```json
{
  "generated_text": "Quantum computing is a revolutionary technology...",
  "model": "bloom-176b",
  "tokens_used": 45,
  "generation_time": 2.3
}
```

### POST /generate/image

Generate images using Stable Diffusion.

**Request Body:**
```json
{
  "prompt": "A serene mountain landscape at sunset",
  "negative_prompt": "blurry, low quality",
  "width": 512,
  "height": 512,
  "steps": 50,
  "guidance_scale": 7.5
}
```

**Response:**
```json
{
  "image_url": "ipfs://QmX...",
  "image_hash": "QmX...",
  "generation_time": 15.2,
  "model": "stable-diffusion-v1-5"
}
```

### POST /generate/code

Generate code based on natural language descriptions.

**Request Body:**
```json
{
  "prompt": "Create a Python function to calculate fibonacci numbers",
  "language": "python",
  "max_length": 500
}
```

**Response:**
```json
{
  "generated_code": "def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)",
  "language": "python",
  "tokens_used": 67,
  "generation_time": 1.8
}
```

## Authentication

### POST /auth/register

Register a new user account.

**Request Body:**
```json
{
  "username": "alice",
  "password": "secure_password_123",
  "email": "alice@example.com"
}
```

**Response:**
```json
{
  "user_id": "user_123",
  "username": "alice",
  "message": "User registered successfully"
}
```

### POST /auth/login

Authenticate and receive a JWT token.

**Request Body:**
```json
{
  "username": "alice",
  "password": "secure_password_123"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 86400,
  "user": {
    "id": "user_123",
    "username": "alice",
    "role": "user"
  }
}
```

## IPFS Operations

### POST /ipfs/upload

Upload content to IPFS.

**Request Body:**
```json
{
  "content": "Hello, IPFS!",
  "content_type": "text/plain"
}
```

**Response:**
```json
{
  "hash": "QmX...",
  "size": 1024,
  "url": "ipfs://QmX..."
}
```

### GET /ipfs/{hash}

Retrieve content from IPFS.

**Response:**
```
Content-Type: text/plain
Content-Length: 1024

Hello, IPFS!
```

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "error": "Invalid request parameters",
  "code": "INVALID_PARAMS"
}
```

### 401 Unauthorized
```json
{
  "error": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

### 403 Forbidden
```json
{
  "error": "Zeroth violation: Request blocked by ethical validation",
  "code": "ZEROTH_VIOLATION"
}
```

### 429 Too Many Requests
```json
{
  "error": "Rate limit exceeded",
  "code": "RATE_LIMIT_EXCEEDED",
  "retry_after": 60
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error",
  "code": "INTERNAL_ERROR"
}
```

## Rate Limiting

- **Authenticated users**: 100 requests per minute
- **Unauthenticated users**: 10 requests per minute
- **AI generation endpoints**: 20 requests per hour

## SDKs and Libraries

### Python
```bash
pip install zeropoint-protocol
```

### JavaScript/TypeScript
```bash
npm install @zeropoint/protocol
```

### Go
```bash
go get github.com/zeropoint/protocol
```

## Support

For API support and questions:
- [GitHub Issues](https://github.com/FlynnVIN10/zeropointprotocol.ai/issues)
- [GitHub Discussions](https://github.com/FlynnVIN10/zeropointprotocol.ai/discussions) 