<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <a href="/"><img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" /></a>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            class="header-search-input"
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,idx) in $store.state.home.hotPlace.slice(0,5)" :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,idx) in searchList" :key="idx">
              <a :href="'/products?keyword='+encodeURIComponent(item.name)">{{ item.name }}</a>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a
            :href="'/products?keyword='+encodeURIComponent(item.name)"
            v-for="(item,idx) in $store.state.home.hotPlace.slice(0,5)"
            :key="idx"
          >{{ item.name }}</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="#">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">名宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li>
            <i class="refund">
              <p class="txt">随时退</p>
            </i>
          </li>
          <li>
            <i class="single">
              <p class="txt">不满意免单</p>
            </i>
          </li>
          <li>
            <i class="overdue">
              <p class="txt">过期退</p>
            </i>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hotList: [],
      searchList: []
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.search;
    },
    isSearchList: function() {
      return this.isFocus && this.search;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(function() {
        self.isFocus = false;
      }, 200);
    },
    input: _.debounce(async function() {
      let self = this;
      let city = self.$store.state.geo.position.city.replace("市", "");
      self.searchList = [];
      let {
        status,
        data: { top }
      } = await self.$axios.get("/search/top", {
        params: {
          input: self.search,
          city
        }
      });

      self.searchList = top.slice(0, 10);
    }, 300)
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/public/header/search.scss";

.com-header .header-search-module .header-search-block .header-search-input {
  border: 1px solid #e5e5e5;
  border-right: none;
  border-radius: 4px 0 0 4px;
  line-height: 100%;
  box-sizing: border-box;
  display: inline-block !important;
  padding: 15px;
  font-size: 14px;
  height: 100%;
  background: transparent;
  width: 85.45%;
}
.el-icon-search {
  outline: none;
  width: 14.55%;
  box-sizing: border-box;
  line-height: 100%;
  height: 100%;
  background: #ffc300;
  border: none;
  float: right;
  color: #222222;
  cursor: pointer;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  /* &:active {
          background: #73E1CE;
        } */
}
</style>