import { defineConfig } from 'vite';
import { format, resolve } from 'path';

const FRONT_PATH = 'src';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, `${FRONT_PATH}index.html`),
        catalog: resolve(__dirname, `${FRONT_PATH}/html/catalog/catalog.html`),
        form: resolve(__dirname, `${FRONT_PATH}/html/form/form.html`),
      },
    },
  },
  server: {
    open: 'index.html',
  },
});
