// src / models / userSchema.js
'use strict'

const mongoose = require('mongoose')

// User Collection
let UserSchema = mongoose.Schema({
  username: String,
  password: String,
  createdAt: Date,
  email: String
})

let User = mongoose.model('users', UserSchema)

module.exports = User
