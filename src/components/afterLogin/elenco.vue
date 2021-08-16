<template>
  <div class="elenco">
    <div class="title-section ">
      <h4 class="white--text">Elenco</h4>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div class="img-slider" v-for="Adventure in Adventures" :key="Adventure.id">
        <img :src="Adventure.image">
        <div class="text-img">
          <h4 class="white--text">Keanu Reeves</h4>
          <small>John Wick</small>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "elenco",
  components: {VueSlickCarousel},
  data: function () {
    return {
      Adventures: [
        {"id": 1, "image": "image/actors/actor_1.jpg"},
        {"id": 1, "image": "image/actors/actor_5.jpg"},
        {"id": 1, "image": "image/actors/actor_3.jpg"},
        {"id": 1, "image": "image/actors/actor_4.jpg"},
        {"id": 1, "image": "image/actors/actor_5.jpg"},
        {"id": 1, "image": "image/actors/actor_6.jpg"},

      ],
      settings: {
        "dots": false,
        "arrows": false,
        "infinite": true,
        "speed": 1000,
        "slidesToShow": 6,
        "slidesToScroll": 1,
        "initialSlide": 0,
        "autoplay": true,
        "autoplaySpeed": 1500,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "initialSlide": 2
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1
            }
          }
        ]
      },

    }
  }

}
</script>

<style scoped>
.elenco {
  margin: 50px 0px 0 0;
  letter-spacing: 1px;
}

.elenco .title-section {
  display: flex;
  margin-bottom: 15px;
}

.elenco .img-slider {
  width: 96% !important;
  height: 350px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.elenco .img-slider img {
  width: 100% !important;
  height: 65%;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.text-img {
  background-color: #333333;
  padding: 20px;
  text-align: center;
}

.text-img small {
  color: #999999;
}
</style>



