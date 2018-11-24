/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Acme Dev Docs',
  tagline: 'A brand new Docusaurus site, deployed to Netlify',
  url: 'https://your-docusaurus-test-site.com', // TODO
  baseUrl: '/',

  projectName: 'netlify-dev-docs',
  organizationName: 'netlify',

  headerLinks: [
    {doc: 'intro', label: 'Docs'},
    {page: 'help', label: 'Contact'},
    {blog: true, label: 'Showcase'},
  ],


  /* path to images for header/footer */
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Netlify.com`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',

  cleanUrl: true,

  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

};

module.exports = siteConfig;
