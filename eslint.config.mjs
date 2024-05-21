import path from 'path';
import url from 'node:url';
import globals from 'globals';
import pluginJs from '@eslint/js';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const flatCompat = new FlatCompat(
    { baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended },
);

export default [
    ...fixupConfigRules(flatCompat.extends('airbnb', 'airbnb/hooks', 'airbnb-typescript')),
    {
        languageOptions: {
            ecmaVersion: 'latest',
            parser: tsParser,
            parserOptions: {
                allowJs: true,
                sourceType: 'module',
                project: ['./tsconfig.json'],
            },
            globals: {...globals.browser, __IS_DEV__: true},
        },
    },
    {
        ignores: ['./eslint.config.mjs'],
        rules: {
            'import/no-unresolved': 'off',
            indent: ['warn', 4],
            'react/require-default-props': 'off',
            'import/extensions': 'off',
            'import/prefer-default-export': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-indent': ['warn', 4],
            'react/jsx-indent-props': ['warn', 4],
            '@typescript-eslint/indent': ['warn', 4],
            'no-unused-vars': 'warn',
            'react/jsx-props-no-spreading': 'warn',
            'import/no-extraneous-dependencies': 'off',
            '@typescript-eslint/naming-convention': ['warn', {
                selector: 'enum',
                format: ['UPPER_CASE'],
            }],
            'no-underscore-dangle': 'off',
        },
    },
];
