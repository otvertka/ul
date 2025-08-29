module.exports = {
    settings: {
        react: {
            version: "17.0.2"
        }
    },

    env: {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    parser: "@typescript-eslint/parser",
    overrides: [
        {
            files: ['**/*.test.{ts,tsx}', '**/*.stories.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len':'off'
            },
        },

        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        // "project": "./tsconfig.json",
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next",
        "react-hooks"
    ],
    rules: {
        "react/jsx-indent": ["error", 4],
        indent: ["error", 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        '@typescript-eslint/ban-ts-comment': 'warn',
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        'react/require-default-props': 'off',
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "i18next/no-literal-string": ['error', {markupOnly: true, ignoreAttribute: ['data-testid', 'to']}],
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "off",
        'react/display-name': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-param-reassign": 'off',

    },
    globals: {
        '__IS_DEV__': true,
        '__API__': true,
    }   
}
