const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {type: String},
  password: {
    type: String,
    select: false,
    set(val) {
      return require('bcryptjs').hashSync(val, 10)
    }
    // $2a$10$pTtQpGiY4rLJc6ZKl73oyun//jWuDBjO9s.BgapzRvX2LWpVt9f/i
    // $2a$10$DeGJ8ScXqT5G9YX2JInt8uDyrru2ECUDOb1ky4i5tzVeXaApwn9Pe
  }
})

module.exports = mongoose.model('AdminUser', schema)