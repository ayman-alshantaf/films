<template>
  <v-app class="black" style="background-color: black">
    <navbar/>
    <div class="homePage">
      <carousels/>
      <v-container fluid class="px-10">
        <recently-added/>
        <animation-movies/>
        <top-movies/>
        <adventures-movies/>
        <action-movies/>
      </v-container>
    </div>
    <footer-page/>
  </v-app>

</template>

<script>
import Carousels from "../components/carousels";
import RecentlyAdded from "../components/homePage/recentlyAdded";
import AnimationMovies from "../components/homePage/animationMovies";
import TopMovies from "../components/homePage/topMovies";
import AdventuresMovies from "../components/homePage/adventuresMovies";
import ActionMovies from "../components/homePage/actionMovies";
import Navbar from "../components/componentsPublic/navbar";
import FooterPage from "../components/componentsPublic/footerPage";

export default {
  name: "Home",

  components: {
    FooterPage,
    Navbar,
    ActionMovies,
    AdventuresMovies,
    TopMovies,
    AnimationMovies,
    RecentlyAdded,
    Carousels,
  },
};
</script>
