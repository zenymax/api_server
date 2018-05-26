function config() {
    const config = require(`./${process.env.NODE_ENV}.json`)
    return config
}

module.exports = config();