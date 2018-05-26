
var logs = {}

logs.log = function(text) {
    return console.log(new Date() + " - ", text);
}

module.exports = logs;