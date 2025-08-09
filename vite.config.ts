import { defineConfig, loadEnv } from 'vite';
import pugPlugin from 'vite-plugin-pug-transformer';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { format, resolve } from 'path';

export default defineConfig(({ mode }) => {
  const FRONT_PATH = 'src';
  const env = loadEnv(mode, process.cwd(), '');
  const prefix = env.VITE_BASE_URL || '/'; // Используем VITE_BASE_URL или корневой путь по умолчанию

  return {
    root: 'src',
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, `${FRONT_PATH}/index.html`),
          catalog: resolve(__dirname, `${FRONT_PATH}/catalog.html`),
          routes: resolve(__dirname, `${FRONT_PATH}/routes.html`),
        },
        output: {
          assetFileNames: (assetInfo) => {
            // Проверяем, что имя файла существует и является строкой
            if (
              assetInfo.name &&
              /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)
            ) {
              return `assets/img/[name].[ext]`;
            }
            // Если имя файла отсутствует, возвращаем стандартный шаблон или другой путь по умолчанию
            return `assets/[name]-[hash].[ext]`;
          },
        },
      },
    },
    server: {
      open: 'index.html',
    },
    plugins: [
      pugPlugin({
        pugOptions: {
          pretty: true, // Для форматирования HTML-кода
          // locals: {
          //   prefix: prefix,
          // },
        },
      }),
      viteStaticCopy({
        targets: [
          {
            src: 'assets/img/**/*.*', // Путь к исходным файлам
            dest: 'assets/img', // Куда их скопировать в папке сборки
          },
        ],
      }),
    ],
    base: '/pognali-template/',
  };
});
