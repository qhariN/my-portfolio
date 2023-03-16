module.exports = {
  extends: [
    'standard',
    'plugin:astro/recommended'
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser'
    }
  ]
}
