# Zeropoint Protocol AI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.12+-blue.svg)](https://www.python.org/downloads/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

> **Zeroth Principle**: Only with good intent and a good heart does the system function.

## 🌟 Overview

Zeropoint Protocol AI is an advanced AI system that combines distributed machine learning, ethical AI governance, and decentralized identity management. The system features a dual-architecture with a Python backend for AI model inference and a NestJS API gateway for orchestration and security.

## 🏗️ Architecture

### Core Components

- **🤖 AI Backend (Python)**: Distributed text and image generation using Petals and Stable Diffusion
- **🌐 API Gateway (NestJS)**: RESTful API with JWT authentication and rate limiting
- **🔗 IPFS Integration**: Decentralized file storage and content addressing
- **⚡ Soulchain**: Ethical AI governance and intent validation
- **📊 Monitoring**: Prometheus metrics and health checks

## 🚀 Quick Start

### Prerequisites

- Python 3.12+
- Node.js 20+
- Docker (optional, for full deployment)
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/FlynnVIN10/zeropointprotocol.ai.git
   cd zeropointprotocol.ai
   ```

2. **Start Python AI Backend**
   ```bash
   cd Zeropoint
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   python app_simple.py
   ```
   The AI service will be available at `http://localhost:8000`

3. **Start NestJS API Gateway**
   ```bash
   cd ..
   npm install
   export JWT_SECRET="your-secret-key"
   export JWT_EXPIRES_IN="24h"
   export NODE_ENV="development"
   npm run start
   ```
   The API gateway will be available at `http://localhost:3000`

## 📡 API Endpoints

### Health & Status
- `GET /v1/health` - Service health check
- `GET /v1/status` - System status and metrics
- `GET /v1/metrics` - Prometheus metrics

### AI Generation
- `POST /v1/generate/text` - Text generation with BLOOM
- `POST /v1/generate/image` - Image generation with Stable Diffusion
- `POST /v1/generate/code` - Code generation

## 🔒 Security Features

### Zeroth Gate Ethical Validation
- Intent validation for all AI operations
- Ethical compliance checking
- Malicious request blocking

### Authentication & Authorization
- JWT-based authentication
- Role-based access control
- Rate limiting and throttling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Remember**: Only with good intent and a good heart does the system function. 🌟
