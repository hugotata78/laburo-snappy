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
		'indent':'off',
		'no-unused-vars': 1,
		'vue/no-unused-components': 1,
		'no-useless-escape': 0,
		'no-case-declarations': 1,
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
