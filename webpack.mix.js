const mix = require('laravel-mix');

mix.js('./js/index.js', './public/js/main.js');
mix.sass('./scss/main.scss', './public/css/styles.css');

mix.webpackConfig({
    externals: {
        'leaflet': 'L'
    }
});
