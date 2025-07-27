# Zeropoint Protocol AI

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

**⚠️ CONTRIBUTION POLICY: View-only; no PRs/forks/clones without signed agreement. Contact legal@zeropointprotocol.ai for licensing inquiries.**

This project follows ethical AI principles with Zeroth-gate compliance. All contributions must align with responsible AI development practices.

### **Contribution Requirements**

* All contributions must pass ethical validation through the Zeroth-gate system
* Code must align with the Zeroth Principle: "Only with good intent and a good heart does the system function"
* Contributions must not enable harmful or malicious applications
* All code must respect human rights and dignity

### **Getting Started**

1. Contact legal@zeropointprotocol.ai for licensing inquiries
2. Complete a signed license agreement
3. Follow the ethical guidelines and coding standards
4. Submit your contribution with appropriate documentation

For more information, see our Contributing Guidelines.

## 📄 License

### **View-Only License - © 2025 Zeropoint Protocol, Inc., a Texas C Corporation with principal offices in Austin, TX. All Rights Reserved.**

This software is provided for **VIEW-ONLY** purposes under a proprietary license. All rights are reserved by Zeropoint Protocol, Inc.

### **License Terms**

#### **PROHIBITED ACTIVITIES:**

* **Cloning** this repository
* **Downloading** the source code
* **Forking** this repository
* **Modifying** any code or documentation
* **Running** the software
* **Distributing** the software or any derivatives
* **Contributing** code or documentation
* **Creating derivative works**
* **Commercial use** of any kind

#### **PERMITTED ACTIVITIES:**

* **Viewing** the code and documentation on GitHub
* **Reading** the documentation for informational purposes
* **Contacting** us for licensing inquiries

### **License Requirements**

To obtain rights beyond view-only access, you must:

1. Contact legal@zeropointprotocol.ai
2. Complete a signed license agreement
3. Receive written approval from Zeropoint Protocol, Inc.
4. Comply with all terms and conditions of the signed agreement

### **Contact Information**

* **Legal Questions**: legal@zeropointprotocol.ai
* **License Inquiries**: legal@zeropointprotocol.ai
* **Website**: https://zeropointprotocol.ai/legal

### **License Summary**

```
© 2025 Zeropoint Protocol, Inc., a Texas C Corporation with principal offices in Austin, TX. All Rights Reserved.
View-Only License: No clone, modify, run or distribute without signed license.
See LICENSE.md for details.
```

For the complete license text, see LICENSE.md.

---

**Remember**: Only with good intent and a good heart does the system function. 🌟
