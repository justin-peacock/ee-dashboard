module.exports = {
	/**
	 * grunt-sass
	 *
	 * Compile Sass to CSS using node-sass
	 *
	 * @link https://www.npmjs.com/package/grunt-sass
	 */
	dist: {
		options: {
			sourceMap: true,
			// @link https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/
			indentedSyntax: true,
			indentType: 'tab',
			indentWidth: '1',
			includePaths: [
				'bower_components/foundation-sites/scss',
				'bower_components/motion-ui'
			],
			outputStyle: 'expanded'
		},
		files: {
			'assets/css/main.css': 'assets/sass/main.scss',
			'assets/css/font-awesome.css': 'bower_components/font-awesome/scss/font-awesome.scss'
		}
	}
};
