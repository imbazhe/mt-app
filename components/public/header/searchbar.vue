<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="search" placeholder="搜索商家或地点"
           @focus="focus" @blur="blur" @input='input'></el-input>
          <button class="el-button el-button--primary">
            <i class="el-icon-search"></i>
          </button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,idx) in hotList" :key="idx">{{item}}</dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item,idx) in searchList" :key="idx">{{item}}</dd>
          </dl>
        </div>
        <p class="suggset">
          <a href="#">西湖</a>
          <a href="#">西湖</a>
          <a href="#">西湖</a>
          <a href="#">西湖</a>
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
export default {
  data() {
    return {
      search: "",
      isFocus: false,
      hotList: ["西湖", "银泰", "天鹅湖", "火锅", "周边游"],
      searchList: ["spa", "按摩", "大保健", "嘻嘻嘻", "嘿嘿嘿"]
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
    input(){
      //Todo
      console.log('input')
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/public/header/search.scss";
</style>