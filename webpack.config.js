const path = require('path');
const SpritePlugin = require('svg-sprite-loader/plugin');


module.exports = {
  context: __dirname,

  entry: './src/icons/icons.js',

  output: {
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              publicPath: '/icons/'
            }
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                {removeAttrs: { attrs: ['fill', 'stroke'] }}
              ]
            }
          }
        ],
      }
    ]
  },

  plugins: [
    new SpritePlugin()
  ]
};

