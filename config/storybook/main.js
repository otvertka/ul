// const path = require('path');

module.exports = {
    stories: [
        // "../../src/**/*.stories.mdx",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
      "@storybook/addon-essentials",
      "@storybook/addon-links",
      "@storybook/addon-interactions"
    ],
    framework: "@storybook/react",
    core: {
      builder: "webpack5"
    },
    
  };
    