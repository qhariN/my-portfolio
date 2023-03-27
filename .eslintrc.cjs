module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:astro/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser'
    }
  ]
}
