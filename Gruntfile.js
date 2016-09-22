/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({        
		pkg: grunt.file.readJSON('package.json'),

			// SASS for compile scss into css
			sass: {
				dist: {
					options:{
						sourcemap: 'auto',
						style: 'compact',
						update: true
					},
					files: 
						grunt.file.
							expandMapping(
							[
								'**/*.scss',
							],
							'builds',
								{
									rename: function(destBase, destPath) {
										var pathTemp = "";
										pathTemp = destPath.replace("pages", "builds");
										
										return pathTemp.replace('.scss', '.css');
									}
								}
							)

				}
			},

			// WATCH for hot reload SASS
			watch: {
				css: {
					files: '**/*.scss',
					tasks: ['sass']
				}
			},

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default');
};
