<template>
  <div id="tabs">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in dataLists" :key="index">
        <div class="tabsContent">
          <img :src="item.url" alt>
          <p>{{ item.title }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4.2,
        spaceBetween: 20
      },
      dataLists: [
        {
          id: 0,
          url: "images/icon2.png",
          title: "服务一"
        },
        {
          id: 1,
          url: "images/icon2.png",
          title: "服务一"
        },
        {
          id: 2,
          url: "images/icon2.png",
          title: "服务一"
        },
        {
          id: 3,
          url: "images/icon2.png",
          title: "服务一"
        },
        {
          id: 4,
          url: "images/icon2.png",
          title: "服务一"
        },
        {
          id: 5,
          url: "images/icon2.png",
          title: "服务一"
        },
        {
          id: 6,
          url: "images/icon2.png",
          title: "服务一"
        },
        {
          id: 7,
          url: "images/icon2.png",
          title: "服务一"
        },
        {
          id: 8,
          url: "images/icon2.png",
          title: "服务一"
        },
        {
          id: 9,
          url: "images/icon2.png",
          title: "服务一"
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>
 
<style lang="stylus" scoped>
@import '../../assets/css/public.styl';

#tabs {
  height: 140px;
  width: 100%;
  background-color: lightblue;
  padding: 5px 10px;
  box-sizing: border-box;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  .swiper-container {
    height: 100%;

    .tabsContent {
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;

      img {
        height: 70%;
      }
    }
  }
}
</style>