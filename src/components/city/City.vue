<template>
  <div id="city">
    <Header></Header>
    <Citylist></Citylist>
  </div>
</template>
 
<script>
import Header from './Header'
import Citylist from './Citylist'

export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    Header,
    Citylist
  }
};
</script>
 
<style lang="stylus" scoped>
@import '../../assets/css/public.styl';
</style>