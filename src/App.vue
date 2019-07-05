<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <keep-alive exclude="">
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
  },
  created() {},
  methods: {
  }
};
</script>


<style lang="stylus">
/* 动画效果配置 */
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to, .fade-leave-active {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
