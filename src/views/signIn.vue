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
            <a href="/" style="text-decoration: none; color: white" router to="/">aflamy</a></v-toolbar-title>
          <!--spacing-->
          <v-spacer></v-spacer>
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
      <v-form  class="form-singUp" ref="form" v-model="valid" lazy-validation>
        <div class="content-form">
          <h2  class="white--text mb-3">SingIn</h2>
          <v-text-field class="white--text" v-model="name" :counter="15" :rules="nameRules" label="Email or Phone number" required></v-text-field>
          <v-text-field class="white--text" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-btn block
              class="red white--text mr-4 mt-3"
              @click="reset"
                 router
                 to="/signUp"
          >
            Sing In
          </v-btn>
          <div class="signUp-page">
            <span class="caption white--text">Don't have an account? <v-btn class="red--text" icon  router  to="/signUp">Sign Up</v-btn> </span>
            <span class="caption white--text">Forgot Password? </span>
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
  name: "signIn",
  components: {FooterPage},
  data:function (){
    return{
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
    }
  }
}
</script>

<style >
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
  padding:40px 20px ;
  position: relative;

}
@media only screen and (max-width: 1130px) {
  .singUp form {
    width: 70%;
    padding:40px 20px ;
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
.singUp form .content-form{
  position: relative;
  z-index: 555;
}
.singUp form label{
  color: #565658 !important;
  font-size: 14px;
  padding: 15px;
}
.singUp form .v-text-field input{
  background-color: #1B1B1D;
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

.signUp-page{
  margin-top:15px;
  display: flex;
  justify-content: space-between;
}
.btn-sssignIn{
  background-color: transparent !important;

}
.btn-signIn:active{
  background-color: transparent !important;
}
@media only screen and (max-width: 600px) {
  .singUp form {
    width: 95%;
    padding:40px 20px ;
    position: relative;

  }
}
</style>