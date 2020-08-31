const mix = require('laravel-mix');

mix.browserSync({
  files: [
    'resources/views/**/*.blade.php',
    'public/**/*.*',
    'routes/**/*.php',
    '**/*.php'
  ],
    proxy: {
      target: 'http://127.0.0.1:8000' // アプリの起動アドレス
    }
  })
    .js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
