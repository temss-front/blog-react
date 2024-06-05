import path from 'path';
import { fileURLToPath } from 'url';
import globals from 'globals';
import pluginJs from '@eslint/js';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const flatCompat = new FlatCompat({
    baseDirectory: __dirname,
    resolvePluginsRelativeTo: __dirname,
});

export default tseslint.config(
    {
        ignores: ['dist', 'node_modules', 'config', 'eslint.config.mjs'],
    },

    pluginJs.configs.recommended,
    ...fixupConfigRules(flatCompat.extends('airbnb')),
    ...fixupConfigRules(flatCompat.extends('airbnb/hooks')),
    ...fixupConfigRules(flatCompat.extends('airbnb-typescript')),
    ...fixupConfigRules(flatCompat.extends('plugin:i18next/recommended')),
    ...fixupConfigRules(flatCompat.plugins('i18next')),
    {
        languageOptions: {
            ecmaVersion: 'latest',
            parser: tsParser,
            parserOptions: {
                allowJs: true,
                sourceType: 'module',
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
            globals: { ...globals.browser, __IS_DEV__: true },
        },
        rules: {
            'import/no-unresolved': 'off',

            'indent': ['warn', 4],

            'react/require-default-props': 'off',

            'import/extensions': 'off',

            'import/prefer-default-export': 'off',

            'react/react-in-jsx-scope': 'off',

            'react/jsx-indent': ['warn', 4],

            'react/jsx-indent-props': ['warn', 4],

            'react/jsx-props-no-spreading': 'off',

            '@typescript-eslint/indent': ['warn', 4],

            'no-unused-vars': 'warn',

            'max-len': ['warn', { code: 100, ignoreComments: true }],

            'import/no-extraneous-dependencies': 'off',

            '@typescript-eslint/naming-convention': ['warn', {
                selector: 'enum',
                format: ['UPPER_CASE'],
            }],

            'no-underscore-dangle': 'off',

            'i18next/no-literal-string': ['warn', { markupOnly: true }],
        },
    },
);
