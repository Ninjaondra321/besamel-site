import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

// import mdx from '@mdx-js/rollup';
// import remarkGfm from 'remark-gfm';



export default defineConfig({
  plugins: [
    // mdx({ jsxImportSource: 'solid-jsx', remarkPlugins: [remarkGfm] }),
    solidPlugin()],
  server: {
    // host: '0.0.0.0'
    port: "3333"
  },
  build: {
    target: 'esnext',
  },
});
