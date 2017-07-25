module.exports = {

  // entry point of react app
  entry: "./app/app.js",

  // compiled Javascript output here
  output: {
    filename: "public/bundle.js"
  },

  // desribes transformations
  module: {
    loaders: [
      {
        // Only files with .js or .jsx 
        test: /\.jsx?$/,
        // only process files in our app folder
        include: /app/,
        loader: "babel",
        query: {
          // specific transformations 
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  // lets us debug our react code in chrome dev tools
  devtool: "eval-source-map"
};
