<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/my">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机app</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/my">餐饮客户中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">登录商家中心</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">美团智能收银</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/my">我想合作</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="#">手机免费开店</nuxt-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>美食</dt>
            <dd>烤鱼</dd>
            <dd>烧烤</dd>
            <dd>火锅</dd>
            <dd>特色小吃</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>动作片</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app" />
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app" />
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app" />
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app" />
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app" />
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang='scss' scoped>
 @import "@/assets/css/public/header/topbar.scss";
</style>