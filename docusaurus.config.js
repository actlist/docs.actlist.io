// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Actlist',
  tagline: 'Easy and simply execute your own act list.',
  url: 'https://docs.actlist.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'actlist', // Usually your GitHub org/user name.
  projectName: 'docs.actlist.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/actlist/docs.actlist.io/edit/main/',
        },
        blog: false,
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
        title: 'Actlist',
        logo: {
          alt: 'Actlist Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'quick-start',
            position: 'left',
            label: 'Getting Started',
          },
          {
            to: 'https://actlist.io/plugins/',
            label: 'Explore',
            position: 'left',
          },
          {
            to: 'https://actlist.io/archives/',
            label: 'Download',
            position: 'left',
          },
          {
            to: 'mailto:contact@silentsoft.org',
            label: 'Contact',
            position: 'left',
          },
          {
            href: 'https://github.com/actlist',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/quick-start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.silentsoft.org/actlist',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/actlist/actlist',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Plugins',
                href: 'https://actlist.io/plugins',
              },
              {
                label: 'Download',
                href: 'https://actlist.io/archives/',
              },
            ],
          },
        ],
        copyright: `Copyright &copy; ${new Date().getFullYear()} silentsoft.org. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
    }),
};

module.exports = config;
