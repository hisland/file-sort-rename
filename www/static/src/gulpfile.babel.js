'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import concat from 'gulp-concat';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import cfg from './webpack.config.js';


var vendor_src = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/lodash/lodash.min.js',
];


gulp.watch(vendor_src, ['vendor']);
gulp.task('default', ['vendor', 'webpack']);

gulp.task('vendor', function() {
  gulp.src(vendor_src)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('../dist/'))
});
gulp.task('webpack', function() {

  cfg.watch = true;
  webpack(cfg, function(err, stats) {
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
  });

  var compiler = webpack(cfg);
  new WebpackDevServer(compiler, {
    inline: true
      // server and middleware options
  }).listen(9901, "localhost", function(err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    // gutil.log("[webpack-dev-server]", "http://localhost:9901/webpack-dev-server/index.html");

    // keep the server alive or continue?
    // callback();
  });
});
