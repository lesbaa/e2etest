import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        basic: 'public/basic.html',
      },
    },
  },
  root: './e2e',
});
