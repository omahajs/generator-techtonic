module.exports = {
    env: {
        amd: true,
        browser: true,
        jquery: true
    },
    globals: {
        Promise: true
    },
    rules: {
        'array-bracket-spacing': ['warn'],
        'block-scoped-var': ['error'],
        'brace-style': ['warn', '1tbs', {allowSingleLine: true}],
        'camelcase': ['warn'],
        'comma-dangle': ['warn', 'never'],
        'comma-spacing': ['warn'],
        'comma-style': ['warn'],
        'complexity': ['warn', 5],
        'curly': ['error'],
        'default-case': ['error'],
        'dot-location': ['error', 'property'],
        'dot-notation': ['warn'],
        'eqeqeq': ['error'],
        'indent': ['warn', 4, {SwitchCase: 1}],
        'keyword-spacing': ['warn'],
        'linebreak-style': ['warn', 'unix'],
        'max-depth': ['warn', 3],
        'max-len': ['warn', {code: 150, comments: 200}],
        'max-nested-callbacks': ['warn', 3],
        'max-params': ['warn', 5],
        'new-cap': ['warn'],
        'no-alert': ['warn'],
        'no-array-constructor': ['warn'],
        'no-console': ['warn'],
        'no-constant-condition': ['error'],
        'no-extra-semi': ['error'],
        'no-empty': ['warn'],
        'no-eval': ['error'],
        'no-fallthrough': ['error'],
        'no-floating-decimal': ['warn'],
        'no-implied-eval': ['error'],
        'no-magic-numbers': ['warn', {ignore: [0, 1, 2, 3, 10, 100]}],
        'no-multiple-empty-lines': ['warn', {max: 1}],
        'no-multi-spaces': ['warn', {exceptions: {VariableDeclarator: true, Property: true}}],
        'no-redeclare': ['error'],
        'no-spaced-func': ['warn'],
        'no-trailing-spaces': ['warn'],
        'no-undef': ['error'],
        'no-unexpected-multiline': ['error'],
        'no-unreachable': ['error'],
        'no-unused-vars': ['error'],
        'no-use-before-define': ['error', {functions: false}],
        'no-with': ['error'],
        'one-var': ['warn', 'never'],
        'one-var-declaration-per-line': ['warn'],
        'quotes': ['warn', 'single'],
        'radix': ['warn'],
        'semi': ['error', 'always'],
        'space-before-blocks': ['warn'],
        'space-before-function-paren': ['warn', 'never'],
        'space-infix-ops': ['warn'],
        'space-unary-ops': ['warn'],
        'strict': ['error'],
        'valid-jsdoc': ['error'],
        'valid-typeof': ['error'],
        'yoda': ['warn']
    }
}