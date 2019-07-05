<template>
  <div id="spike">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide style="background-color: hotpink">
        <CountDown
          v-on:start_callback="countDownS_cb(1)"
          v-on:end_callback="countDownE_cb(1)"
          :currentTime="timeStampNow"
          :startTime="timeStampNow"
          :endTime="timeStampFu"
          :tipTextEnd="'距离结束只剩'"
          :endText="'已结束'"
          :dayTxt="'天'"
          :hourTxt="'小时'"
          :minutesTxt="'分钟'"
          :secondsTxt="'秒'"
        ></CountDown>
      </swiper-slide>
      <swiper-slide style="background-color: #e87">
        <CountDown
          v-on:start_callback="countDownS_cb(1)"
          v-on:end_callback="countDownE_cb(1)"
          :currentTime="timeStampNow"
          :startTime="timeStampNow"
          :endTime="timeStampFu"
          :tipTextEnd="'距离结束只剩'"
          :endText="'已结束'"
          :dayTxt="'天'"
          :hourTxt="'小时'"
          :minutesTxt="'分钟'"
          :secondsTxt="'秒'"
        ></CountDown>
      </swiper-slide>
    </swiper>
  </div>
</template>
 
<script>
// 引入倒计时插件
import CountDown from "./Countdown";

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          
        },
        autoplay: true,
        delay: 500,
        autoplayDisableOnInteraction : false
        // loop: true
        // observer:true,
        // loopAdditionalSlides: 0
      },
      isOver: false,
      timeStampNow: 0,
      timeStampFu: 0
    };
  },
  created() {
    
  },
  mounted() {
    this.getTimeStamp();
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    // 获取现在的时间戳 和 未来的时间戳
    getTimeStamp() {
      const that = this;
      this.timeStampNow = Date.now();
      this.timeStampFu = Date.parse("2019/06/17 18:00:00");
    },
    countDownS_cb: function(x) {
      console.log(x);
    },
    countDownE_cb: function(x) {
      console.log(x);
    }
  },
  components: {
    CountDown
  }
};
</script>
 
<style lang="stylus" scoped>
@import '../../assets/css/public.styl';

#spike {
  height: 50px;
  margin-bottom: 80px;

  .swiper-container {
    height: 100%;
  }
}

#spike >>> .countdown {
  verticalC(50px);

  .endText {
    font-weight: 700;
  }

  .text {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
  }
}
</style>