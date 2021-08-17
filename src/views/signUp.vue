<template>
  <div class="container-signup">
    <div class="img-signup"></div>
    <div class="navbar-singUp">
      <!--  Start Navbar-->
      <div class="navigation">
        <v-app-bar app class="px-9" flat height="70px">
          <!--icon link navigation small screen-->
          <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text 	d-flex d-lg-none"></v-app-bar-nav-icon>
          <v-spacer class="d-flex d-lg-none"></v-spacer>
          <!--the brand-->
          <v-toolbar-title class="text-uppercase white--text">
            <a href="/" style="text-decoration: none; color: white" router to="/">
              <v-icon class=" white--text mr-2" style="font-size: 26px">mdi-play-network-outline</v-icon>
              aflamy</a></v-toolbar-title>
          <!--spacing-->
          <!--singUp-->
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
    </div>
    <div class="singUp">
      <v-form class="form-singUp" ref="form" v-model="valid" lazy-validation>
        <div class="content-form">
          <h2 class="white--text mb-3">Sign up</h2>
          <v-text-field class="white--text" v-model="name" :counter="15" :rules="nameRules" label="Email"
                        required></v-text-field>
          <v-text-field class="white--text" v-model="email" :rules="emailRules" label="Name" required></v-text-field>
          <v-text-field class="white--text" v-model="number" :rules="numberRules" label="Phone number"
                        required></v-text-field>
          <v-text-field class="white--text" v-model="email" :rules="passwordRules" label="Password"
                        required></v-text-field>
          <v-btn block
                 class=" white--text mr-4 mt-3"
                 @click="reset"
                 style="background-color: #980000"

          >
            Sing Up
          </v-btn>
          <div class="signUp-page">
            <span class="caption white--text">Don't have an account? <v-btn class="ml-3 caption red--text" icon router
                                                                            to="/signIn">Sign IN</v-btn> </span>
          </div>
        </div>
      </v-form>
    </div>
    <footer-page class="singUp-footer"/>
  </div>
</template>

<script>
import FooterPage from "../components/componentsPublic/footerPage";

export default {
  name: "signUp",
  components: {FooterPage},
  data: function () {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      number: '',
      numberRules: [
        v => !!v || 'phone is required',
        v => (v && v.length <= 10) || 'Phone must be less than 10 characters',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'password is required',
        v => (v && v.length <= 10) || 'password must be less than 10 characters',
      ],

    }
  }
}
</script>

<style>
.v-app-bar {
  background-color: rgba(35, 35, 35, 0) !important;
}

.container-signup {
  width: 100%;

}

.container-signup .img-signup {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 106.7%;
  background-image: url("../../public/image/login/movies_1.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .2;
  margin-top: -70px;
}

.singUp {
  width: 100%;
  min-height: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.singUp form {
  width: 30%;
  padding: 40px 20px;
  position: relative;

}

@media only screen and (max-width: 1130px) {
  .singUp form {
    width: 70%;
    padding: 40px 20px;
    position: relative;

  }
}

.singUp form:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: .8;
}

.singUp form .content-form {
  position: relative;
  z-index: 555;
}

.singUp form label {
  color: #565658 !important;
  font-size: 14px;
  padding: 15px;
}

.singUp form .v-text-field input {
  background-color: #1B1B1D;
  border-radius: 5px;
  opacity: 1 !important;
  color: white;
  padding: 30px;
  margin: 0 !important;
}


.singUp-footer {
  background-color: #000000 !important;
  opacity: .8;
}

.v-text-field {
  padding-top: 8px !important;
  margin-top: 0px !important;
}

.signUp-page {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  .singUp form {
    width: 95%;
    padding: 40px 20px;
    position: relative;

  }
}
</style>