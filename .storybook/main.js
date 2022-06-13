module.exports = {
  "stories": [
    "../**/**/*.story.mdx",
    "../**/**/*.story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
      'storybook-dark-mode',
      {
        name: 'storybook-addon-turbo-build',
        options: { optimizationLevel: 2 },
      },
  
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}