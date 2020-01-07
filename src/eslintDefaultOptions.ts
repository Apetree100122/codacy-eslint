import { CLIEngine } from "eslint"

const baseConfigs: string[] = ["standard", "plugin:security/recommended"]
const typescriptConfigs: string[] = [
  "plugin:@typescript-eslint/eslint-recommended",
  "plugin:@typescript-eslint/recommended"
]

export const defaultOptions: CLIEngine.Options = {
  baseConfig: {
    extends: baseConfigs,
    env: {
      es6: true,
      node: true,
      browser: true,
      commonjs: true,
      jquery: true,
      phantomjs: true,
      jasmine: true,
      mocha: true,
      amd: true,
      worker: true,
      qunit: true
    },
    plugins: [
      "angular",
      "angularjs-security-rules",
      "babel",
      "backbone",
      "chai-expert",
      "chai-friendly",
      "compat",
      "cypress",
      "drupal",
      "ember",
      "ember-suave",
      "flowtype",
      "graphql",
      "html",
      "import",
      "jsx-a11y",
      "lodash-fp",
      "lodash",
      "m6web-i18n",
      "meteor",
      "mocha",
      "mongodb",
      "no-unsafe-innerhtml",
      "node",
      "promise",
      "react-hooks",
      "react",
      "relay",
      "security",
      "standard",
      "@typescript-eslint",
      "vue",
      "xss"
    ],
    parser: "babel-eslint",
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"],
        extends: baseConfigs.concat(typescriptConfigs),
        parser: "@typescript-eslint/parser"
      }
    ]
  }
}

export const defaultEngine = new CLIEngine(defaultOptions)
