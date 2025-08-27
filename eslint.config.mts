import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended', 'plugin:prettier/recommended'],
    languageOptions: { globals: globals.browser },
    rules: { 'prettier/prettier': 'error' },
  },
  {
    files: ['**/*.{ts,mts,cts}'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'error',
    },
  },
]);
