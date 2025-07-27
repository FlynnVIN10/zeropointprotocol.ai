const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Zeropoint Protocol',
  tagline: 'Advanced AI system with ethical governance and distributed ML',
  url: 'https://zeropointprotocol.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Zeropoint Protocol, Inc.', // Company name
  projectName: 'zeropointprotocol.ai', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/FlynnVIN10/zeropointprotocol.ai/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/FlynnVIN10/zeropointprotocol.ai/edit/main/blog/',
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
      navbar: {
        title: 'Zeropoint Protocol',
        logo: {
          alt: 'Zeropoint Protocol Logo',
          src: 'img/logo.svg',
        },
        items: [
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
      },
      footer: {
        style: 'dark',
        links: [
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
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'License',
                to: '/docs/license',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/privacy',
              },
              {
                label: 'Terms of Service',
                to: '/docs/terms',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Legal Inquiries',
                href: 'mailto:legal@zeropointprotocol.ai',
              },
              {
                label: 'Website',
                href: 'https://zeropointprotocol.ai',
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
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zeropoint Protocol, Inc., a Texas C Corporation with principal offices in Austin, TX. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
