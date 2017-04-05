module.exports = {
	'default': [
		'styles',
		'scripts',
		'notify:default'
	],
	'setup': [
		'copy:fontawesome'
	],
	'styles': [
		'clean:pre',
		'sass',
		'postcss:dev',
		'notify:styles'
	],
	'scripts': [
		'jshint',
		'concat',
		'notify:scripts'
	],
	'build': [
		'clean',
		'default',
		'postcss:build',
		'uglify',
		'notify:build'
	],
	'server': [
		'browserSync',
		'watch'
	]
};
