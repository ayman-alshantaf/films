<template>
  <div class="recently-adding">
    <div class="title-section">
      <h4 class="white--text">TOP 10 IN Palestine</h4>
      <v-spacer></v-spacer>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div class="img-slider" v-for="topMovie in topMovies" :key="topMovie.id">
        <div class="number-top">
          <div class="text">
            TOP <br> {{ topMovie.id }}
          </div>
        </div>
        <img :src="topMovie.image">
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
  name: "topMovies",
  components: {VueSlickCarousel},
  data: function () {
    return {
      topMovies: [
        {"id": 1, "image": "image/topMovies/topmovies_1.jpg"},
        {"id": 2, "image": "image/topMovies/adventure_2.jpg"},
        {"id": 3, "image": "image/topMovies/adventure_3.jpg"},
        {"id": 4, "image": "image/topMovies/adventure_4.jpg"},
        {"id": 5, "image": "image/topMovies/adventure_5.jpg"},
        {"id": 6, "image": "image/topMovies/adventure_6.jpg"},
        {"id": 7, "image": "image/topMovies/adventure_7.jpg"},
        {"id": 8, "image": "image/topMovies/adventure_8.jpg"},
      ],
      settings: {
        "dots": false,
        "centerMode": true,
        "arrows": true,
        "infinite": true,
        "speed": 1000,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 0,
        "autoplay": true,
        "autoplaySpeed": 2000,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 700,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "initialSlide": 2,
              "centerMode": false,

            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "centerMode": false,
            }
          }
        ]
      },

    }
  }

}
</script>

<style scoped>
.recently-adding {
  margin: 40px 0px 0 0;
  letter-spacing: 1px;
  position: relative;

}

.recently-adding .title-section {
  display: flex;
  margin-bottom: 15px;
}

.recently-adding .img-slider {
  position: relative;
  width: 100% !important;
  height: 420px;
  border-radius: 10px;
  transition: all .2s ease-in-out;
  margin-top: 30px;
}

.recently-adding .img-slider img {
  width: 97% !important;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.number-top {
  position: absolute;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 33px solid #990303;
  border-right: 32.5px solid #990303;
  border-top: 70px solid #990303;
  border-bottom: 25px solid transparent;
  right: 10%;
  top: -7%;
  z-index: 22222;
}

.number-top .text {
  position: absolute;
  top: -55px;
  font-weight: bold;
  left: -15px;
  color: white;
  text-align: center;
}

</style>