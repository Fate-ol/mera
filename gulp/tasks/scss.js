import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

//import cleanCss from 'gulp-clean-css'; // сжатие css файла
//import webpcss from 'gulp-webpcss'; // вывод webp изображений
import autoprefixer from 'gulp-autoprefixer'; // добавление префиксов
//import groupCssMediaQueries from 'gulp-group-css-media-queries'; // группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, {sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))  
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    //.pipe(groupCssMediaQueries()) // группировка стилей убрать потом
    //.pipe(webpcss({ // обработка понятия картинок убрать потом
    //  webpClass: ".webp",
    //  noWebpClass: ".no-webp"
    //}
    //))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 versions"],
      cascade: true
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    //.pipe(cleanCss()) // сжимает стили убрать потом
    //.pipe(rename({
    //  extname: ".min.css"
    //}))
    //.pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());

}