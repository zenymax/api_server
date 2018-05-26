var express = require('express')
var bodyParser = require('body-parser')
const config = require('./config/config')
const logs = require('./utils/logs')

var app = express()
var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }))
app.use(bodyParser.json({ limit: '100mb' }));

const path = require('path')
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  return res.render('index.html')
})

process.on('uncaughtException', function(err) {
  console.log('Global error catch: ' + err.message)
})

app.listen(port, () => {
  logs.log("ENVIRONMENT: " + process.env.NODE_ENV)
  console.log(`Server listening on port ${port}!: http://localhost:${port}`);
});
