<template>
  <v-container>
    <div id="home">
      <v-lazy
        :options="{
          threshold: 0.8,
        }"
        min-height="200"
        transition="scale-transition"
        origin="center center"
      >
        <v-card
          id="card"
          class="mx-auto"
          height="550%"
          width="1000"
          elevation="12"
        >
          <v-card-title id="title">
            <v-avatar class="d-none d-sm-flex" tile size="25%">
              <v-img src="@/assets/nav/about.png"></v-img>
            </v-avatar>

            <v-avatar class="d-flex d-sm-none" tile size="100%">
              <v-img src="@/assets/nav/about.png"></v-img>
            </v-avatar>
          </v-card-title>
          <v-row>
            <v-col cols="12" md="5" align="center">
              <v-lazy
                transition="scale-transition"
                origin="center center"
                :options="{
                  threshold: 0.8,
                }"
              >
                <v-row class="justify-center">
                  <v-avatar id="imgProfile" size="75%">
                    <v-img src="@/assets/jscc2.jpg"></v-img>
                  </v-avatar>
                </v-row>
              </v-lazy>
              <v-row>
                <v-col>
                  <h4 class="text-md-left">
                    <v-icon color="indigo">fas fa-map-marker-alt</v-icon>
                    Bangkok, THAILAND
                  </h4>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4 class="text-md-left">
                    <v-icon color="indigo">fas fa-envelope</v-icon>
                    jirayut_ssww@hotmail.com
                  </h4>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="1" align="center">
              <v-divider class="d-none d-md-flex" vertical></v-divider>
              <v-divider class="d-flex d-md-none"> </v-divider>
            </v-col>

            <v-col cols="12" md="6">
              <h1 class="text-md-left">Hello.</h1>
              <h2 class="text-md-left">My name is</h2>
              <h1 class="text-md-left">Jirayut Srisawangwong.</h1>
              <h2 class="text-md-left">My nickname is Farm.</h2>
              <h2 class="text-md-left">I'm 24 years old.</h2>
              <br />
              <div class="col-md-12" align="center">
                <ul class="social-network social-circle">
                  <li>
                    <a
                      href="https://www.facebook.com/jirayutcc"
                      class="icoFacebook"
                      ><v-icon>fab fa-facebook-f</v-icon></a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/farmhouse.fh"
                      class="icoIg"
                      ><v-icon>fab fa-instagram</v-icon></a
                    >
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/jirayutcc"
                      class="icoLinkedin"
                      ><v-icon>fab fa-linkedin</v-icon></a
                    >
                  </li>
                  <li>
                    <a href="https://github.com/jirayutcc" class="icoGithub"
                      ><v-icon>fab fa-github</v-icon></a
                    >
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-lazy>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
$white: #ffffff;
$gutters: 24px;

@media screen and (min-width: 420px) {
  #imgProfile {
    size: 0cm;
  }
}

#card {
  background: $white;
  border-radius: 25px;
  padding: ($gutters * 2);
}

#title {
  font-size: 30px;
  font-weight: 700;
}

.btn__container {
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  min-width: 110px;
  background-color: rgb(175, 175, 175);
  padding: 1rem 2rem;
  text-decoration: none;
  color: #c71e7e;
  display: flex;
  transition: all 0.2s ease-in-out;
  margin-right: 10px;

  i {
    color: #df3796;
    font-size: 20px;
    padding-right: 10px;
    transition: all 0.3s ease-in-out;
  }
  span {
    font-family: "Roboto", sans-serif;
    align-self: center;
    transform: translateX(0px);
    transition: all 0.1s ease-in-out;
    opacity: 1;
  }

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(to right, #ff3019 0%, #c90477 100%);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    i {
      transform: translateX(45px);
      padding-right: 0;
      color: #fff;
    }
    span {
      transform: translateX(30px);
      opacity: 0;
    }
  }
  &:active {
    transform: scale(1);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
}
/*ber social*/
ul.social-network {
  padding: 0;
}

ul.social-network li {
  display: inline;
  margin: 0 6px;
}

.social-network a.icoFacebook:hover {
  background-color: #3b5998;
}

.social-network a.icoIg:hover {
  background-color: rgb(224, 36, 61);
}

.social-network a.icoLinkedin:hover {
  background-color: #0073b0;
}

.social-network a.icoGithub:hover {
  background-color: rgb(5, 5, 5);
}

.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
}

.social-circle li {
  margin: 0;
  line-height: 50px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -ms--transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
}

.social-circle i {
  color: #fff;
}

.v-icon {
  display: inline-block;
}

a {
  background-color: #d3d3d3;
}
</style>
