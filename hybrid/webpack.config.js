const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3002/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "hybrid",
      filename: "hybrid.js",
      remotes: {
        flex: "flex@http://localhost:3001/flex.js",
      },
      exposes: {
        "./HybridInfo": "./src/HybridInfo.tsx",
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
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
