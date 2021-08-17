<template>
  <div class="header-carousel">
    <!--start carousel-->
    <v-carousel height="90vh" hide-delimiters>
      <!--items carousel-->
      <v-carousel-item v-for="slide in slides" :key="slide.id">
        <!--custom overflow-->
        <div class="overflow-sliders"></div>
        <!--container sub  slider-->
        <v-sheet height="100%" :class="`slide-${slide.id}`">
          <!--content carousel-->
          <v-row class="fill-height" align="center" justify="center">
            <!--text slider-->
            <div class=" text-header ">
              <!--content text-->
              <div class="subContainer-text">
                <div class="text-lg-h2 text-md-h2 text-sm-h4 text-xs-h4  title-text">
                  <h2>It</h2> <span class="date-titel">(2017)</span>
                </div>
                <div class="details-film">
                  <div class="text-dots">
                    <span class="dots" style="margin-left: -6px"></span>
                    <span  class="subtitle-1 " > 2h 15min </span>
                  </div>
                  <div class="text-dots">
                    <span class="dots">.</span>
                    <span  class="subtitle-1"> Family </span>
                  </div>
                  <div class="text-dots">
                    <span class="dots">.</span>
                    <span  class="subtitle-1">Adventure </span>
                  </div>
                  <div class="text-dots">
                    <span class="dots">.</span>
                    <span  class="subtitle-1">Horror </span>
                  </div>
                </div>
                <div class="watch-video">
                  <div class="mr-2" style="display: flex ; ">
                    <v-icon >mdi-play</v-icon>
                    <h4 >watch Now  <small class="caption text-center" style="color: #9B9A9B;display: block">2h 15min | 09/05/2017</small>  </h4>
                  </div>
                  <span class="subtitle-1"><v-icon>mdi-plus</v-icon>My List</span>
                </div>
                <div class="paragraph">
                  <p>In a small town in Maine, seven children known as The Losers Club come face to face with life
                    problems, bullies and a monster that takes the shape of a clown called Pennywise.</p>
                </div>
                <div class="chapter">
                  <h3>Chapter 2</h3>
                  <h3 v-if="login">asddddd</h3>
                </div>
              </div>

            </div>
            <!--the video popups-->
            <v-dialog v-model="dialog" persistent height="100px" width="70%">
              <!--icon start video-->
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon dark v-bind="attrs" v-on="on">
                  <v-icon class="white--text icon-video">mdi-play-circle</v-icon>
                </v-btn>
              </template>
              <!--content to card  video-->
              <v-card>
                <!--the video -->
                <video id="video" x-webkit-airplay="allow" data-youtube-id="N9oxmRT2YWw" controls autoplay
                       src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                       poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
                       width="100%">
                </video>
                <!--dividing line-->
                <v-divider></v-divider>
                <!-- button close the card-->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text v-on:click="stopVideo">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "carousels",
  data() {
    return {
      dialog: false,
      slides: [
        {"id": 1, "image": "", "video-1": "https://www.youtube.com/embed/tgbNymZ7vqY"},
        {"id": 2, "image": "", "video-1": "https://www.youtube.com/embed/tgbNymZ7vqY"},
        {"id": 3, "image": "", "video-1": "https://www.youtube.com/embed/tgbNymZ7vqY"},
        {"id": 4, "image": "", "video-1": "https://www.youtube.com/embed/tgbNymZ7vqY"},
      ],
      login: false,
    }
  },
  methods: {
    stopVideo: function () {
      let vv = document.getElementById('video');
      vv.pause();
      this.dialog = false;
    }
  }
}
</script>
<style lang="scss" scoped>
.v-carousel {
  height: 90vh;
}

$slide: 4;
@for $n_slide from 1 through $slide {
  .slide-#{$n_slide} {
    background-image: url("../assets/image/header/header_#{$n_slide}.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0px 0px 60px 40px rgb(0, 0, 0, 0.8);
  }
}

.slide-1 {
  background-position: center;
  box-shadow: inset 0px 0px 30px 40px rgb(0, 0, 0, 0.3);

}

.overflow-sliders {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 22;
  box-shadow: inset 0px 0px 120px 120px rgb(0, 0, 0, 0.6)
}

.text-header {
  position: absolute;
  bottom: 15%;
  z-index: 333;
  color: white;

}

.text-header .title-text {
  display: flex;
}

.text-header .title-text {
  position: relative;
}

.text-header .title-text > span {
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  left: 6%;
  bottom: -45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.details-film {
  display: flex;
}

.details-film span {
  margin-right: 13px;
  font-size: 15px !important;
  font-weight: 300;
}
span.dots {
  font-size: 35px !important;
  color: #980000;
  font-weight: bold;
  padding: 0px;
}

.text-header .paragraph {
  margin-top: 25px;
}

.text-header .paragraph p {
  margin-bottom: 7px;
  width: 40%;
}

@media only screen and (max-width: 1110px) {
  .text-header .paragraph p {
    margin-bottom: 7px;
    width: 90%;
  }
}

.text-header .rating-header {
  display: flex;
  align-items: center;
  margin: 0;
}

.text-header > hr {
  width: 98%;
  margin: auto;
  margin-top: 20px;
  border: 1px solid #4C4C4C;
}

.chapter {
  border-left: 2px solid #980000;
  padding:12px 0px 0px 6px;
}

.subContainer-text {
  padding: 0 10%;
}

.icon-video {
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 90px !important;
}

@media only screen and (max-width: 500px) {
  .text-header .paragraph p {
    margin-bottom: 7px;
    width: 90%;
    font-size: 14px;
  }
  .details-film span {
    margin-right: 0px;
  }
  .details-film span {
    font-size: 16px;
  }

  .text-header .title-text > span {
    font-size: 20px;
  }

}

.watch-video {
  display: flex;
  align-items: center;
  background-color: #3E3E40;
  width: 320px;
  color: white;
  height: 55px;
  border-radius: 30px;
  position: relative;
}

.watch-video > span {
  margin-right: 10px;

}

.watch-video > div {
  display: flex;
  align-items: center;
  position: relative;
  left: -4%;
}
.watch-video > div > h3 > small{
  display: block;
}
.watch-video >  div  .v-icon {
  color: white;
  background-color: #980000;
  border-radius: 50%;
  font-size: 35px;
  border: none;
  margin-right: 10px;
  width: 55px;
  height: 55px;
}

.watch-video > span:last-of-type > .v-icon {
  width: 30px;
  height: 30px;
  color: white;
  font-size: 20px;
  background-color: #2D2626;
  border-radius: 50%;
  margin-right: 7px;
  border: 1px solid red !important;

}
.watch-video > span:last-of-type {
  font-size: 13px !important;
  font-weight: 300;
}

</style>
