module.exports = app => {
  const express = require('express')
  const AdminUser = require('../../models/AdminUser')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const auth = require('../../middleware/auth')
  const resource = require('../../middleware/resource')

  const router = express.Router({
    mergeParams: true
  })
  // 创建资源
  router.post('/', auth(), async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  // 修改资源
  router.put('/:id', auth(), async (req, res) => {
    // console.log(req);
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })
  // 删除资源
  router.delete('/:id', auth(), async (req, res) => {
    const model = await req.Model.findByIdAndDelete(req.params.id)
    res.send(model)
  })
  // 获取全部资源
  router.get('/', auth(), async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions)
    res.send(items)
  })
  // 获取单个资源
  router.get('/:id', auth(), async (req, res) => {
    const items = await req.Model.findById(req.params.id)
    res.send(items)
  })
  // 资源CURD
  app.use('/admin/api/rest/:resouce', auth(), resource(), router)
  // 文件上传
  const multer = require('multer')
  const upload = multer({dest: __dirname + '/../../uploads'})
  app.post('/admin/api/upload', auth(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })
  // 登录校验
  app.post('/admin/api/login', async (req, res) => {
    const {username, password} = req.body
    const user = await AdminUser.findOne({username: username}).select('+password')
    // 用户名验证
    assert(user, 422, '用户不存在')
    // if(!user){
    //   return res.status(422).send({message: '用户不存在'})
    // }
    // 密码验证
    assert(password, 422, '密码不能为空')
    const isvalid = require('bcryptjs').compareSync(password, user.password)

    assert(isvalid, 422, '密码错误')
    // if(!isvalid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }
    // token验证
    const token = jwt.sign({id: user._id}, app.get('secret'))
    res.send({token})
  })

  // 错误处理
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode).send({
      message: err.message
    })
  })
}
// http://localhost:3000/admin/api/rest
