import { defineConfig } from 'vite';
import { format, resolve } from 'path';
import pugPlugin from 'vite-plugin-pug-transformer';

const FRONT_PATH = 'src';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, `${FRONT_PATH}index.html`),
        catalog: resolve(
          __dirname,
          `${FRONT_PATH}/html/travellers/travellers.html`
        ),
        form: resolve(__dirname, `${FRONT_PATH}/html/routes/routes.html`),
      },
    },
  },
  server: {
    open: 'index.html',
  },
  plugins: [
    pugPlugin({
      pugOptions: {
        pretty: true,
      },
    }),
  ],
});
