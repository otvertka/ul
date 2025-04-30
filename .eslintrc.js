module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        // "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "overrides": [
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
    "parserOptions": {
        ecmaFeatures: {
            jsx: true
        },
        // "project": "./tsconfig.json",
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        "import/no-unresolved": "off",
        indent: [2, 4],
        "react/react-in-jsx-scope": "off",
        "i18next/no-literal-string": ['error', {markupOnly: true, ignoreAttribute: ['data-testid', 'to']}],

    }
}
