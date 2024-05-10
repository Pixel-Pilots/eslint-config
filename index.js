module.exports = {
  parser: "@typescript-eslint/parser",
  // eslint-configs
  extends: ["prettier", "plugin:@typescript-eslint/recommended"],
  // eslint-plugins
  plugins: ["@typescript-eslint", "prettier"],
  // enabling/disabling/changing level of rules
  rules: {
    "prettier/prettier": "error",
    "no-console": "warn",
    "no-debugger": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn", // or "warn"
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  prettier: {
    rules: {
      semi: false,
      singleQuote: true,
      useTabs: false,
      tabWidth: 2,
      arrowParens: "always",
      printWidth: 110,
      endOfLine: "auto",
      trailingComma: "all"
    },
  }
};
