// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'quick-start',
    {
      type: 'category',
      label: 'Plugin Development Guide',
      collapsed: false,
      items: [
        'plugin-development-guide/plugin-name',
        'plugin-development-guide/graphic-design',
        'plugin-development-guide/warning-text',
        'plugin-development-guide/about-dialog',
        'plugin-development-guide/logo-image',
        'plugin-development-guide/context-menu',
        'plugin-development-guide/loading-bar',
        'plugin-development-guide/message-box',
        'plugin-development-guide/config-file',
        'plugin-development-guide/one-time-plugin',
        'plugin-development-guide/exception',
        'plugin-development-guide/minimum-compatible-version',
        'plugin-development-guide/dark-mode',
        'plugin-development-guide/proxy-host',
        'plugin-development-guide/update-check',
        'plugin-development-guide/export-and-launch',
      ],
    },
  ],
};

module.exports = sidebars;
