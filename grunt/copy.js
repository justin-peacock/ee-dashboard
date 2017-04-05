module.exports = {
	/**
	 * grunt-contrib-copy
	 *
	 * Copy files and folders
	 *
	 * @link https://www.npmjs.com/package/grunt-contrib-copy
	 */
	fontawesome: {
		expand: true,
		flatten: true,
		filter: 'isFile',
		src: ['bower_components/font-awesome/fonts/**'],
		dest: 'assets/fonts/'
	}
};
