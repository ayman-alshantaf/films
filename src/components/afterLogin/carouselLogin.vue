<template>
  <div class="header-carousel">
    <!--   main container carousel-->
    <v-carousel height="90vh" hide-delimiters>
      <!--item carousel-->
      <v-carousel-item v-for="slide in slides" :key="slide.id">
        <!--custom overflow carousel-->
        <div class="overflow-sliders"></div>
        <!--container sub  slider-->
        <v-sheet height="100%" :class="`slide-${slide.id}`">
          <v-row class="fill-height" align="center" justify="center">
            <!--container text slider-->
            <div class=" text-header ">
              <!--content text-->
              <div class="subContainer-text">
                <div class="text-lg-h2 text-md-h2 text-sm-h4 text-xs-h4 title-text">
                  <h2>It</h2> <span class="date-titel">(2017)</span>
                </div>
                <div class="details-film">
                  <span><span class="dots">.</span> 2h 15min </span>
                  <span><span class="dots">.</span> Family </span>
                  <span><span class="dots">.</span>Adventure </span>
                  <span><span class="dots">.</span>Horror </span>
                </div>
                <div class="paragraph">
                  <p>In a small town in Maine, seven children known as The Losers Club come face to
                    face with life
                    problems, bullies and a monster that takes the shape of a clown called
                    Pennywise.</p>
                </div>
                <div class="rating-header ">
                  <div class="value-rating ">4.0</div>
                  <v-rating hover length="5" color="warning" background-color="warning lighten-1"
                            size="25" dense
                            value="3"></v-rating>
                </div>
                <div class="chapter">
                  <h3>Chapter 2</h3>
                  <h3 v-if="login">asddddd</h3>
                </div>
              </div>
              <hr>
              <!--icon watch and download-->
              <div class="watch-download">
                <span class="caption" style="">
                  <v-icon class="red--text mr-2">mdi-play-circle</v-icon>
                  Watch now
                </span>
                <span class="caption">
                  <v-icon class="grey--text lighten-1 mr-2">mdi-plus-circle</v-icon>
                  My List
                </span>
                <span class="caption">
                  <v-icon class="grey--text lighten-1 mr-2">mdi-arrow-down-bold-circle</v-icon>
                  My List
                </span>
              </div>
            </div>
            <!--the video popups-->
            <v-dialog v-model="dialog" persistent height="100px" width="70%">
              <!--icon start video-->
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon dark v-bind="attrs" v-on="on">
                  <v-icon class="white--text icon-video ">mdi-play-circle</v-icon>
                </v-btn>
              </template>
              <!--content to card  video-->
              <v-card>
                <!--the video -->
                <video id="video" x-webkit-airplay="allow" data-youtube-id="N9oxmRT2YWw" controls
                       autoplay
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
  name: "carouselLogin",
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
.v-carousel{
  height: 90vh;
}
$slide: 4;
@for $n_slide from 1 through $slide {
  .slide-#{$n_slide} {
    background-image: url("../../assets/image/header/header_#{$n_slide}.jpg");
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
  bottom: 1%;
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
  margin-top: 10px;
}

.details-film span {
  margin-right: 3px;
}

.dots {
  font-size: 35px;
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
.text-header > hr{
  width: 98%;
  margin: auto;
  margin-top: 20px;
  border: 1px solid #4C4C4C;
}
.watch-download {
  padding: 20px 10%
}
.watch-download > span{
  padding: 10px 10px 10px 10px
}
.watch-download > span:first-of-type{
  border-right: 2px solid #4C4C4C;padding: 10px 20px 10px 0
}
.watch-download > span > .v-icon{
  font-size: 35px
}
.chapter {
  border-left: 2px solid red;
  padding: 5px;
}

.subContainer-text {
  padding: 0 10%;
}
.icon-video{
  z-index: 999;
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  font-size: 90px!important;
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
  .watch-download {
    padding: 20px 5%
  }
  .watch-download > span{
    padding: 10px 7px 10px 7px
  }
  .watch-download > span > .v-icon{
    font-size: 25px
  }
  .text-header .title-text > span {
    font-size: 20px;
  }

}

</style>
