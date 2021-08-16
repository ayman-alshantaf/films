<template>
  <v-app class="black" style="background-color: black">
    <navbar-login/>
    <carousel-login/>
    <v-container fluid class="px-9">
      <elenco/>
      <comments/>
    </v-container>
    <footer-page/>
  </v-app>
</template>

<script>
import CarouselLogin from "../components/afterLogin/carouselLogin";
import Elenco from "../components/afterLogin/elenco";
import Comments from "../components/afterLogin/comments";
import FooterPage from "../components/componentsPublic/footerPage";
import NavbarLogin from "../components/afterLogin/navbarLogin";

export default {
  name: "afterLogin",
  components: {
    NavbarLogin,
    FooterPage,
    Comments,
    Elenco,
    CarouselLogin

  },
  data: function () {
    return []
  },
}
</script>

<style scoped>

</style>