module.exports = {
    publicPath: './',
    css: {
        loaderOptions: {
            css: {

            },
            stylus: {
                data: `
                    @import '@/assets/css/public.styl';
                `
            },
            postcss: {
                plugins: [
                    require("postcss-px2rem-exclude")({
                        "remUnit": 75, // 一般这里是75 因为设计稿一般为750px
                        // exclude: 这里写上用到的第三方插件，排除影响 
                        // "exclude": "node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js"
                    })
                ]
            }
        }
    }
}