var path = require('path');

module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "src"),
        publicPath: "/assets/",
        filename: "index.js"
    }
};
