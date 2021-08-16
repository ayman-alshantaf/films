<template>
  <div class="Adventures">
    <div class="title-section ">
      <h4 class="white--text">Adventures movies</h4>
      <v-spacer></v-spacer>
      <h5 class="grey--text">View All</h5>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div class="img-slider" v-for="Adventure in Adventures" :key="Adventure.id">
        <img :src="Adventure.image">
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
  name: "adventuresMovies",
  components: {VueSlickCarousel},
  data: function () {
    return {
      Adventures: [
        {"id": 1, "image": "image/adventuresMovies/adventure_1.jpg"},
        {"id": 1, "image": "image/adventuresMovies/adventure_2.jpg"},
        {"id": 1, "image": "image/adventuresMovies/adventure_3.jpg"},
        {"id": 1, "image": "image/adventuresMovies/adventure_4.jpg"},
        {"id": 1, "image": "image/adventuresMovies/adventure_5.jpg"},
        {"id": 1, "image": "image/adventuresMovies/adventure_6.jpg"},
        {"id": 1, "image": "image/adventuresMovies/adventure_7.jpg"},
        {"id": 1, "image": "image/adventuresMovies/adventure_8.jpg"},
        {"id": 1, "image": "image/adventuresMovies/adventure_9.jpg"},
        {"id": 1, "image": "image/adventuresMovies/adventure_10.jpg"},
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
.Adventures {
  margin: 40px 0px 0 0;
  letter-spacing: 1px;
}

.Adventures .title-section {
  display: flex;
  margin-bottom: 15px;
}

.Adventures .img-slider {
  width: 96% !important;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.Adventures .img-slider img {
  width: 100% !important;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}
</style>

