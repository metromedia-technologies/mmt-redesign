module.exports = {
  entry: {
    p1: "./src/page1.js",
    p2: "./src/page2.js",
    p3: "./src/page3.js",
    p4: "./src/page4.js"
  },
  output: {
      path: __dirname + "/assets/js",
      filename: "[name].entry.chunk.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
