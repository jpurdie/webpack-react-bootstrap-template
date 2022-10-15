module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    // 'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': ['error'],
    'no-console': ['off', { allow: ['warn', 'error'] }],
  },
  ignorePatterns: ['dist/*'],
  settings: {
    // 'import/resolver': {
    //   [require.resolve('eslint-import-resolver-node')]: {
    //     extensions: ['.js'],
    //   },
    // },
  },
};
