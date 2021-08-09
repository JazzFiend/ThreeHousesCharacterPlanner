module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'lines-between-class-members': 'off',
    'max-len': ["error", { "code": 120 }],
    '@typescript-eslint/lines-between-class-members': 'off',
    "jest/expect-expect": [
      "error",
      {
        "assertFunctionNames": ["expect*"]
      }
    ]
  },
  ignorePatterns: ['.eslintrc.js', 'jest.config.js', 'dist/*', 'coverage/*'],
};
