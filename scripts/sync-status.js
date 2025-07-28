#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Sync DEPLOYMENT_STATUS.md to docs/status.md
 * This script ensures the documentation stays in sync with the deployment status
 */

const DEPLOYMENT_STATUS_PATH = path.join(__dirname, '..', '..', 'DEPLOYMENT_STATUS.md');
const DOCS_STATUS_PATH = path.join(__dirname, '..', 'docs', 'status.md');

function syncStatus() {
  try {
    // Read the deployment status file
    if (!fs.existsSync(DEPLOYMENT_STATUS_PATH)) {
      console.error('❌ DEPLOYMENT_STATUS.md not found at:', DEPLOYMENT_STATUS_PATH);
      process.exit(1);
    }

    const deploymentStatus = fs.readFileSync(DEPLOYMENT_STATUS_PATH, 'utf8');

    // Create the docs directory if it doesn't exist
    const docsDir = path.dirname(DOCS_STATUS_PATH);
    if (!fs.existsSync(docsDir)) {
      fs.mkdirSync(docsDir, { recursive: true });
    }

    // Create the status.md content with Docusaurus frontmatter
    const statusContent = `---
id: status
title: Deployment Status
sidebar_label: Deployment Status
description: Current deployment status and system health of Zeropoint Protocol infrastructure
keywords: [deployment, status, system health, infrastructure]
---

${deploymentStatus}

---

*Last updated: ${new Date().toISOString()}*

This page is automatically synced from the main project's \`DEPLOYMENT_STATUS.md\` file.
`;

    // Write the status.md file
    fs.writeFileSync(DOCS_STATUS_PATH, statusContent, 'utf8');

    console.log('✅ Successfully synced DEPLOYMENT_STATUS.md to docs/status.md');
    console.log('📄 Updated:', DOCS_STATUS_PATH);
    console.log('🕒 Timestamp:', new Date().toISOString());

  } catch (error) {
    console.error('❌ Error syncing status:', error.message);
    process.exit(1);
  }
}

// Run the sync if this script is executed directly
if (require.main === module) {
  syncStatus();
}

module.exports = { syncStatus }; 