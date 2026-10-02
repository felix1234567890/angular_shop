import { defineConfig } from 'eslint/config';
import angular from 'angular-eslint';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default defineConfig([
  {
    files: ['src/**/*.ts'],
    extends: [ts.configs['flat/recommended'], angular.configs.tsRecommended],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
      },
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
    },
    rules: {
      // Preserve the eager behavior added by the Angular 22 migration.
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' }
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' }
      ],
    },
  },
  {
    files: ['src/**/*.html'],
    extends: [angular.configs.templateRecommended],
  },
]);
