module.exports = {
  content: ['./**/*.tsx'], // Any file in inside directory -> any filename with tsx ext
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
