<template>
<div class="page">
  <swiper :options="swiperOption">
    <swiperSlide v-for="(item, index) in data" :key="index">
      <img :src="item" alt="">
    </swiperSlide>
    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'test',
  data () {
    return {
      data: [
        'https://ess-icsp.oss-cn-shenzhen.aliyuncs.com/images/2adf7611-9a02-4141-bab5-43e09b4d0dbe.png',
        'https://ess-icsp.oss-cn-shenzhen.aliyuncs.com/images/09987975-a6c3-4a78-863b-0853ce3aa8c2.png'
      ],
      swiperOption: {
        type: Object,
        default: () => {
          return {
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: (index, className) => `<span class="${className} swiper-pagination-bullet-anxin"></span>`
            }
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
  .page{
    background: blue;
  }
</style>
