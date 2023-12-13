module.exports = {
  extends: [
    '@master/css',
    'standard-with-typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    extraFileExtensions: [".astro"],
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ["*.astro"],
      extends: ['plugin:astro/recommended'],
      parser: "astro-eslint-parser",
    }
  ],
  rules: {
		'@typescript-eslint/triple-slash-reference': 'off'
	},
  ignorePatterns: ['*.cjs', '*.js']
}
