module.exports = {
  languageOptions: {
    globals: {
      window: "readonly", // For browser
      document: "readonly", // For browser
      process: "readonly", // For Node.js
      console: "readonly",
    },
  },
  rules: {
    "no-console": "off",
  },
};
