module.exports = options => {
  return async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resouce)
    const Model = require(`../models/${modelName}`)
    req.Model = Model
    next()
  }
}