const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes)

app.listen(port, () => console.log(`STM-Micro listening at http://localhost:${port}`))

module.exports = app
