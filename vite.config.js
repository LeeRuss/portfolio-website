import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default {
  plugins: [ViteMinifyPlugin()],
  appType: 'mpa',
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'index.html',
        pl: '/pl/index.html',
      },
    },
  },
};
