<template>
  <div class="recently-adding">
    <div class="title-section ">
      <h4 class="white--text">Recently Added</h4>
      <v-spacer></v-spacer>
      <h5 class="grey--text">View All</h5>
    </div>
    <VueSlickCarousel v-bind="settings">
      <div class="img-slider" v-for="recently in recentlyAdded" :key="recently.id">
        <img :src="recently.image">
        <div class="text-img">
          <h4 class="white--text">KUNG FU PANDA</h4>
          <div class="details-film white--text">
            <span>2h 15min</span>
            <span>family</span>
            <span>Adventure</span>
          </div>
          <div class="download-film white--text">
              <span>
                <v-icon></v-icon>
                Download
              </span>
            <span>
                <v-icon></v-icon>
                Download
              </span>
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
  name: "recentlyAdded",
  components: {VueSlickCarousel},
  title_section: "Recently Added",
  data: function () {
    return {
      recentlyAdded: [
        {"id": 1, "image": "/image/recently/recently_3.jpg"},
        {"id": 2, "image": "/image/recently/recently_1.jpg"},
        {"id": 3, "image": "/image/recently/recently_2.jpg"},
        {"id": 4, "image": "/image/recently/recently_4.jpg"},
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
.recently-adding {
  margin: 40px 0px 0 0;
  letter-spacing: 1px;
}

.recently-adding .title-section {
  display: flex;
  margin-bottom: 15px;
}

.recently-adding .img-slider {
  width: 97% !important;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  transition: all .2s ease-in-out;
}

.recently-adding .img-slider img {
  width: 100% !important;
  height: 210px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  border-radius: 10px;

}

.recently-adding .img-slider:hover {
  width: 110% !important;
  height: 400px;
  position: relative;
  z-index: 555;
}

.recently-adding .img-slider:hover img {
  height: 260px;
  border-radius: 0px;
}

.recently-adding .img-slider .text-img {
  opacity: 0;
  transition: all 0.2s ease-in-out;
  background-color: #232323;
  padding: 10px 20px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.recently-adding .img-slider:hover .text-img {
  opacity: 1;
}
</style>