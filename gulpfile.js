var Path = require('path');

var gulp = require('gulp');
var rename = require('gulp-rename');
var merge = require('merge-stream');
var awspublish = require('gulp-awspublish');
var parallelize = require('concurrent-transform');

gulp.task('publish', function() {

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create({
    region: 'us-east-1',
    params: {
      Bucket: 'api.apis.guru'
    }
  }, {
    cacheFileName: 'your-cache-location'
  });

  // define custom headers
  var headers = {
    //TODO: setup proper caching headers
    //'Cache-Control': 'max-age=315360000, no-transform, public'
  };

  var apiV2 = gulp.src('./deploy/**')
    .pipe(prefixWithDir('v2'))
  var badges = gulp.src('./badges/**')
    .pipe(prefixWithDir('badges'));

  return merge(apiV2, badges)
    .pipe(parallelize(publisher.publish(headers), 10))
    .pipe(publisher.sync())
    .pipe(awspublish.reporter(['delete', 'create', 'update']));
});

function prefixWithDir(dir) {
  return rename(path => {
    path.dirname = Path.join(dir, path.dirname);
    return path;
  });
}
