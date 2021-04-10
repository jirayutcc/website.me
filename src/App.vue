<template>
  <div id="app">
    <v-app>
      <v-container id="nav" v-if="this.$route.path != '/'">
        <div id="home">
          <nav>
            <ul class="d-none d-md-flex">
              <li v-for="header in header" :key="header.name">
                <router-link id="header" :to="header.link"> {{ header.name }} </router-link>
              </li>
            </ul>
            <v-app-bar-nav-icon
              class="d-flex d-md-none"
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </nav>

          <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            dark
            color="#373a47"
          >
            <v-list nav dense>
              <v-list-item-group
                v-model="group"
                active-class="indigo --text text--lighten-2"
              >
                <v-list-item
                  v-for="header in header"
                  :key="header.name"
                  :to="header.link"
                >
                  <v-list-item-title> {{ header.name }} </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </div>
      </v-container>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    header: [
      { name: "ABOUT", link: "/home" },
      { name: "EDUCATION", link: "/education" },
      { name: "EXPERIENCE", link: "/experience" },
      { name: "SKILLS", link: "/skills" },
      { name: "PORTFOLIO", link: "/portfolio" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$duration: 0.2s;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);

* {
  text-decoration: none;
  font-family: "Nunito", sans-serif;
}

#nav {
  padding-top: 0px;
  padding-bottom: 0px;
}

#app {
  background-image: url("./assets/background/bgPixel2.jpg");
  background-size: cover;
}

nav ul {
  float: right;
}

nav ul li {
  display: inline-block;
  line-height: 75px;
  margin: 0 2px;
}

nav ul li a {
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  padding: 7px 13px;
  border-radius: 3px;
}

#header {
  font-size: 20px;
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  padding-bottom: 8px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgb(255, 255, 255);
  }
  &:before {
    opacity: 0;
    transform: translateY(-$distance);
    transition: transform 0s $easeOutBack, opacity 0s;
  }
  &:after {
    opacity: 0;
    transform: translateY($distance/2);
    transition: transform $duration $easeOutBack, opacity $duration;
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform $duration $easeOutBack, opacity $duration;
    }
    &:after {
      transition: transform 0s $duration $easeOutBack, opacity 0s $duration;
    }
  }
}
</style>
