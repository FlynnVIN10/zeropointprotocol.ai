const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'Zeropoint Protocol',
        logo: {
          alt: 'Zeropoint Protocol Logo',
          src: 'img/logo.svg',
        },
        items: [
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
      },
      footer: {
        style: 'dark',
        links: [
          {
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
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'License',
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
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'Support',
                to: '/contact',
              },
            ],
          },
        ],
        copyright: `Copyright © 2025 Zeropoint Protocol, Inc., a Texas C Corporation with principal offices in Austin, TX. Legal & Licensing.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
