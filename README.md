# Zeropoint Protocol Corporate Website

This repository hosts the corporate website for Zeropoint Protocol, built with Docusaurus and deployed on Cloudflare Pages at [https://zeropointprotocol.ai](https://zeropointprotocol.ai). The website provides public-facing information about the Zeropoint Protocol project, including its mission, technology, use cases, and contact details. The core agentic consensus platform is hosted separately at [https://github.com/FlynnVIN10/Zeropoint-Protocol](https://github.com/FlynnVIN10/Zeropoint-Protocol).

## Deployment

- **Platform**: Cloudflare Pages
- **Framework**: Docusaurus
- **Build Command**: `npm install && npm run build`
- **Output Directory**: `build`
- **Environment**: Production

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve
```

## Status Synchronization
The website automatically syncs deployment status from the main project repository via `scripts/sync-status.js`, which runs before each build.

## Pages
- **Home**: Overview and mission statement.
- **Technology**: AI features and capabilities.
- **Use Cases**: Value propositions and applications.
- **Status**: Current system status and deployment progress.
- **Legal**: Company information and licensing.
- **Contact**: Contact information and support.

## Build Process
1. Syncs status from the main project's `DEPLOYMENT_STATUS.md`.
2. Builds the static site with Docusaurus.
3. Deploys to Cloudflare Pages.

## Custom Domain
Accessible at [https://zeropointprotocol.ai](https://zeropointprotocol.ai) with Full (strict) SSL/TLS encryption and Always Use HTTPS enabled.

## Repository Structure
```
zeropointprotocol.ai/
├── src/
│   ├── pages/           # Main website pages
│   └── theme/           # Docusaurus theme customization
├── docs/                # Documentation pages
├── static/              # Static assets
├── scripts/             # Build scripts
└── docusaurus.config.js # Docusaurus configuration
```

## Contributing
Contributions are governed by the main project repository's guidelines at [https://github.com/FlynnVIN10/Zeropoint-Protocol](https://github.com/FlynnVIN10/Zeropoint-Protocol).

## Relationship to Core Platform
This repository hosts the corporate website for Zeropoint Protocol. The core agentic consensus platform, including distributed machine learning and ethical AI governance, is located at [https://github.com/FlynnVIN10/Zeropoint-Protocol](https://github.com/FlynnVIN10/Zeropoint-Protocol).

## License
© 2025 Zeropoint Protocol, Inc. All Rights Reserved.  
View-Only License: See [LICENSE.md](LICENSE.md) for details.
