module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 2020,
    'sourceType': 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/no-duplicates': ['error', { considerQueryString: true }],
    'import/order': [
      'error',
      { 'newlines-between': 'always', alphabetize: { order: 'asc', caseInsensitive: true } },
    ],
    'import/newline-after-import': ['error'],
    'import/no-webpack-loader-syntax': ['off'],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': ['error'],
    'react/no-unescaped-entities': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: false,
      }
    ],
    'react-hooks/exhaustive-deps': ['off'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
};
