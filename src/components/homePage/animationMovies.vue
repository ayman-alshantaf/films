<template>
  <div class="animation-movies">

    <div class="title-section ">
      <h4 class="white--text">Animation Movies</h4>
      <v-spacer></v-spacer>
      <h5 class="grey--text">View All</h5>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div class="img-slider" v-for="recently in recentlyAdded" :key="recently.id">
        <img :src="recently.image">
        <div class="text-img">
          <h4 class="white--text ">KUNG FU PANDA</h4>
          <div class="details-film white--text">
            <div class="details-film">
              <div class="text-dots">
                <span class="dots" style="margin-left: -150px !important;"></span>
                <span class="subtitle-1 "> 2h 15min </span>
              </div>
              <div class="text-dots">
                <span class="dots">.</span>
                <span class="subtitle-1"> Family </span>
              </div>
              <div class="text-dots">
                <span class="dots">.</span>
                <span class="subtitle-1">Adventure </span>
              </div>
            </div>
          </div>
          <div class="download-film white--text">
            <small>
              <v-icon>mdi-arrow-collapse-down</v-icon>
              Download
            </small>
            <small>
              <v-icon>mdi-plus</v-icon>
              Add to List
            </small>
          </div>
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
  name: "animationMovies",
  components: {VueSlickCarousel},
  data: function () {
    return {
      recentlyAdded: [
        {"id": 1, "image": "image/animation/animation_1.jpg"},
        {"id": 1, "image": "image/animation/animation_2.jpg"},
        {"id": 1, "image": "image/animation/animation_3.jpg"},
        {"id": 1, "image": "image/animation/animation_4.jpg"},
      ],
      settings: {
        "dots": false,
        "arrows": false,
        "infinite": true,
        "speed": 1000,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "initialSlide": 0,
        "autoplay": true,
        "autoplaySpeed": 1500,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 2,
              "slidesToScroll": 2,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 700,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
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
.animation-movies {
  margin: 40px 0px 0 0;
  letter-spacing: 1px;
}

.animation-movies .title-section {
  display: flex;
  margin-bottom: 15px;
}

.animation-movies .img-slider {
  width: 97% !important;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.animation-movies .img-slider img {
  width: 100% !important;
  height: 210px;
  cursor: pointer;
  border-radius: 10px;
  transition: all .2s ease-in-out;
}

.animation-movies .img-slider:hover {
  width: 110% !important;
  height: 400px;
  position: relative;
  z-index: 555;
}

.animation-movies .img-slider:hover img {
  height: 260px;
  border-radius: 0;
}

.animation-movies .img-slider .text-img {
  opacity: 0;
  transition: all 0.2s ease-in-out;
  background-color: #232323;
  padding: 10px 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.animation-movies .img-slider:hover .text-img {
  opacity: 1;
}
.recently-adding .img-slider .text-img h4 {
  font-weight: 400;
  margin-left: 5px;
}

.details-film {
  display: flex;
  margin-top: -5px !important;

}

.details-film span {
  margin-right: 5px;
  font-size: 14px !important;
  font-weight: 300;

}

span.dots {
  font-size: 30px !important;
  color: #980000;
  font-weight: bolder;
  padding: 0px;
}

.recently-adding .img-slider:hover .text-img {
  opacity: 1;
}
.download-film >small{
  font-weight: 200;
  margin-right: 10px;
  font-size: 12px;
}
.download-film >small > .v-icon{
  border: 1px solid #980000;
  color: white;
  border-radius: 50%;
  font-size: 13px;
  width: 22px;
  height: 22px;
}
</style>