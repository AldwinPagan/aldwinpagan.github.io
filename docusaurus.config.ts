import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Aldwin Pagan',
  tagline: 'Aldwin Pagan - Scalable, cost-efficient systems for the AI era.',
  // favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    experimental_faster: true,
  },

  // Set the production url of your site here
  url: 'https://www.aldwinpagan.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AldwinPagan', // Usually your GitHub org/user name.
  projectName: 'aldwinpagan.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  githubHost: 'github.com',
  deploymentBranch: 'gh-pages',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Aldwin Pagan',

      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [

        {to: '#about', label: 'About', position: 'right'},
        {to: '#services', label: 'Services', position: 'right'},
        {to: '#challenges', label: 'Why Choose Me?', position: 'right'},
        {to: '#testimonials', label: 'Testimonials', position: 'right'},
        {to: '#contact', label: 'Contact Me', position: 'right'},
        // {to: '/blog', label: 'Blog', position: 'right'},
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Aldwin Pagan. Built with Docusaurus.`,
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        {
          label: 'GitHub',
          to: 'https://github.com/AldwinPagan',
          // items: [
          //   {
          //     label: 'Blog',
          //     to: '/blog',
          //   },
          //   {
          //     label: 'GitHub',
          //     href: 'https://github.com/AldwinPagan',
          //   },
          //   {
          //     label: 'LinkedIn',
          //     href: 'https://www.linkedin.com/in/aldwinpagan/', 
          //   }
          // ],
        },
        {
          label: 'LinkedIn',
          to: 'https://www.linkedin.com/in/aldwinpagan/',
        },

      ],
    },
    // prism: {
    //   theme: prismThemes.github,
    //   darkTheme: prismThemes.dracula,

    // },
    
     colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
  { name: 'description', content: 'I help business owners future-proof their tech with scalable systems, cost-efficient architecture, and AI-enhanced solutions.' },
  { name: 'robots', content: 'index, follow' },
  { name: 'keywords', content: 'Fractional CTO, Solutions Architect, Scalable Systems, AI Integration, Tech Strategy, Software Architecture, Business Technology, Aldwin Pagan' },
  { name: 'author', content: 'Aldwin Pagán' },

  // Twitter
  // { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'Aldwin Pagán – Fractional CTO & Solutions Architect' },
  { name: 'twitter:description', content: 'I help business owners future-proof their tech with scalable systems, cost-efficient architecture, and AI-enhanced solutions.' },
  { name: 'twitter:image', content: 'https://www.aldwinpagan.com/og-image.png' },
  { name: 'twitter:creator', content: '@aldwinpagan' },

  // Theme
  { name: 'theme-color', content: '#4C6FFF' }
],

  } satisfies Preset.ThemeConfig,
  themes: [
    // [
    //   '@easyops-cn/docusaurus-search-local',
    //   {
    //     indexPages: true,
    //     docsRouteBasePath: '/docs',
    //     hashed: true,
    //     language: ['en', 'es'],
    //     highlightSearchTermsOnTargetPage: false,
    //     searchResultContextMaxLength: 50,
    //     searchResultLimits: 8,
    //     searchBarShortcut: true,
    //     searchBarShortcutHint: true
    //   }
    // ]
  ],
  plugins:[
    ['./src/plugins/tailwind-config.ts',{}],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true
      })
    ],
    //     [
    //   './src/plugins/blog-plugin',
    //   {
    //     path: 'blog',
    //     editLocalizedFiles: false,
    //     blogTitle: 'Blog',
    //     blogDescription: 'Blog description is here ...',
    //     blogSidebarCount: 'ALL',
    //     blogSidebarTitle: 'List blog',
    //     routeBasePath: 'blog',
    //     include: ['**/*.md', '**/*.mdx'],
    //     exclude: [
    //       '**/_*.{js,jsx,ts,tsx,md,mdx}',
    //       '**/_*/**',
    //       '**/*.test.{js,jsx,ts,tsx}',
    //       '**/__tests__/**'
    //     ],
    //     postsPerPage: 6,
    //     truncateMarker: /<!--\s*(truncate)\s*-->/,
    //     showReadingTime: true,
    //     onUntruncatedBlogPosts: 'ignore',
    //     // Remove this to remove the "edit this page" links.
    //     editUrl:
    //       'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/',
    //     remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
    //   }
    // ]
  ]
};

export default config;
