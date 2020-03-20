<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd :class="{active:kind==='all'}" kind="all" keyword="景点">全部</dd>
      <dd :class="{active:kind==='part'}" kind="part" keyword="美食">约会聚餐</dd>
      <dd :class="{active:kind==='spa'}" kind="spa" keyword="丽人">丽人SPA</dd>
      <dd :class="{active:kind==='travel'}" kind="travel" keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in list.all" :key="item.title">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image" />
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos">
              <span>{{ item.pos }}</span>
            </li>
            <li class="price">
              ￥
              <em>{{ item.price }}</em>
              <span>/起</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: "all",
      list: {
        all: [
          {
            title:'烘焙开心蛋糕',
            pos: '芒果班戟千层裸蛋糕1个，约6英寸，圆形',
            price: 158,
            img: 'https://p1.meituan.net/deal/d336b9908512a579d6b817db454ad6d11197469.jpg@460w_260h_1e_1c',
            url: "//abc.com"
          },
          {
            title:'纳德食尚自助餐厅',
            pos: '饕餮盛宴9人自助',
            price: 1999,
            img: 'https://p1.meituan.net/msmerchant/a1d7a328f551c50d7f8c253749cf05521653295.jpg@460w_260h_1e_1c',
            url: "//abc.com"
          },
          {
            title:'渔尚飞酸菜鱼',
            pos: '双人酸菜鱼特惠餐',
            price: 118,
            img: 'https://p1.meituan.net/msmerchant/d3f46d6ade6ec31ed39504abd82dd72c1251168.png@460w_260h_1e_1c',
            url: "//abc.com"
          },
          {
            title:'杭州城中香格里拉大酒店',
            pos: '本周热销',
            price: 1166,
            img: 'https://p0.meituan.net/tdchotel/6d34c5e5f38d495cd8c70a92e307144c71639.jpg@460w_260h_1e_1c',
            url: "//abc.com"
          },
          {
            title:'和萌吉烧肉屋（中山北路店）',
            pos: '午市特惠双人套餐',
            price: 198,
            img: 'https://p0.meituan.net/bbia/e9db549f2ed7d65123e781ec38dca146162479.jpg@460w_260h_1e_1c',
            url: "//abc.com"
          },
          {
            title:'烘焙开心蛋糕',
            pos: '芒果班戟千层裸蛋糕1个，约6英寸，圆形',
            price: 158,
            img: 'https://p1.meituan.net/deal/d336b9908512a579d6b817db454ad6d11197469.jpg@460w_260h_1e_1c',
            url: "//abc.com"
          }
        ],
        part: [],
        spa: [],
        movie: [],
        travel: []
      }
    };
  },
  computed: {
    // cur: function() {
    //   return this.list[this.kind];
    // }
  },
  async mounted() {
    // let self = this;
    // let {
    //   status,
    //   data: { count, pois }
    // } = await self.$axios.get("/search/resultsByKeywords", {
    //   params: {
    //     keyword: "景点",
    //     city: self.$store.state.geo.position.city
    //   }
    // });
    // if (status === 200 && count > 0) {
    //   let r = pois
    //     .filter(item => item.photos.length)
    //     .map(item => {
    //       return {
    //         title: item.name,
    //         pos: item.type.split(";")[0],
    //         price: item.biz_ext.cost || "暂无",
    //         img: item.photos[0].url,
    //         url: "//abc.com"
    //       };
    //     });
    //   self.list[self.kind] = r.slice(0, 9);
    // } else {
    //   self.list[self.kind] = [];
    // }
  },
  methods: {
    over: async function(e) {
      // let dom = e.target;
      // let tag = dom.tagName.toLowerCase();
      // let self = this;
      // if (tag === "dd") {
      //   this.kind = dom.getAttribute("kind");
      //   let keyword = dom.getAttribute("keyword");
      //   let {
      //     status,
      //     data: { count, pois }
      //   } = await self.$axios.get("/search/resultsByKeywords", {
      //     params: {
      //       keyword,
      //       city: self.$store.state.geo.position.city
      //     }
      //   });
      //   if (status === 200 && count > 0) {
      //     let r = pois
      //       .filter(item => item.photos.length)
      //       .map(item => {
      //         return {
      //           title: item.name,
      //           pos: item.type.split(";")[0],
      //           price: item.biz_ext.cost || "暂无",
      //           img: item.photos[0].url,
      //           url: "//abc.com"
      //         };
      //       });
      //     self.list[self.kind] = r.slice(0, 9);
      //   } else {
      //     self.list[self.kind] = [];
      //   }
      // }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
