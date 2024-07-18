import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

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
    cssCodeSplit: false
  }
})
