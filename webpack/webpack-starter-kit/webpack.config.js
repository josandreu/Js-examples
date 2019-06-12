const HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // puntos de entrada
  entry: {
    js: './src/index.js',
    vanilla: './src/hello-vanilla.js',
    react: './src/hello-react.js',
    vue: './src/hello-vue.js',
    ts: './src/hello-ts.js'
  },
  output: {
    // los puntos de salida se generaran dinamicamente, por eso no especificamos uno para cada entrada
    // se compondrán del nombre del bundle (js, vanilla, react...) . código o hash único (chunkhash, para que no se queden en caché las imágenes) . js
    filename: '[name].[chunkhash].js'
  },
  devtool: 'source-map', // para que de manera global se detecten los source-map dentro del objeto de webpack
  module: {
    rules: [
      {
        // expresión regular, por eso va sin comillas y con barras.
        // 1º se escapa el punto \.
        // todos los archivos con extensión .js, jsx (react)
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // excluye esta carpeta
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // cuando los archivos tengan extensión .html
        test: /\.html$/,
        use: [
          {
            // 'html-loader?minimize=true'
            // es lo mismo ponerlo así, que indicar options
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        // EL ORDEN ES MUY IMPORTANTE
        use: [
          'style-loader', // permite escribir cadenas js a node de código css
          MiniCssExtractPlugin.loader,
          'css-loader?minimize&sourceMap', // 'css-loader?minimize=true&sourceMap'
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browser: ['last 2 versions']
              },
              sourceMap: true,
              plugins: () => [autoprefixer]
            }
          },
          'resolve-url-loader',
          'sass-loader?outputStyle=compressed&sourceMap'
        ]
      },
      {
        // imagenes con extension: jpg / jpeg / png / gif / webp, la i es para minusculas/mayusculas
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          // que use el file-loader y que los guarde en una carpeta llamada assets, y que respete el nombre y la extension
          'file-loader?name=assets/[name].[ext]',
          // para optmizar las imagenes
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
        use: 'file-loader?name=assets/[name].[ext]'
      },
      {
        // para Vue
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        // para TypeScript, archivos .ts o .tsx, por eso la interrogación (x puede o no estar)
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  plugins: [
    // que borre de la carpeta dist cualquier subnivel de carpetas (**), cualquier tipo de archivo y extension (*.*)
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].css'
    }),
    new VueLoaderPlugin(),
    // tenemos 2 HtmlWebpackPlugin, uno por cada punto de entrada-entry (js y vanilla)
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html', // producción
      chunks: ['js'] // corresponde a la propiedad del objeto entry llamada js
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'hello-vanilla.html', // producción, localhost/vanilla.html
      chunks: ['vanilla'] // corresponde a la propiedad del objeto entry llamada vanilla
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'hello-react.html',
      chunks: ['react'] // corresponde a la propiedad del objeto entry llamada react
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'hello-vue.html',
      chunks: ['vue'] // corresponde a la propiedad del objeto entry llamada vue
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'hello-ts.html',
      chunks: ['ts'] // corresponde a la propiedad del objeto entry llamada ts
    })
  ]
};
