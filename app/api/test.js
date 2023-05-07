const Router = require('@koa/router')

module.exports = function initTestApi() {
  const router = new Router()

  router.get('/', ctx => {
    ctx.respond.json("hello, I'm ppz")
  })

  router.post('/middleware/body', ctx => {
    console.log(ctx.request.body)
    ctx.respond.json(ctx.request.body)
  })

  return router
}