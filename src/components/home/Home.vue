<template>
  <div class="home">
    <Banner :res="bannerData"></Banner>
    <Icon></Icon>
    <Tabs></Tabs>
    <Scroll></Scroll>
    <Swiper_part></Swiper_part>
    <Spike></Spike>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from "./Banner";
import Icon from "./Icon";
import Tabs from "./Tabs";
import Scroll from "./Scroll";
import Swiper_part from "./Swiper_part";
import Spike from "./Spike";
import Footer from "./Footer";
import { mapState, mapMutations } from "vuex";

import { getHomeData } from "@/api/index";

export default {
  name: "Home",
  data() {
    return {
      bannerData: "",
      changeCity: ""
    };
  },
  computed: {
    ...mapState(["banner_city"])
  },
  created() {},
  mounted() {
    this.changeCity = this.banner_city;
    this.getData();
  },
  methods: {
    async getData() {
      let that = this;
      const { data: res } = await getHomeData();
      this.bannerData = res;
      console.log(res);
    },
    btn(param) {
      this.change(param);
    },
    ...mapMutations(["change"])
  },
  components: {
    Banner,
    Icon,
    Tabs,
    Scroll,
    Swiper_part,
    Spike,
    Footer
  },
  // 监听是否有变化 有变化则重新加载
  activated() {
    if (this.changeCity != this.banner_city) {
      console.log(this.changeCity, this.banner_city);
      this.changeCity = this.banner_city;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
