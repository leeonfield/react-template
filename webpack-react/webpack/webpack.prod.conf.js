const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  devtool: "eval",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  output: {
    filename: "[name].[contenthash:8].bundle.js",
    publicPath: "/dist",
  },
  cache: {
    type: "filesystem",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\//,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
              esModule: true,
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(sc|sa)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(gif|jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/i,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
