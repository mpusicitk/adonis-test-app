const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extractSass = new MiniCssExtractPlugin({
  path: __dirname + "/public/dist",
  filename: "app.css",
})

function sassRules () {
  return [
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: "css-loader",
        },
        {
          loader: "sass-loader",
        }
      ]
    }
  ]
}

function scriptRules () {
  return [
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: { presets: ['@babel/env'] }
    }
  ]
}

module.exports = {
  entry: [
    './resources/assets/sass/app.scss',
    './resources/assets/js/app.js'
  ],
  output: {
    path: __dirname + "/public/dist",
    filename: "app.js",
  },
  module: {
    rules: sassRules().concat(scriptRules())
  },
  plugins: [
    extractSass
  ]
}
