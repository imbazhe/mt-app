import Router from 'koa-router';
import Categroy from '../../dbs/models/user'
// import axios from './utils/axios'
// import sign from './utils/sign'
// import Province from '../dbs/models/province'

let router = new Router({prefix: '/categroy'})


router.get('/crumbs',async (ctx)=>{

  let result = await Categroy.findOne({city: ctx.query.city.replace('市', '') || '北京'})
  if (result) {
    ctx.body = {
      areas: result.areas,
      types: result.types
    }
  } else {
    ctx.body = {
      areas: [],
      types: []
    }
  }
  //   // 接口调用失败
  // let {status,data:{areas,types}} = await axios.get('http://cp-tools.cn/categroy/crumbs',{
  //   params:{
  //     city:ctx.query.city.replace('市','') || "北京",
  //     sign
  //   }
  // })
  // ctx.body={
  //   areas: status===200?areas:[],
  //   types: status===200?types:[]
  // }
})


export default router;
