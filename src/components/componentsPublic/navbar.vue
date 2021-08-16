<template>
  <!--  Start Navbar-->
  <div class="navigation">
    <v-app-bar app class="px-9 " color="black" flat height="70px">
      <!--icon link navigation small screen-->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text 	d-flex d-lg-none"></v-app-bar-nav-icon>
      <!--space between div-->
      <v-spacer class="d-flex d-lg-none"></v-spacer>
      <!--the brand-->
      <v-toolbar-title class="text-uppercase white--text"><v-icon class=" white--text mr-2" style="font-size: 26px">mdi-play-network-outline</v-icon>aflamy</v-toolbar-title>
      <!--space between div-->
      <v-spacer class="d-none d-lg-flex"></v-spacer>
      <!--link navbar lg screen-->
      <div class="d-none d-lg-flex">
        <v-btn v-for="link in links" :key="link.id" router :to="link.route"
               class="mx-2 font-weight-regular white--text customer-btn subtitle-1  black" height="65px"
               width="115px">
          {{ link.title }}
        </v-btn>
      </div>
      <!--space between div-->
      <v-spacer></v-spacer>
      <!--singUp-->
      <v-btn  class="singUp" width="149px" height="50px" router to="/signIn">SingUp</v-btn>
    </v-app-bar>
    <!--  Navigation Drawer-->
    <v-navigation-drawer temporary app v-model="drawer" dark>
      <!--brand website-->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-uppercase  text-lg-center text-h5 my-4" style="display: flex; align-items: center"><v-icon class=" white--text mr-2" style="font-size: 25px">mdi-play-network-outline</v-icon>Aflamy</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--dividing line -->
      <v-divider class="white"></v-divider>
      <!--list links-->
      <v-list dense flat>
        <v-list-item class=" item-link" v-for="link in links" :key="link.id" :to="link.route">
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-1">{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
  <!--  End Navbar-->
</template>

<script>
export default {
  name: "navbar",
  data: function () {
    return {
      drawer: false,
      links: [
        {"id": 5, "title": "Home", route: '/'},
        {"id": 5, "title": "After Login", route: '/afterLogin'},
        {"id": 1, "title": "Download", route: ""},
        {"id": 2, "title": " new Movies", route: ""},
        {"id": 3, "title": "Popular", route: ""},
        {"id": 4, "title": "My List", route: ""},
      ],
    }
  }
}
</script>

<style scoped>
* {
  text-transform: none !important;
}

.customer-btn {
  font-size: 16px !important;
  font-weight: normal !important;
  letter-spacing: 1px !important;
}

.singUp {
  background-color: #980000 !important;
  color: white !important;
  font-size: 20px !important;
  letter-spacing: 1px !important;
}

.item-link {
  transition: all .3s ease-in-out;
}

.item-link:hover {
  background-color: white !important;
  color: black !important;
}
@media only screen and (max-width: 500px) {
  .v-app-bar{
    padding: 0!important;
  }
  .singUp {
    background-color: #980000 !important;
    color: white !important;
    font-size: 14px !important;
    letter-spacing: 1px !important;
    width: 90px !important;
    height: 35px !important;
  }
}

</style>