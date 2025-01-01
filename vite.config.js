import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    global: true
  },
  plugins: [],
  build: {
    outDir: './dist'
  }
});
