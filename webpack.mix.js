let mix = require('laravel-mix');
let HtmlWebpackPlugin = require("html-webpack-plugin");

// npx mix
// npx mix watch
// npx mix watch --hot
// npx mix --production

// npm run watch

// ejs kim err
// npm install --save-dev ejs
// npm install --save-dev ejs-compiled-loader

// npm i --save-dev html-webpack-plugin
// npm i --save-dev browser-sync
// npm install --save-dev browser-sync-webpack-plugin
// npm install --save-dev cross-env
// npm install --save-dev lodash
// npm install --save-dev popper.js

// npm i --save-dev laravel-mix@latest

mix.js('src/js/app.js', 'js')
// mix.js('src/js/app.js', 'dist').setPublicPath('dist');
// mix.js(['src/app.js', 'src/another.js'], 'dist/app.js');

mix.sass('src/scss/main.scss', 'css')
// mix.less('src/less/main.less', 'css');
mix.copyDirectory("src/images/", "dist/images")
mix.copyDirectory("src/fonts/", "dist/fonts")

mix.setPublicPath('dist');

// системне сповіщення про кожну компіляцію.
// mix.disableNotifications();
// mix.disableSuccessNotifications();


mix.webpackConfig({
    output: {
        // path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/index.ejs",
            filename: "index.html",         
            inject: false,
        }),
        // new HtmlWebpackPlugin({
        //     template: "ejs-compiled-loader!./src/index2.ejs",
        //     filename: "index2.html",
        //     inject: false
        // })
    ],
    devServer: {
        // hot: true, inline: true, contentBase: __dirname
        disableHostCheck: false,
        watchContentBase: true,
        host: "0.0.0.0",
        open: true,
        // port: 8082
    }
});

// mix.browserSync('my-domain.test');
// mix.browserSync();
// mix.browserSync('localhost');
// mix.browserSync('localhost:8000');
// mix.browserSync({
//     proxy: "http://localhost:8000"
// });
// mix.browserSync('http://your-app.test');
// mix.browserSync({proxy: "http://localhost:3000"});
// mix.browserSync({
//     server: {
//       baseDir: '.',
//       index: 'index.html',
//     },
//     port: 3000,
//     proxy: false,
//     files: '**/*',
//   });

mix.browserSync({
    server: 'dist',
    files: ['./src']
});


// mix.combine(
//     [
//         "src/vendor/dataTables/datatables.min.js",
//         "src/vendor/jqueryui/jquery-ui.min.js",
//         "src/vendor/sweetalert/sweetalert.min.js",
//         "src/vendor/validate/jquery.validate.min.js"
//     ],
//     "dist/js/vendor.js"
// );

// mix.combine(
//     [
//         "src/vendor/animate/animate.css",
//         "src/vendor/dataTables/datatables.min.css",
//         "src/vendor/font-awesome/css/font-awesome.min.css",
//         "src/vendor/jqueryui/jquery-ui.min.css",
//         //"src/vendor/sweetalert/sweetalert.css"
//     ],
//     "dist/css/vendor.css"
// ).options({
//     processCssUrls: false
// });

// // css url()
// // .example {
// //     background: url(/images/thing.png?d41d8cd98f00b204e9800998ecf8427e);
// // }
// mix.sass('src/app.scss', 'dist').options({
//     processCssUrls: false
// });

// // Скопіюйте один файл
// mix.copy('node_modules/foo/bar.css', 'public/css');
// // Скопіюйте кілька файлів
// mix.copy([
//     'src/foo/one.css',
//     'src/bar/two.css'
// ], 'public/css');
// // Скопіюйте каталог
// mix.copy('node_modules/vendor/fonts', 'public');
// // or
// mix.copyDirectory('node_modules/vendor/fonts', 'public');
// // Якщо ви хочете його «вирівняти», надайте пошук підстановки.
// mix.copyDirectory('path/to/dir/**', 'public/output');
// // Скопіюйте файли із зазначеним розширенням
// mix.copy('vendor/lib/tests/**/*.php', 'tests');
// // Виключіть розширення з копіювання
// mix.copy('tests/**/!(*.js)', 'public/foo');

// // Об’єднати всі файли в каталог
// mix.combine('path/to/dir', 'all-files.js');
// // or:
// mix.scripts('path/to/dir', 'all-files.js');

// // Об’єднати всі відповідні файли в каталог
// mix.combine('path/to/dir/*.css', 'all-files.css');
// // or:
// mix.styles('path/to/dir/*.css', 'all-files.css');

// // Об’єднати масив файлів
// mix.combine([
//     'path/to/dir/*.css',
//     'path/to/second/dir/*.css'
// ], 'all-files.css');

// // Складіть JavaScript з підтримкою React
// mix.js('src/app.js', 'js')
//     .react();

// // kim err
// var LiveReloadPlugin = require('webpack-livereload-plugin');
// mix.webpackConfig({
//     plugins: [new LiveReloadPlugin()]
// });