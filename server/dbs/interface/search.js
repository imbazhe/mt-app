import Router from 'koa-router';
import axios from './utils/axios'

let router = new Router({prefix: '/search'})


router.get('/top', async (ctx) => {
  // 数据库获取数据源方式
  // try {
  //   let top = await Poi.find({
  //     'name': new RegExp(ctx.query.input),
  //     city: ctx.query.city
  //   })
  //   ctx.body = {
  //     code: 0,
  //     top: top.map(item => {
  //       return {
  //         name: item.name,
  //         type: item.type
  //       }
  //     }),
  //     type: top.length ? top[0].type : ''
  //   }
  // } catch (e) {
  //   ctx.body = {
  //     code: -1,
  //     top: []
  //   }
  // }
  let {status, data: {
      top
    }} = await axios.get(`http://cp-tools.cn/search/top`, {
    params: {
      input: ctx.query.input,
      city: ctx.query.city,
    }
  })
  ctx.body = {
    top: status === 200
      ? top
      : []
  }
})

router.get('/hotPlace', async (ctx) => {
  let city = ctx.store
    ? ctx.store.geo.position.city
    : ctx.query.city
  let {status, data: {
      result
    }} = await axios.get(`http://cp-tools.cn/search/hotPlace`, {
    params: {
      city
    }
  })
  ctx.body = {
    result: status === 200
      ? result
      : []
  }
})

router.get('/resultsByKeywords', async (ctx) => {
  const {city, keyword} = ctx.query;
  let {
    status,
    data: {
      count,
      pois
    }
  } = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
    params: {
      city,
      keyword,
    }
  })
  ctx.body = {
    count: status === 200 ? count : 0,
    pois: status === 200
      ? pois
      : []
  }
})

router.get('/products', async (ctx) => {
  let keyword = ctx.query.keyword || '旅游'
  let city = ctx.query.city || '北京'
  let {
    status,
    data: {
      product,
      more
    }
  } = await axios.get('http://cp-tools.cn/search/products', {
    params: {
      keyword,
      city,
    }
  })
  if (status === 200) {
    ctx.body = {
      product,
      more: ctx.isAuthenticated() ? more: [],
      login: ctx.isAuthenticated()
    }
  }else{
    ctx.body = {
      product: {},
      more: ctx.isAuthenticated() ? more: [],
      login: ctx.isAuthenticated()
    }
  }
})

export default router
