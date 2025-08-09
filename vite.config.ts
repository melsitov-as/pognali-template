import { defineConfig, loadEnv } from 'vite';
import pugPlugin from 'vite-plugin-pug-transformer';
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
      },
    },
    server: {
      open: 'index.html',
    },
    plugins: [
      pugPlugin({
        pugOptions: {
          pretty: true, // Для форматирования HTML-кода
          locals: {
            prefix: prefix,
          },
        },
      }),
    ],
    base: '/pognali-template/',
  };
});
