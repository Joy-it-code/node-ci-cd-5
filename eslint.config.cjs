module.exports = {
  languageOptions: {
    ecmaVersion: "latest", // Specify ECMAScript version
    globals: {
      window: "readonly", // For browser
      document: "readonly", // For browser
      process: "readonly", // For Node.js
      console: "readonly",
    },
  },
  rules: {
    "no-console": "off", // Allow console statements
    "semi": ["error", "always"], // Enforce semicolons
  },
  ignores: [".env", "node_modules/"], // Files or directories to ignore
};
