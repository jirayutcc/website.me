<template>
  <v-container>
    <div id="education">
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
            EDUCATION
          </v-card-title>
          <v-row class="justify-center">
            <v-col cols="12" md="9">
              <v-timeline dense>
                <v-timeline-item large>
                  <template v-slot:icon>
                    <v-avatar>
                      <img src="@/assets/SUT.jpg" />
                    </v-avatar>
                  </template>
                  <v-card id="sub-card" class="mx-auto" elevation="2">
                    <v-card-title
                      >Suranaree <br class="break-460" />University
                      <br class="break-600" />of
                      <br class="break-400" />Technology
                      <v-btn
                        class="d-none d-sm-flex"
                        icon
                        href="http://www.sut.ac.th/"
                      >
                        <v-icon small color="deep-orange lighten-2"
                          >fas fa-link</v-icon
                        >
                      </v-btn>
                    </v-card-title>
                    <v-card-subtitle>2015-2019 </v-card-subtitle>
                    <v-card-text
                      >Computer <br class="break-400" />Engineering
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
                <v-timeline-item large>
                  <template v-slot:icon>
                    <v-avatar>
                      <img src="@/assets/KKSS.jpg" />
                    </v-avatar>
                  </template>
                  <v-card id="sub-card" class="mx-auto" elevation="2">
                    <v-card-title
                      >Kanchanapisek <br class="break-505" />Wittayalai
                      <br class="break-645" />Kalasin
                      <br class="break-400" />School
                      <v-btn
                        class="d-none d-sm-flex"
                        icon
                        href="http://www.kanchana.ac.th/"
                      >
                        <v-icon small color="deep-orange lighten-2"
                          >fas fa-link</v-icon
                        >
                      </v-btn>
                    </v-card-title>
                    <v-card-subtitle>2013-2015</v-card-subtitle>
                    <v-card-text
                      >Mathematics-Science <br class="break-460" />program
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </v-card>
      </v-lazy>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style lang="scss" scoped>
$white: #ffffff;
$red: #ffffff;
$gutters: 24px;

#card {
  background: $white;
  border-radius: 25px;
  padding: ($gutters * 2);
}

#sub-card {
  background: $red;
  border-radius: 13px;
}

#title {
  font-size: 30px;
  font-weight: 700;
}

@media screen and (min-width: 645px) {
  .break-645 {
    display: none;
  }
}

@media screen and (min-width: 600px) {
  .break-600 {
    display: none;
  }
}

@media screen and (min-width: 505px) {
  .break-505 {
    display: none;
  }
}

@media screen and (min-width: 460px) {
  .break-460 {
    display: none;
  }
}

@media screen and (min-width: 400px) {
  .break-400 {
    display: none;
  }
}

@media screen and (max-width: 350px) {
  .v-card__title {
    font-size: 0.8rem;
  }
  .v-card__subtitle {
    font-size: 0.65rem;
  }
  .v-card__text {
    font-size: 0.65rem;
  }
  #title {
    font-size: 20px;
  }
}
</style>
