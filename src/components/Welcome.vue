<template>
  <v-container fluid>
    <div id="welcome">
      <v-parallax
      dark
      height="700"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      >

      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <v-col class="text-right" justify="end" cols="3">
          <h1>❝</h1>
        </v-col>
        <v-col class="text-center" cols="6">
          <h1 class="display-1 font-weight-thin mb-4">Welcome</h1>
          <h4 class="subheading">My name is Jirayut Srisawangwong</h4>
        </v-col>
        <v-col class="text-left" justify="start" cols="3">
          <h1>❞</h1>
        </v-col>
      </v-row>

        <v-row class="justify-center">
          <v-col cols="12" md="3">
            <v-card 
              color="#385F73"
              dark
              hover
              href="/experience"
            >
              <v-img 
                class="white--text align-end"
                height="200px"
                src="@/assets/experience.png"
              >
              </v-img>
            </v-card>
          </v-col>
          
          <v-col cols="12" md="3">
            <v-card 
              color="#385F73"
              dark
              hover
              href="#skill"
            >
              <v-img 
                class="white--text align-end"
                height="200px"
                src="@/assets/skill.png"
              >
              </v-img>
            </v-card>
          </v-col>

          <v-col cols="12" md="3">
            <v-card 
              color="#385F73"
              dark
              hover
              href="#contact"
            >
              <v-img 
                class="white--text align-end"
                height="200px"
                src="@/assets/contact.png"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",
};
</script>