<template>
  <div id="banner" class="clearfix">
    <div class="banner_header">
      <div class="banner_top clearfix">
        <div class="top_left fl" @click="goCity">
          <p class="fl">{{ banner_city + res.data }}</p>
          <i class="iconfont fl">&#xe668;</i>
        </div>
        <router-link tag="div" class="top_search fl" to="/city">
          <i class="iconfont fl">&#xe63d;</i>
          <p class="fl">泰国</p>
        </router-link>
        <div class="top_right fr" @click="extension()">
          <i class="iconfont">&#xe602;</i>
        </div>
      </div>
      <div class="banner_swiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img src="@/assets/images/001.jpg" alt>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/002.jpg" alt>
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/images/003.jpg" alt>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="banner_shadow" v-show="extensionBoolean">
        <p>shangpin</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Banner",
  props: ["res"],
  data() {
    return {
      cityName: "",
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // el: '.swiper-pagination',
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        delay: 10000,
        loop: true,
        autoplayDisableOnInteraction: false,
        effect: "fade"
      },
      extensionBoolean: false
    };
  },
  created() {
    // 刷新页面前将已选定的城市记录到本地存储
    window.addEventListener("beforeunload", e => {
      localStorage.setItem("cityName", this.banner_city);
    });
  },
  computed: {
    ...mapState(["banner_city"]),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    extension() {
      this.extensionBoolean = !this.extensionBoolean;
    },
    goCity() {
      this.$router.push({ path: "/city", query: { plan: "private" } });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/public.styl';

$BCheight = 75px;

#banner {
  height: 450px;

  .banner_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 450px;
  }

  .iconfont {
    font-size: 28px;
  }

  .banner_shadow {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 110;
    background-color: rgba(0, 0, 0, 0.6);
    width: 500px;
    height: 100%;

    p {
      width: 500px;
      height: 200px;
      color: red;
      font-size: 30px;
    }
  }

  .banner_top {
    background-color: $basicColor;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 30px;
    verticalC($BCheight);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;

    p {
      font-size: 30px;
    }

    .top_left {
      .iconfont {
        padding-left: 10px;
      }
    }

    .top_search {
      height: 65px;
      line-height: 65px;
      width: 70%;
      margin-left: 10px;
      margin-top: ($BCheight / 2 - 65 / 2px);
      background-color: #fff;
      box-sizing: border-box;
      padding-left: 10px;
    }

    .top_right {
      margin-right: 20px;
    }
  }

  .banner_swiper {
    position: absolute;
    top: 75px;
    width: 100%;

    // height: 100%;
    .swiper-slide {
      height: auto;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

// 过渡动画
.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-500px);
  opacity: 0;
}
</style>


