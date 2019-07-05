<template>
  <div id="header">
    <i class="iconfont" @click="goBack">&#xe601;</i>
    <p>城市列表</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>
 
<style lang="stylus" scoped>
@import '../../assets/css/public.styl';

#header {
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fad101;
  z-index: 100;
  line-height: 80px;
  text-align: center;

  .iconfont {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    padding-left: 16px;
    font-size: 30px;
    display: block;
    width: 60px;
  }

  p {
    font-size: 28px;
  }
}
</style>