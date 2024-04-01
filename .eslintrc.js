module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
  ],
  rules: {
    // Set all rules to 'off' to ignore warnings
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'react/state-in-constructor': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-multiple-empty-lines': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    // Add more rules here if needed
  },
};
