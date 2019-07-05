<template>
  <div id="icons">
    <ul class="product_list">
      <li v-for="(item, index) in iconLists" :key="index" @click="toDetail()">
        <img :src="item.url" alt>
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        iconLists: [
        {
          id: 0,
          url: "images/icon1.png",
          title: "商品一"
        },
        {
          id: 1,
          url: "images/icon1.png",
          title: "商品一"
        },
        {
          id: 2,
          url: "images/icon1.png",
          title: "商品一"
        },
        {
          id: 3,
          url: "images/icon1.png",
          title: "商品一"
        },
        {
          id: 4,
          url: "images/icon1.png",
          title: "商品一"
        },
        {
          id: 5,
          url: "images/icon1.png",
          title: "商品一"
        },
        {
          id: 6,
          url: "images/icon1.png",
          title: "商品一"
        },
        {
          id: 7,
          url: "images/icon1.png",
          title: "商品一"
        },
        {
          id: 8,
          url: "images/icon1.png",
          title: "商品一"
        },
        {
          id: 9,
          url: "images/icon1.png",
          title: "商品一"
        }
      ]
    };
  },
  methods: {
    toDetail() {
      this.$router.push({
        path: '/detail'
        });
    },
  }
};
</script>

<style lang="stylus" scoped>
@import '../../assets/css/public.styl';

#icons {
  width: 100%;
  height: 360px;
  background-color: lightpink;

  .product_list {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    width: 100%;
    height: 100%;
    overflow: hidden;

    li {
      width: 20%;
      list-style-type: none;

      img {
        width: 70%;
      }

      p {
        margin-top: 10px;
      }
    }
  }
}
</style>

