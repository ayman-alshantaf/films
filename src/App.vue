<template>
  <v-app class="black" style="background-color: black">
<!--    <navbar/>-->
    <v-main>
      <router-view />
    </v-main>
<!--    <footer-page/>-->
  </v-app>
</template>

<script>
// import Navbar from "./components/componentsPublic/navbar";
// import FooterPage from "./components/componentsPublic/footerPage";
export default {
  name: "App",
  // components: {FooterPage, Navbar},
  data: () => ({
    //
  }),
};
</script>
<style>
*{
  letter-spacing: 1.5px !important;
}


</style>