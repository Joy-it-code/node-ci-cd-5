module.exports = [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // Ensures compatibility with ES modules
      globals: {
        window: "readonly",
        document: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-console": "off", // Allow console logs
      "semi": ["error", "always"], // Enforce semicolons
    },
    ignores: [".env", "node_modules/"], // Ignore these files
  },
];
