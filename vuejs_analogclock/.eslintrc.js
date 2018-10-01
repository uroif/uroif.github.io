module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    // https://github.com/eslint/typescript-eslint-parser/issues/445 
    // 'typescript/no-unused-vars': 'error', 
    // https://github.com/vuejs/vue-cli/issues/1672 
    'space-infix-ops': 'off',
    // temporary fix for https://github.com/vuejs/vue-cli/issues/1922 
    // very strange as somehow this rule gets different behaviors depending 
    // on the presence of typescript-eslint-parser... 
    'strict': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
