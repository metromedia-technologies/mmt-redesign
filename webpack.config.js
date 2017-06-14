module.exports = {
  entry: {
    p1: "./_src/page1.js",
    p2: "./_src/page2.js",
    p3: "./_src/page3.js",
    p4: "./_src/page4.js"
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
