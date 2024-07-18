import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
import { resolve } from 'path';

const deps = require("./package.json").dependencies;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'platform',
        remotes: {
          flex: {
            external: "http://localhost:3001/flex.js",
            externalType: 'url',
            format: 'var',
            from: 'webpack'
          },
          hybrid: {
            external: "http://localhost:3002/hybrid.js",
            externalType: 'url',
            format: 'var',
            from: 'webpack'
          },
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          "@mui/material": {
            singleton: true,
            requiredVersion: deps["@mui/material"],
          },
        }
      })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        widget: './src/Widget.tsx',
      },
      output: {
        entryFileNames: (assetInfo) => {
          return assetInfo.name === 'widget' ?    'assets/js/[name].js':'assets/[name].js' ;
        },
      },
    },
  },
  experimental: {
    renderBuiltUrl(filename: string) {
      return "http://localhost:4173/" + filename;
    },
  },
})
