<template>
  <div id="scroll">
    <div class="scroll_content">
      <ul :class="{animateScrollTop}">
        <li v-for="(item, index) in scrollList" :key="index" class="per_content">{{ item.title }}</li>
      </ul>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      animateScrollTop: false,
      scrollList: [
        {
          uid: 0,
          title: "这是第一条信息"
        },
        {
          uid: 1,
          title: "这是第二条信息"
        },
        {
          uid: 2,
          title: "这是第三条信息"
        },
        {
          uid: 3,
          title: "这是第四条信息"
        },
        {
          uid: 4,
          title: "这是第五条信息"
        }
      ]
    };
  },
  created() {},
  mounted() {
    setInterval(this.animateScroll, 2000)
  },
  methods: {
    // 滚动动画
    animateScroll() {
      this.animateScrollTop = true
      setTimeout(() => {
        this.scrollList.push(this.scrollList[0])
        this.scrollList.shift()
        this.animateScrollTop = false
      }, 1000)
    }
  }
};
</script>
 
<style lang="stylus" scoped>
@import '../../assets/css/public.styl';

#scroll {
  height: 80px;
  background-color: red;
  width: 100%;
  padding: 5px 0;
  box-sizing: border-box;
  overflow: hidden;

  .animateScrollTop {
    transition: all 0.5s;
    transform: translateY(-37px);
  }

  .per_content {
    font-size: 28px;
    verticalC(37px);
  }
}
</style>