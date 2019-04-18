const Koa = require('koa');
const koaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const path = require('path')
var Mock = require('mockjs')
const Data = require('./data')
const app = new Koa();
app.use(bodyParser())
const router = new koaRouter()
router.post('/demo/getTree', async ctx => {
    console.log(ctx)
    const res = Data['/demo/getTree']
    if(res === undefined){
        ctx.throw(404);
    }
    ctx.body = {
        "iRet": 0,
        "sMsg": "成功！",
        "jData": Mock.mock(res),
        "sSerial": ""
    }
    // ctx.body = Mock.mock(res)
        
})
router.post('/demo/getList', async ctx => {
    console.log(ctx)
    const res = Data['/demo/getList']
    if(res === undefined){
        ctx.throw(404);
    }
    ctx.body = {
        "iRet": 0,
        "sMsg": "成功！",
        "jData": Mock.mock(res),
        "sSerial": ""
    }
    // ctx.body = Mock.mock(res)

})
router.get('', async ctx => {
    const res = Data[ctx.query.route]
    if(res === undefined){
        ctx.throw(404);
    }
    ctx.body = {
        "iRet": 0,
        "sMsg": "",
        "jData": Mock.mock(res),
        "sSerial": "成功！"
    }
})
app.listen(3000, () => {
    console.log('server is starting at port 3000')
})

app.use(router.routes())
app.use(static(
    path.join(__dirname,'./public/')
))
