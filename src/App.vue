<script src="../../wrebSite/e-commerce/js/script.js"></script>
<template>
  <v-app class="black" id="" style="background-color: black">
    <div class="load-page">
      <div class="loader"></div>
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
    setTimeout(this.loadPage() , 500);
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid red;
  width: 90px;
  height: 90px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1.5s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>