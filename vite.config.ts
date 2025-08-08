import { defineConfig } from 'vite';
import { format, resolve } from 'path';
import pugPlugin from 'vite-plugin-pug-transformer';
import vitePugPlugin from 'vite-plugin-pug';

const FRONT_PATH = 'src';

export default defineConfig({
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
  // plugins: [
  //   pugPlugin({
  //     pugOptions: {
  //       pretty: true,
  //     },
  //   }),
  //   vitePugPlugin(),
  // ],
});
