---
sidebar_position: 1
---

# Welcome to Zeropoint Protocol AI

> **Zeroth Principle**: Only with good intent and a good heart does the system function.

## 🌟 Overview

Zeropoint Protocol AI is an advanced AI system that combines distributed machine learning, ethical AI governance, and decentralized identity management. The system features a dual-architecture with a Python backend for AI model inference and a NestJS API gateway for orchestration and security.

## 🏗️ Architecture

### Dual-Service Architecture
- **Python Backend**: AI model inference, distributed ML, IPFS integration
- **NestJS API Gateway**: Authentication, rate limiting, security, orchestration
- **PostgreSQL Database**: User management, session tracking, audit logs
- **Redis Cache**: Session storage, rate limiting
- **IPFS Network**: Decentralized storage and content addressing

### Core Components
- **Zeroth Gate**: Ethical validation and intent checking
- **Distributed ML**: Petals for BLOOM model inference
- **Image Generation**: Stable Diffusion integration
- **Identity Management**: JWT-based authentication with role-based access
- **Monitoring**: Prometheus metrics and health checks

## 🚀 Quick Start

### Prerequisites
- Python 3.12+
- Node.js 20+
- Docker (optional)
- PostgreSQL (optional)

### Local Development

1. **Clone the repository**:
```bash
git clone https://github.com/FlynnVIN10/zeropointprotocol.ai.git
cd zeropointprotocol.ai
```

2. **Start the Python backend**:
```bash
cd Zeropoint
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

3. **Start the NestJS API**:
```bash
cd ..
npm install
export JWT_SECRET="your-secret-key"
export JWT_EXPIRES_IN="24h"
export NODE_ENV="development"
npm run start
```

4. **Access the services**:
- API Gateway: http://localhost:3000
- Python Backend: http://localhost:8000
- Health Check: http://localhost:3000/v1/health

## 🔒 Security Features

### Zeroth Gate Ethical Validation
- Intent validation for all AI operations
- Ethical compliance checking
- Malicious request blocking

### Authentication & Authorization
- JWT-based authentication
- Role-based access control
- Rate limiting and throttling

## 📡 API Endpoints

### Health & Monitoring
- `GET /v1/health` - Service health check
- `GET /v1/metrics` - Prometheus metrics

### AI Generation
- `POST /v1/generate/text` - Text generation with BLOOM
- `POST /v1/generate/image` - Image generation with Stable Diffusion
- `POST /v1/generate/code` - Code generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.
