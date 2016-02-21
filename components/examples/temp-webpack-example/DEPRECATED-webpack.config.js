module.exports = {
    entry: "./src/www/entry.js",
    output: {
        path: __dirname + '/src/www',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};