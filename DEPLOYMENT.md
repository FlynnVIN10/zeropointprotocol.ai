# Deployment Guide - Zeropoint Protocol AI

**© 2025 Zeropoint Protocol, Inc., a Texas C Corporation with principal offices in Austin, TX. All Rights Reserved.**

## Overview

This guide covers deploying the Zeropoint Protocol AI website to Cloudflare Pages with proper domain configuration and licensing compliance.

## Domain Configuration

- **Primary Domain**: `zeropointprotocol.ai`
- **Staging Domain**: `staging.zeropointprotocol.ai` (optional)
- **Contact**: legal@zeropointprotocol.ai

## Prerequisites

1. **Cloudflare Account**: Sign up at https://cloudflare.com
2. **Domain Registration**: Ensure `zeropointprotocol.ai` is registered and managed by Cloudflare
3. **Wrangler CLI**: Install Cloudflare's deployment tool

```bash
npm install -g wrangler
```

## Setup Steps

### 1. Authenticate with Cloudflare

```bash
wrangler login
```

### 2. Configure Domain

1. Add your domain to Cloudflare DNS
2. Update the `wrangler.toml` file with your zone ID:
   ```toml
   [env.production]
   zone_id = "your-zone-id-here"
   ```

### 3. Build and Deploy

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Deploy to Cloudflare Pages
npm run deploy:cloudflare
```

### 4. Custom Domain Setup

1. In Cloudflare Dashboard, go to Pages
2. Select your project
3. Go to Custom Domains
4. Add `zeropointprotocol.ai`
5. Configure SSL/TLS settings

## Environment Variables

Set these in Cloudflare Pages dashboard:

```bash
NODE_ENV=production
SITE_URL=https://zeropointprotocol.ai
CONTACT_EMAIL=legal@zeropointprotocol.ai
```

## Legal Compliance

### License Enforcement

The website enforces the view-only license through:

- Clear licensing terms on all pages
- Contact information for licensing inquiries
- Terms of Service and Privacy Policy
- Copyright notices throughout the site

### Required Pages

Ensure these pages are accessible:
- `/docs/license` - License agreement
- `/docs/privacy` - Privacy policy  
- `/docs/terms` - Terms of service
- `/docs/api` - API documentation

## Monitoring and Analytics

### Cloudflare Analytics

Enable Cloudflare Web Analytics for:
- Traffic monitoring
- Performance metrics
- Security insights

### Health Checks

Monitor these endpoints:
- `https://zeropointprotocol.ai/health`
- `https://zeropointprotocol.ai/docs`

## Security Configuration

### SSL/TLS Settings

- **SSL/TLS Mode**: Full (strict)
- **Minimum TLS Version**: 1.2
- **HSTS**: Enabled

### Security Headers

Configure these headers in Cloudflare:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'
```

## Backup and Recovery

### Version Control

- All changes are tracked in Git
- Tag releases for rollback capability
- Maintain staging environment for testing

### Content Backup

- Regular backups of documentation
- Legal documents stored securely
- Contact information verified regularly

## Contact Information

For deployment issues:
- **Technical Support**: legal@zeropointprotocol.ai
- **Legal Inquiries**: legal@zeropointprotocol.ai
- **Domain Issues**: Contact Cloudflare support

## License Notice

This deployment guide is part of the proprietary Zeropoint Protocol system. All rights reserved by Zeropoint Protocol, Inc.

---

**© 2025 Zeropoint Protocol, Inc., a Texas C Corporation with principal offices in Austin, TX. All Rights Reserved.** 