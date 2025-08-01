const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

<<<<<<< HEAD
// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Zeropoint Protocol',
  tagline: 'Ethical agentic AI',
  url: 'https://zeropointprotocol.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Zeropoint Protocol, Inc.', // Company name
  projectName: 'zeropointprotocol.ai', // Usually your repo name.
=======
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Zeropoint Protocol',
  tagline: 'Ethical Agentic AI Platform',
  url: 'https://zeropointprotocol.ai',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FlynnVIN10',
  projectName: 'zeropointprotocol',
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
<<<<<<< HEAD
          // Please change this to your repo.
          editUrl: 'https://github.com/FlynnVIN10/zeropointprotocol.ai/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/FlynnVIN10/zeropointprotocol.ai/edit/main/blog/',
=======
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
<<<<<<< HEAD
=======
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
      navbar: {
        title: 'Zeropoint Protocol',
        logo: {
          alt: 'Zeropoint Protocol Logo',
          src: 'img/logo.svg',
        },
        items: [
<<<<<<< HEAD
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            to: '/technology',
            label: 'Technology',
            position: 'left',
          },
          {
            to: '/status',
            label: 'Status',
            position: 'left',
          },
          {
            to: '/legal',
            label: 'Legal',
            position: 'left',
          },
          {
            to: '/contact',
            label: 'Contact',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/FlynnVIN10/zeropointprotocol.ai',
            label: 'GitHub',
            position: 'right',
          },
        ],
=======
          {to: '/', label: 'Home', position: 'left'},
          {to: '/technology', label: 'Technology', position: 'left'},
          {to: '/Interact', label: 'Interact', position: 'left'},
          {to: '/Dashboard', label: 'Dashboard', position: 'left'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Documentation',
          },
        ],
        style: 'dark',
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
      },
      footer: {
        style: 'dark',
        links: [
          {
<<<<<<< HEAD
            title: 'Product',
            items: [
              {
                label: 'Technology',
                to: '/technology',
              },
              {
                label: 'Use Cases',
                to: '/use-cases',
              },
              {
                label: 'Status',
                to: '/status',
              },
            ],
          },
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'API Reference',
                to: '/docs/api',
              },
=======
            title: 'Platform',
            items: [
              {
                label: 'Interact',
                to: '/Interact',
              },
              {
                label: 'Dashboard',
                to: '/Dashboard',
              },
              {
                label: 'Technology',
                to: '/technology',
              },
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'License',
<<<<<<< HEAD
                to: '/legal#licensing',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/privacy',
              },
              {
                label: 'Terms of Service',
                to: '/docs/terms',
=======
                to: '#',
                title: 'Coming Soon',
              },
              {
                label: 'Terms',
                to: '#',
                title: 'Coming Soon',
              },
              {
                label: 'Privacy',
                to: '#',
                title: 'Coming Soon',
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
<<<<<<< HEAD
                label: 'General Inquiries',
                href: 'mailto:info@zeropointprotocol.ai',
              },
              {
                label: 'Legal Inquiries',
                href: 'mailto:legal@zeropointprotocol.ai',
              },
              {
                label: 'Technical Support',
                href: 'mailto:support@zeropointprotocol.ai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/FlynnVIN10/zeropointprotocol.ai',
=======
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'Support',
                to: '/contact',
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
              },
            ],
          },
        ],
<<<<<<< HEAD
        copyright: `© 2025 Zeropoint Protocol, Inc., a Texas C Corporation with principal offices in Austin, TX. All Rights Reserved. View-Only License: No clone, modify, run or distribute without signed agreement. See <a href="/docs/license">LICENSE.md</a> and <a href="mailto:legal@zeropointprotocol.ai">legal@zeropointprotocol.ai</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
=======
        copyright: `Copyright © 2025 Zeropoint Protocol, Inc., a Texas C Corporation with principal offices in Austin, TX. Legal & Licensing.`,
      },
      prism: {
        theme: darkCodeTheme,
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
        darkTheme: darkCodeTheme,
      },
    }),
});
