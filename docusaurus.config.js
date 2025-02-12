// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Community 487 App',
  tagline: 'Please excuse our appearance while we are under construction. Thanks!',
  url: 'https://community-meta-app.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'asiakay', // Usually your GitHub org/user name.
  projectName: 'community-487', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false  /*{

          sidebarPath: require.resolve('./sidebars.js'), */
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
/*            editUrl:
            'https://github.com/asiakay/community-meta-app',
        } */, 
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/asiakay/community-meta-app',
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
        title: 'Community 487',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
/*           {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Community',
          }, */
          {to: '/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/asiakay/community-meta-app',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      /* footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/asialakay',
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
                href: 'xhttps://github.com/asiakay/community-meta-app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Community 487 App. Built with Docusaurus.`,
      }, */
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
