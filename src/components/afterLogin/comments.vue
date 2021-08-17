<template>
  <div class="comments">
    <v-tabs class=" divider-comments" hide-slider="hide-slider">
      <v-tab @click="showComment" class="black white--text">Comments</v-tab>
      <v-tab @click="showRelate" class="black white--text">Related</v-tab>
      <v-spacer class="black"></v-spacer>
    </v-tabs>
    <div class="container-comments" v-if="showComments">
      <div class="spacer-comment1"></div>
      <div class="spacer-comment2"></div>
      <v-row>
        <v-col  v-for="comment in comments" :key="comment.id" cols="12" lg="6" md="6"  class="white--text pr-5 mb-16">
          <div :id="comment.id" class="content-comment">
            <div class="image">
              <img :src="comment.image">
            </div>
            <div class="text">
              <div class="details-comment">
                <h3>{{ comment.name }}</h3>
                <v-rating background-color="warning lighten-1" dense half-increments color="warning"
                          hover length="5" size="25" :value="comment.rating"></v-rating>
                <small class="d-none d-sm-block">21 de julho de 2019</small>
              </div>
              <div class="comment">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut
                  placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis
                  augue in leo aliquet malesuada .</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="container-comments" v-if="showRelated">
      <v-alert
          border="bottom"
          color="orange"
          elevation="2"
          type="info"
      >There are no related topics
      </v-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: "comments",
  data: function () {
    return {
      showComments: true,
      showRelated: false,
      comments: [
        {id: 1, name: "Sarah Green", comment: "", image: "/image/businessman/man_1.jpg", rating: 3},
        {id: 2, name: "Jon Barnes", comment: "", image: "/image/businessman/man_2.jpg", rating: 5},
        {id: 3, name: "Green  Sarah", comment: "", image: "/image/businessman/man_3.jpg", rating: 4},
        {id: 4, name: "ayman Green", comment: "", image: "/image/businessman/man_4.jpg", rating: 2},
      ],
    }
  },
  methods: {
    showComment: function () {
      this.showComments = true;
      this.showRelated = false;
    },
    showRelate: function () {
      this.showComments = false;
      this.showRelated = true;
    }
  }
}
</script>

<style scoped>
.comments {
  margin-top: 30px;
}

.v-tab--active {
  color: #980000 !important;
  position: relative;
  z-index: 222;
}

.v-tab:after {
  content: "";
  width: 1300px;
  height: 3px;
  background-color: #4C4C4C;
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 1 !important;
}

.v-tab--active:after {
  content: "";
  width: 100%;
  height: 3px;
  background-color: red;
  position: absolute;
  left: 0;
  bottom: 0;
  opacity: 1 !important;
  z-index: 222;
}

.container-comments {
  padding: 100px 4% 20px 4%;
  position: relative;
}

.comments .content-comment {
  display: flex;
}

.comments .content-comment .image {
  width: 85px;
  margin-right: 20px;
}

.comments .content-comment .image img {
  width: 85px;
  height: 85px;
  border-radius: 50%;
}

.comments .content-comment .text .details-comment {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.comments .content-comment .text .details-comment small {
  color: #999999;
  font-weight: bold;
}

.comments .content-comment .text .comment {
  margin-top: 20px;
  color: #EEEEEE;
}

@media only screen and (max-width: 500px) {

  .comments .content-comment .image img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .container-comments {
    padding: 100px 0% 20px 0%;
  }

  .comments .content-comment .text .comment p {
    font-size: 14px !important;
  }
}
.content-comment{
  position: relative;
}
.spacer-comment1{
  position: absolute;
  height: 43%;
  width: 1px;
  top: 23px;
  background-color: #232323;
  right: 50%;
  margin: 5px;
}
.spacer-comment2{
  position: absolute;
  height: 43%;
  width: 1px;
  top: 50%;
  background-color: #232323;
  right: 50%;
  margin: 5px;
}
</style>