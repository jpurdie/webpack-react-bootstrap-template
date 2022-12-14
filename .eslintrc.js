module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier', 'react-hooks'],
  rules: {
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'prettier/prettier': 'error',
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-no-bind': 'error',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': ['off', { allow: ['warn', 'error'] }],
  },
  ignorePatterns: ['dist/*'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.63.1',
    },
  },
};
