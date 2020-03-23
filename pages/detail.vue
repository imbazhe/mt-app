<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <crumbs :keyword="keyword" :type="type" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <summa :meta="product" />
      </el-col>
    </el-row>
    <el-row class="m-title">
      <el-col :span="24">
        <h3>商家团购及优惠</h3>
      </el-col>
    </el-row>
    <el-row v-if="canOrder || !login">
      <el-col :span="24">
        <list v-if="login" :list="list" />
        <div v-else class="deal-need-login">
          <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png" alt="登录查看" />
          <span>请登录后查看详细团购优惠</span>
          <el-button type="primary" round>
            <a href="/login">立即登录</a>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/detail/crumbs.vue";
import Summa from "@/components/detail/summary.vue";
import List from "@/components/detail/list.vue";
export default {
  components: {
    Crumbs,
    Summa,
    List
  },
  computed: {
    canOrder: function() {
      return this.list.filter(item => item.photos.length).length;
    }
  },
  // 在项目中需要在初始化页面前先得到数据，也就是我们常说的异步请求数据。
  // Nuxt.js贴心的为我们扩展了Vue.js的方法，增加了asyncData(){……}。从名字上就很好理解，这是一个异步的方法。
  // 注意：由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。
  // 此方法与data{}方法做末置，无需data方法
  // 为什么不适用data方法 keyword,type是从http请求中获取的(从服务端获取)，data无法获取此变量
  async asyncData(ctx) {
    //获取http请求上下文对象 ctx
    let { keyword, type } = ctx.query;
    let {
      status,
      data: { product, more: list, login }
    } = await ctx.$axios.get("/search/products", {
      params: {
        keyword,
        type,
        city: ctx.store.state.geo.position.city
      }
    });
    if (status === 200) {
      return {
        keyword,
        product,
        type,
        list,
        login
      };
    } else {
      return {
        keyword,
        product: {},
        type,
        list: [],
        login: false
      };
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/detail/index.scss";
.page-detail {
  width: 74%;
  margin: 0px auto;
}
</style>
