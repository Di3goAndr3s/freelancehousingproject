"use strict";
module.exports = function (grunt) {
	grunt.initConfig({

		//    project: {
		//  app: 'app',
		//  assets: '<%= project.app %>/assets',
		//  src: '<%= project.assets %>/src',
		//  css: [
		//    '<%= project.src %>/scss/style.scss'
		//  ],
		//  js: [
		//    '<%= project.src %>/js/*.js'
		//  ]
		//},





		project: {
			javascript: {
				main: ['development/js/main.js'],
				ours: ['development/js/angular/*.js'],
				lib: ['development/libraries/jquery.scrollTo/jquery.scrollTo.js', 'development/libraries/jquery.easing/js/jquery.easing.js']
			},
			pkg: grunt.file.readJSON('./package.json')
		},
		//    stylus: {
		//      build: {
		//        options: {
		//          compress: false
		//        },
		//        files: {
		//          "development/css/style.css": "development/stylus/main.styl"
		//        }
		//      }
		//    },
		//    concat_css: {
		//      options: {
		//        // Task-specific options go here.
		//      },
		//      all: {
		//        src: ["development/bower_components/bootstrap/dist/css/bootstrap.min.css", "development/bower_components/font-awesome/**/*.min.css", "development/bower_components/normalize.css/normalize.css", "development/bower_components/bootstrap/dist/css/bootstrap-theme.min.css", "development/bower_components/angular-xeditable/dist/css/xeditable.css", 'development/bower_components/bootstrap-datepicker/css/datepicker.css'],
		//        dest: "development/css/lib.css"
		//      },
		//    },
		//   notify: {
		//    watch: {
		//      options: {
		//        title: 'Task Complete',  // optional
		//        message: 'SASS and Uglify finished running', //required
		//      }
		//    },
		//   jade: {
		//      options: {
		//        message: 'Server is ready!'
		//      }
		//    }
		//  },
		//    jade: {
		//      compile: {
		//        options: {
		//          data: {
		//            debug: true
		//          },
		//          pretty: true
		//        },
		//        files: {
		//          "production/index.html": ["development/jade/index.jade"],
		//        }
		//      }
		//    },
		//    uglify: {
		//      my_target: {
		//        options: {
		//          sourceMap: true,
		//          sourceMapName: 'production/assets/js/sourcemap.map',
		//          banner: '/* Prodcution Javascript */'
		//        },
		//        files: {
		//          'production/assets/js/main.min.js': ['development/js/main.js']
		//        }
		//      }
		//    },
//		compress: {
//			main: {
//				options: {
//					archive: 'site.zip'
//				},
//				files: [
//					{
//						expand: true,
//						cwd: 'production/',
//						src: ['**'],
//						dest: ''
//					},
//				]
//			}
//		},
		//  csslint: {
		//  lax: {
		//    options: {
		//      import: false
		//    },
		//    src: ['production/assets/css/**/*.css']
		//  }
		//},
		//    cssmin: {
		//      minify: {
		//        expand: true,
		//        cwd: 'development/css/',
		//        src: ['*.css', '!*.min.css'],
		//        dest: 'production/assets/css/',
		//        ext: '.min.css'
		//      }
		//    },
		//  imagemin: {
		//   dynamic: {
		//    options: {
		//     optimizationLevel: 3
		//    },
		//    files: [{
		//     expand: true,
		//     cwd: 'development/img/',
		//     src: ['**/*.{png,jpg,gif}'],
		//     dest: 'production/assets/img/'
		//}]
		//   }
		//  },
		//    connect: {
		//      options: {
		//        port: 9000,
		//        hostname: 'localhost',
		//        livereload: 35729
		//      },
		//      livereload: {
		//        options: {
		//          open: true,
		//          base: ['production']
		//        }
		//      }
		//    },
		//       sass: {
		//    dist: {
		//      files: {
		//        'production/css/main.css': 'development/sass/main.sass',
		//
		//      }
		//    }
		//  },
		//      sass: {                                 // task
		//        dist: {                             // target
		//            files: {                        // dictionary of files
		//                'main.css': 'main.scss'     // 'destination': 'source'
		//            }
		//        },
		//        dev: {                              // another target
		//            options: {                      // dictionary of render options
		//                sourceMap: true
		//            },
		//            files: {
		//                'main.css': 'main.scss'
		//            }
		//        }
		//    },
		//        compass: {                  // Task
		//    dist: {                   // Target
		//      options: {              // Target options
		//        sassDir: 'development/sass/',
		//        cssDir: 'production/css/',
		//        environment: 'production',
		//
		//      }
		//    }
		//  },
		//    autoprefixer: {
		//      options: {
		//        browsers: ['last 2 version', 'ie 8', 'ie 9']
		//      },
		//      multiple_files: {
		//        expand: true,
		//        flatten: true,
		//        src: 'development/css/*.css', // -> src/css/file1.css, src/css/file2.css
		//        dest: 'development/css/' // -> dest/css/file1.css, dest/css/file2.css
		//      },
		//    },
		//       htmlmin: {
		//      dist: {
		//        options: {
		//          collapseWhitespace: true,
		//          collapseBooleanAttributes: true,
		//          removeCommentsFromCDATA: true,
		//          removeOptionalTags: true
		//        },
		//        files: [{
		//          expand: true,
		//          cwd: 'production',
		//          src: ['*.html', 'views/{,*/}*.html'],
		//          dest: 'production'
		//        }]
		//      }
		//    },
		    watch: {
		      options: {
		        livereload: true
		      },
		      //      styles: {
		      //        files: ['**/*.less'],
		      //        tasks: ['less'],
		      //        options: {
		      //          nospawn: true,
		      //        }
		      //      },
		//      styles: {
		//        files: ['development/stylus/*.styl'],
		//        tasks: ['stylus'],
		//        options: {
		//          livereload: true
		//        }
		//      },
		//      concat_css: {
		//        files: ['development/css/*.css'],
		//        tasks: ['concat_css'],
		//        options: {
		//          livereload: true
		//        }
		//      },
		//      //   imagemin: {
		//      //    files: ['development/img/*.{png,jpg,gif}'],
		//      //    tasks: [' imagemin'],
		//      //    options: {
		//      //     livereload: true
		//      //    }
		//      //   },
		//      jade: {
		//        files: ['development/jade/*.jade'],
		//        tasks: ['jade'],
		//        options: {
		//          livereload: true
		//        }
		//      },
		//
		//      autoprefixer: {
		//        files: ['development/css/style.css'],
		//        tasks: ['autoprefixer'],
		//        options: {
		//          livereload: true
		//        }
		//      },
		//      cssmin: {
		//        files: ['development/css/style.css'],
		//        tasks: ['cssmin'],
		//        options: {
		//          livereload: true
		//        }
		//      },


		//      uglify: {
		//         files: ['development/js/main.js'],
		//           tasks: ['uglify'],
		//           options: {
		//           livereload: true
		//           }
		//      },
		gruntfile: {
			files: 'Gruntfile.js',
			tasks: ['default']
		},
		javascript: {
			files: '<%= project.javascript.ours %>',
			tasks: ['concat']
		},
		javascriptMain: {
			files: '<%= project.javascript.main %>',
			tasks: ['concat']
		},
		javascriptLib: {
			files: '<%= project.javascript.lib %>',
			tasks: ['jshint', 'concat']
		}
	},
					 concat: {
					 javascript_ours: {
					 options: {
					 banner: '"use strict";\n'
					 },
					 src: '<%= project.javascript.ours %>',
					 dest: 'development/js/app.js'
					 },
					 javascript_lib: {
					 src: '<%= project.javascript.lib %>',
					 dest: 'production/assets/js/lib/libs.min.js'
					 },
					 javascript_main: {
					 src: '<%= project.javascript.main %>',
					 dest: 'development/js/main.js'
					 }
					 },
					 //  jshint: {
					 //   options: {
					 //    strict: false,
					 //    laxbreak: true,
					 //    debug: true,
					 //    globals: {
					 //     angular: true,
					 //     jQuery: true,
					 //     $: true,
					 //     _: true
					 //    }
					 //   },
					 //   all: '<%= project.javascript.ours %>'
					 //  },
					 concurrent: {
					 target: {
					 tasks: ['watch'],
					 options: {
					 logConcurrentOutput: true
					 }
					 }
					 }
					 });
	// grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	//  grunt.loadNpmTasks('grunt-contrib-less');
	//  grunt.loadNpmTasks('grunt-contrib-uglify');
	//  grunt.loadNpmTasks('grunt-contrib-compress');
	//  grunt.loadNpmTasks('grunt-contrib-stylus');
	//  grunt.loadNpmTasks('grunt-contrib-jade');
	//  grunt.loadNpmTasks('grunt-contrib-watch');
	//  grunt.loadNpmTasks('grunt-concurrent');
	//  grunt.loadNpmTasks('grunt-contrib-connect');
	//  grunt.loadNpmTasks('grunt-notify');
	// grunt.loadNpmTasks('grunt-contrib-csslint');
	//  grunt.loadNpmTasks('grunt-contrib-imagemin');
	//  grunt.loadNpmTasks('grunt-autoprefixer');
	//    grunt.loadNpmTasks('grunt-contrib-htmlmin');
	//  grunt.loadNpmTasks('grunt-contrib-cssmin');
	//  grunt.loadNpmTasks('grunt-concat-css');
	//    grunt.loadNpmTasks('grunt-contrib-sass');
	//    grunt.loadNpmTasks('grunt-contrib-compass');
	//    grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['stylus', 'autoprefixer', 'cssmin', 'concat_css', 'jade', 'concat', 'compress', 'connect', 'concurrent', 'notify']);
	grunt.registerTask('production', ['stylus', 'cssmin', 'concat_css', 'jade', 'concat', 'compress', 'autoprefixer', 'connect', 'concurrent']);
	grunt.registerTask('dev', ['stylus', 'cssmin', 'jade', 'concat_css', 'concat', 'autoprefixer', 'connect', 'concurrent']);


	//TASKS
	grunt.registerTask('html', ['jade']);
	grunt.registerTask('server', ['connect']);
	grunt.registerTask('test1', ['sass']);
	grunt.registerTask('test2', ['compass']);
	grunt.registerTask('js', ['concat']);
	//grunt.registerTask('css', ['sass']);
};





