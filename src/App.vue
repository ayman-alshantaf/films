<script src="../../wrebSite/e-commerce/js/script.js"></script>
<template>
  <v-app class="black" id="" style="background-color: black">
    <div class="load-page">

    </div>
    <div id="window">
      <!--    <navbar/>-->
      <v-main>
        <router-view />
      </v-main>
      <!--    <footer-page/>-->
    </div>
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
  methods:{
    loadPage: function (){
      window.onload = function() {
        let page = document.querySelector('.load-page');
        page.style.display = "none";
      };
    }
  },
  mounted: function(){
    setTimeout(this.loadPage() , 5000);
  }

};
</script>
<style>
*{
  letter-spacing: 1.5px !important;
}
.load-page{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #232323;
  z-index:999;
}

</style>