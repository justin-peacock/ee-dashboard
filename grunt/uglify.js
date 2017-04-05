module.exports = {
	/**
	 * grunt-contrib-uglify
	 *
	 * Minify JavaScript files with UglifyJS
	 *
	 * @link https://www.npmjs.com/package/grunt-contrib-uglify
	 */
	options: {
		mangle: {
			except: ['jQuery']
		},
		banner: '/*! <%= package.title %>\n' +
		' * <%= package.homepage %>\n' +
		' * Copyright (c) <%= grunt.template.today("yyyy") %>;\n' +
		' * Licensed GPLv2+\n' +
		' */\n'
	},
	main: {
		files: {
			'assets/js/foundation.js': 'assets/js/foundation.js',
			'assets/js/html5shiv.js': 'assets/js/html5shiv.js'
		}
	}
};
