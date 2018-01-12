const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username     : { type: String, required: true, unique: true },
  hash         : { type: String, required: true },
  role         : { type: String, required: true },
  organization : { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' }
})

mongoose.model('User', userSchema)
