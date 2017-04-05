module.exports = {
	/**
	 * grunt-contrib-concat
	 *
	 * Concatenate files.
	 *
	 * Concatenates an array of js files set in /grunt/vars.js
	 *
	 * @link https://www.npmjs.com/package/grunt-contrib-concat
	 */
	options: {
		separator: ';\n',
		stripBanners: true,
		banner: '/*! <%= package.title %>\n' +
		' * <%= package.homepage %>\n' +
		' * Copyright (c) <%= grunt.template.today("yyyy") %>;\n' +
		' * Licensed GPLv2+\n' +
		' */\n'
	},
	foundation: {
		src: [
			// Libraries required by Foundation
			// 'bower_components/motion-ui/dist/motion-ui.js',
			'bower_components/what-input/what-input.js',

			// Core Foundation files
			'bower_components/foundation-sites/dist/js/plugins/foundation.core.js',
			'bower_components/foundation-sites/dist/js/plugins/foundation.util.*.js',

			// Individual Foundation components
			// If you aren't using a component, just remove it from the list
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.abide.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.accordion.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.accordionMenu.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.drilldown.js',
			'bower_components/foundation-sites/dist/js/plugins/foundation.dropdown.js',
			'bower_components/foundation-sites/dist/js/plugins/foundation.dropdownMenu.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.equalizer.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.interchange.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.magellan.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.offcanvas.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.orbit.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.responsiveMenu.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.responsiveToggle.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.reveal.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.slider.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.sticky.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.tabs.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.toggler.js',
			// 'bower_components/foundation-sites/dist/js/plugins/foundation.tooltip.js'
		],
		dest: 'assets/js/foundation.js'
	},
	html5hiv: {
		src: [
			'bower_components/html5shiv/dist/html5shiv.js'
		],
		dest: 'assets/js/html5shiv.js'
	}
};
