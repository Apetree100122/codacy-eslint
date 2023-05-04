module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "prettier",
    'plugin:vue-scoped-css/vue3-recommended'
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    projects: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "unused-imports"],
  rules: {
    "simple-import-sort/imports": "error",
    '@typescript-eslint/unbound-method': 'off'
  },
}
