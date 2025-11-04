import { defineConfig } from 'vite';
import path from 'path'; // Make sure to import 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        basic: path.resolve(__dirname, 'e2e/public/basic.html'),
      },
    },
  },
  root: './e2e',
});
