module.exports = {
  // ...
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  rules: {
    // ...
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'linebreak-style': ['error', 'windows'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['to']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 120,
        semi: true
      }
    ]
  },
  plugins: ['prettier']
}
