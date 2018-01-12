const express      = require('express')
const path         = require('path')
const logger       = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const fs           = require('fs')
const join         = require('path').join
const cors         = require('cors')
const jwt          = require('jsonwebtoken')
const config       = require('./config')
const mongoose     = require('mongoose')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json({ limit: '25mb' }))
app.use(bodyParser.urlencoded({ limit: '25mb', extended: false }))
app.use(cookieParser())
app.use('/static', express.static(path.join(__dirname, 'static')))

/* eslint-disable */
const models = join(__dirname, 'server/models')

fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(models, file)));
/* eslint-enable */

app.use('/auth', require('./server/routes/auth'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers
app.use((err, req, res) => {
  res.status(err.status || 500)
  res.json({
    message : err.message,
    error   : err
  })
})

module.exports = app
