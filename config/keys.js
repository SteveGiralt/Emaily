if (process.env.NODE_ENV == 'production') {
    // Production mode
    module.exports = require('./prod');
} else {
    // Dev mode
    module.exports = require('./dev');
}