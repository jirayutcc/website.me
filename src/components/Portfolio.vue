<template>
  <v-container>
    <div id="portfolio">
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
            <v-avatar class="d-none d-sm-flex" tile size="45%">
              <v-img src="@/assets/nav/portfolio.png"></v-img>
            </v-avatar>
            <v-avatar class="d-flex d-sm-none" tile size="100%">
              <v-img src="@/assets/nav/portfolio.png"></v-img>
            </v-avatar>
          </v-card-title>

          <v-tabs v-model="tab" color="indigo" class="d-none d-md-flex">
            <v-tab
              v-for="tabPortfolio in tabPortfolios"
              :key="tabPortfolio.tab"
            >
              {{ tabPortfolio.tab }}
            </v-tab>
          </v-tabs>
          <div class="d-none d-md-flex">
            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="tabPortfolio in tabPortfolios"
                :key="tabPortfolio.tab"
              >
                <v-card flat>
                  <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
                  >
                    <v-carousel-item
                      v-for="(image, i) in tabPortfolio.images"
                      :key="i"
                      :src="image.src"
                    ></v-carousel-item>
                  </v-carousel>
                  <v-row id="link" align="center" justify="center">
                    <a
                      v-for="(image, i) in tabPortfolio.githubLink"
                      :key="i"
                      :href="image.link"
                      ><v-icon align="center" color="indigo"
                        >fab fa-github</v-icon
                      ></a
                    >
                    <div class="mx-2"></div>
                    <a
                      v-for="(image, i) in tabPortfolio.live"
                      :key="i"
                      :href="image.live"
                      ><v-icon align="center" color="indigo"
                        >fas fa-globe-americas</v-icon
                      ></a
                    >
                  </v-row>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </div>
          <div class="d-flex d-md-none">
            <v-row>
              <v-col
                cols="12"
                v-for="tabPortfolio in tabPortfolios"
                :key="tabPortfolio.tab"
              >
                <v-card id="item" align="center">
                  <h3 class="text-center">{{ tabPortfolio.tab }}</h3>
                  <v-avatar tile size="92%">
                    <v-row>
                      <v-col cols="12">
                        <img
                          v-for="(image, i) in tabPortfolio.images"
                          :key="i"
                          :src="image.src"
                        />
                      </v-col>
                    </v-row>
                  </v-avatar>
                  <v-row id="link" align="center" justify="center">
                    <a
                      v-for="(image, i) in tabPortfolio.githubLink"
                      :key="i"
                      :href="image.link"
                      ><v-icon align="center" color="indigo"
                        >fab fa-github</v-icon
                      ></a
                    >
                    <div class="mx-2"></div>
                    <a
                      v-for="(image, i) in tabPortfolio.live"
                      :key="i"
                      :href="image.live"
                      ><v-icon align="center" color="indigo"
                        >fas fa-globe-americas</v-icon
                      ></a
                    >
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-lazy>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",
  data: () => ({
    tab: null,
    tabPortfolios: [
      {
        tab: "👽 Covid19 Tracker Web",
        githubLink: [
          {
            link: "https://github.com/jirayutcc/covid19-tracker-web",
          },
        ],
        live: [
          {
            live: "https://convid19trackerweb.herokuapp.com/",
          },
        ],
        images: [
          {
            src: require("@/assets/webtrackerimg.jpg"),
          },
        ],
      },
      {
        tab: "🔑 Boot Admin",
        githubLink: [
          {
            link: "https://github.com/jirayutcc/boot-admin",
          },
        ],
        images: [
          {
            src: require("@/assets/bootAdmin/Boot1.jpg"),
          },
          {
            src: require("@/assets/bootAdmin/Boot2.jpg"),
          },
          {
            src: require("@/assets/bootAdmin/Boot3.jpg"),
          },
          {
            src: require("@/assets/bootAdmin/Boot4.jpg"),
          },
          {
            src: require("@/assets/bootAdmin/Boot5.jpg"),
          },
        ],
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
$white: #ffffff;
$gutters: 24px;

#card {
  background: $white;
  border-radius: 25px;
  padding: ($gutters * 2);
}

#title {
  font-size: 30px;
  font-weight: 700;
}

.v-tabs-items {
  margin-top: 5px;
}

#link {
  padding: 0px;
  padding-top: 5px;
}

#item {
  border-radius: 25px;
  padding: ($gutters * 2);
}
</style>
