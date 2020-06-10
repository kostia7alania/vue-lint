module.exports = {
  root: true,
  // https://github.com/airbnb/javascript/blob/master/README.md
  // https://eslint.vuejs.org/rules/#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead
  // https://github.com/miherlosev/eslint-plugin-testcafe
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier",
  ],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    // https://eslint.vuejs.org/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error
    parser: "babel-eslint",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  // https://eslint.org/docs/user-guide/configuring#specifying-globals
  globals: {
    process: true,
  },
  // https://eslint.org/docs/user-guide/configuring#configuring-plugins
  // https://github.com/vuejs/eslint-plugin-vue
  plugins: [
    "vue", // required to lint *.vue files
  ],
  // add your custom rules here
  rules: {
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e", // for e.returnvalue
        ],
      },
    ],
    // for vuex modules
    "no-shadow": [
      "error",
      {
        allow: ["state", "getters"],
      },
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    // allow async-await
    "generator-star-spacing": "off",
    "space-before-function-paren": "off",
    "no-mixed-operators": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        ignores: [],
      },
    ],
    "handle-callback-err": "off",
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "max-len": [
          "error",
          200,
          2,
          {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
      },
    },
  ],
};
