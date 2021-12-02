module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:prettier/recommended',
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
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './tsconfig.eslint.json',
    ],
  },
};