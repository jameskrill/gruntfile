# Sample Gruntfile.js and package.json

The repository serves as a starting place for most web dev projects.

It includes
* grunt
* grunt-sass
* grunt-contrib-watch
* grunt-contrib-concat
* grunt-contrib-uglify

It registers a ```build``` task which calls: ```sass, concat, uglify```

The ```default``` task calls ```watch```

It also uses livereload and watches JS, SCSS and PHP files.
