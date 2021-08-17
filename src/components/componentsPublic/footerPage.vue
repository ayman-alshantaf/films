<template>
  <div class="footer">
    <v-container class="px-9 pt-15" fluid>
      <div class="content-footer">
        <v-row>
          <v-col cols="12" lg="3" md="6" sm="6" class="white--text">
            <ul>
              <li>Home</li>
              <li>Contact us</li>
              <li>Terms of service</li>
              <li>About us</li>
            </ul>
          </v-col>
          <v-col lg="2" md="6" sm="6" class="white--text">
            <ul>
              <li>Live</li>
              <li>FAQ</li>
              <li>Premium</li>
              <li>Privacy Policy</li>
            </ul>
          </v-col>
          <v-col lg="3" md="6" sm="6" class="white--text">
            <ul>
              <li>Popular</li>
              <li>Recently Released</li>
              <li>250 IMDB</li>
              <li>Advertise with us</li>
            </ul>
          </v-col>
          <v-col lg="1" md="6" sm="6" class="white--text">
          </v-col>
          <v-col lg="3" md="6" sm="6" class="white--text">
            <h3 class="brand">AFLAMY</h3>
            <p>Aflamy is the world’s leading
              community for creators to share,
              grow, and get hired.</p>
            <div class="social-media">
              <span><v-icon>mdi-facebook</v-icon></span>
              <span><v-icon>mdi-instagram</v-icon></span>
              <span><v-icon>mdi-twitter</v-icon></span>
              <span><v-icon>mdi-whatsapp</v-icon></span>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="all-rights">
        <hr>
        <span style="text-align: center;color: white">© 2020 Filimo. All rights reserved.</span>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "footerPage"
}
</script>

<style scoped>
.footer {
  background-color: #262626;
  margin-top: 70px;
  min-height: 300px;
}

.footer .content-footer {
  width: 80%;
  margin: auto;
}

ul {
  list-style: none;
  line-height: 3.5em;
}
ul li {
font-size: 15px !important;
}
.footer .brand {
  margin-bottom: 20px;
}

.footer .social-media {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.footer .social-media span {
  background-color: #4C4C4C;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.footer .social-media span .v-icon {
  color: #B7B7B7 !important;
}

.footer .all-rights {
  margin: auto;
  margin-top: 50px;
  width: 90%;
  text-align: center;
}

.footer .all-rights span {
  display: block;
  margin-top: 30px;
  margin-bottom: 15px;
}

@media only screen and (max-width: 500px) {
  .footer .content-footer {
    width: 93%;
    margin: auto;
  }

  ul {
    list-style: none;
    line-height: 2.3em;
  }

  .footer .all-rights {
    margin: auto;
    margin-top: 50px;
    width: 99%;
    text-align: center;
  }
}
</style>