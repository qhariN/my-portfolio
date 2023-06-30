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
      // https://github.com/ota-meshi/eslint-plugin-astro/issues/132
      files: ['*.ts', '**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser'
    }
  ]
}
