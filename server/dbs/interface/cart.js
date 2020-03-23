import Router from 'koa-router';
import Cart from '../models/cart'
import md5 from 'crypto-js/md5'

let router = new Router({
  prefix: '/cart'
})

router.post('/create', async ctx => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: 'please login'
    }
  } else {
    let time = Date()
    let cartNo = md5(Math.random() * 1000 + time).toString()
    let {
      params: {
        id,
        detail
      }
      // post方式获取http参数   ctx.request.body
      // ctx.session.passport.user 获取登陆用户
    } = ctx.request.body
    let cart = new Cart({
      id,
      cartNo,
      time,
      user: ctx.session.passport.user,
      detail
    })
    // 异步获取
    let result = await cart.save()
    if (result) {
      ctx.body = {
        code: 0,
        msg: '',
        id: cartNo
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'fail'
      }
    }
  }
})

router.post('/getCart', async ctx => {
  let {
    id
  } = ctx.request.body
  console.log(id);
  try {
    //findOne 找到第一个就返回 
    //find 找到所有符合条件的数组
    let result = await Cart.findOne({
      cartNo: id
    })
    ctx.body = {
      code: 0,
      data: result ?
        result.detail[0] :
        {}
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      data: {}
    }
  }
})

export default router
