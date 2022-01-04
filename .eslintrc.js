module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true,
    "jest": true,
    "cypress/globals": true
  },
  
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-strongly-recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 13
  },
  "plugins": [
    "vue",
    'cypress'
  ],
  "rules": {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
};