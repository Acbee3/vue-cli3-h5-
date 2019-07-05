<template>
  <div id="footer">
    <div class="footer_button">
      <i class="iconfont">&#xe600;</i>
      <p>首页</p>
    </div>
    <div class="footer_button">
      <i class="iconfont">&#xe600;</i>
      <p>首页</p>
    </div>
    <div class="footer_button">
      <i class="iconfont">&#xe600;</i>
      <p>首页</p>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
 
<style lang="stylus" scoped>
@import '../../assets/css/public.styl';

#footer {
  padding: 10px 10px;
  box-sizing border-box;
  height: 80px;
  background-color: lightblue;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;

  .footer_button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;

    .iconfont {
      font-size: 27px;
    }
  }
}
</style>