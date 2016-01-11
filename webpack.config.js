module.exports = {
  context: __dirname + '/src',
  entry: './app.js',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {
	        test: /\.scss$/,
	        include: /src/,
	        loaders: [
	            'style',
	            'css',
	            'autoprefixer?browsers=last 3 versions',
	            'sass?outputStyle=expanded'
	        ]
	   },

	   {
	        test: /\.css$/,
	        loader: "style-loader!css-loader?importLoaders=1"
	   }
    ]
  }
};
