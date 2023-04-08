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
};
