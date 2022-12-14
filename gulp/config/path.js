// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    //js: `${srcFolder}/js/app.js`,  //поменять на **/*.* 
    js: `${srcFolder}/js/*.*`,  
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, 
    svg:`${srcFolder}/img/**/*.svg`, 
    //scss: `${srcFolder}/scss/style.scss`,  //поменять на **/*.* 
    scss: `${srcFolder}/scss/*.*`,
    html: `${srcFolder}/*.html`,  //смотрит только файлы в корне!
    fonts: `${srcFolder}/fonts/**/*.*`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.*`,
    scss: `${srcFolder}/scss/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}