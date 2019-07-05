<template>
  <div id="swiper_part">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="content" style="background-color: pink"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="content" style="background-color: yellow"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="content" style="background-color: green"></div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        delay: 500,
        loop: true,
        disableOnInteraction : false
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {},
  methods: {}
};
</script>
 
<style lang="stylus" scoped>
@import '../../assets/css/public.styl';

#swiper_part {
  height: 200px;
  width: 100%;

  .swiper-container {
    height: 100%;
  }

  .swiper-slide {
    height: 100%;
    width: 100%;

    .content {
      height: 100%;
      width: 100%;
    }
  }
}

// 样式穿透
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background-color: orange;
}
</style>