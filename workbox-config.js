module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,eot,svg,ttf,woff,otf,less,scss,ico,png,jpg,gif,html,js,json}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};