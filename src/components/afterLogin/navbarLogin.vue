<template>
  <!--  Start Navbar-->
  <div class="navigation">
    <v-app-bar app class="px-9" color="black" flat height="70px">
      <!--icon link navigation small screen-->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text 	d-flex d-lg-none"></v-app-bar-nav-icon>
      <v-spacer class="d-flex d-lg-none"></v-spacer>
      <!--the brand-->
      <v-toolbar-title class="text-uppercase white--text">aflamy</v-toolbar-title>
      <v-spacer class="d-none d-lg-flex"></v-spacer>
      <!--      link navbar lg screen-->
      <div class="d-none d-lg-flex">
        <v-btn v-for="link in links" :key="link.id" router :to="link.route"
               class="mx-2 font-weight-regular white--text customer-btn subtitle-1  black" height="65px"
               width="115px">
          {{ link.title }}
        </v-btn>
      </div>
      <!--spacing-->
      <v-spacer></v-spacer>
      <!--search icon-->
      <div class="search-user">
        <v-btn icon class="mr-2">
          <v-icon class="white--text">mdi-search-web</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-avatar>
          <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
          >
        </v-avatar>
      </div>
    </v-app-bar>
    <!--  Navigation Drawer-->
    <v-navigation-drawer temporary app v-model="drawer" dark>
      <!--brand website-->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-uppercase  text-lg-center text-h4 my-4">Aflamy</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--dividing line -->
      <v-divider class="white"></v-divider>
      <v-list dense flat>
        <!--container items-->
        <!-- the items-->
        <v-list-item class="item-link" v-for="link in links" :key="link.id" :to="link.route">
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </div>
  <!--  End Navbar-->
</template>

<script>
export default {
  name: "navbarLogin",
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
  font-size: 15px !important;
  font-weight: normal !important;
  letter-spacing: 1px !important;
}


.item-link {
  transition: all .3s ease-in-out;
}

.item-link:hover {
  background-color: white !important;
  color: black !important;
}

.search-user {
  display: flex;
  justify-content: space-between;
}

.search-user .v-avater {

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