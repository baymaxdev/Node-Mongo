const express = require('express')
const async   = require('async')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../config')

const router  = express.Router()
const User = mongoose.model('User')

router.post('/login', (req, res) => {
  const info = req.body
  res.json({ info })
})

module.exports = router
