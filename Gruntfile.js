module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				livereload: true,
		    },	    
			scripts: {
				files: ['public/stylesheets/less/**/*.less', 'public/js/**'],
				tasks: ['less']
			}
		},
		less: {
		    options: {
		        paths: 'public/stylesheets/'
		    },
		    src: {
		        expand: true,
		        cwd: 'public/stylesheets/',
		        src: [
		            'less/**/*.less'
		        ],
		        ext: '.css',
		        dest: 'public/stylesheets/css/',
		        rename: function(dest, src) {
		        	console.log(src);
		        	console.log(dest);	
		        	var array = src.split("/"), filename = array[array.length - 1];

		          return dest + filename.split(".")[0] + ".css";
		        }
		    }
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "public/js",
					mainConfigFile: "public/js/main.js",
					include: [
						"main"
					],
					out: "public/js/main.min.js"
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', 'watch');
};