<template>
  <div id="cityList">
    <ul>
      <li
        class="city"
        @click="clickCity(item)"
        v-for="(item, index) in cityName"
        :key="index"
      >{{ item }}</li>
    </ul>
  </div>
</template>
 
<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      cityName: ["上海", "雄安", "深圳", "济南", "雅安", "杭州", "昆明"]
    };
  },
  created() {},
  computed: {},
  methods: {
    clickCity(param) {
      this.changeCity(param)
      this.$router.push({name: 'home'})
    },
    ...mapMutations(["changeCity"]),
  }
};
</script>
 
<style lang="stylus" scoped>
@import '../../assets/css/public.styl';

#cityList {
  height: 150px;
  width: 100%;
  margin-top: 80px;
  background-color: yellow;
  padding: 30px 20px;
  box-sizing: border-box;

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .city {
    border: 1px solid #ccc;
    padding: 5px 10px;
    font-size: 30px;
    border-radius: 8px;
  }
}
</style>