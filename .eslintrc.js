module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: [
    'react',
    'react-native', 
    'react-hooks', 
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'consistent-return': 0,
    complexity: ['error', 12],
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'default-case': 0,
    '@typescript-eslint/no-unused-vars': ['error', {args: 'none'}],
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-unused-styles': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react/require-default-props': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};