<template>
  <v-container>
    <div id="certificate">
      <v-lazy :options="{
        threshold: 0.8,
      }" min-height="200" transition="scale-transition" origin="center center">
        <v-card id="card" class="mx-auto" height="550%" width="1000" elevation="12">
          <v-card-title id="title">
            <v-avatar class="d-none d-sm-flex" tile size="55%">
              <v-img src="@/assets/nav/certificate.png"></v-img>
            </v-avatar>
            <v-avatar class="d-flex d-sm-none" tile size="100%">
              <v-img src="@/assets/nav/certificate.png"></v-img>
            </v-avatar>
          </v-card-title>

          <v-tabs vertical class="d-none d-md-flex" color="indigo">
            <v-tab v-for="certificate in certificates" :key="certificate.tab">
              {{ certificate.tab }}
            </v-tab>

            <v-tab-item v-for="certificate in certificates" :key="certificate.tab">
              <v-card flat id="item" align="center">
                <v-avatar tile size="95%">
                  <img :src="certificate.images" />
                </v-avatar>
              </v-card>
              <v-row id="link" align="center" justify="center">
                <v-btn :href="certificate.link" icon target="_blank" rel="noopener noreferrer">
                  <v-icon align="center" color="indigo">fas fa-link</v-icon>
                </v-btn>
              </v-row>
            </v-tab-item>
          </v-tabs>

          <div class="d-flex d-md-none">
            <v-row>
              <v-col cols="12" v-for="certificate in certificates" :key="certificate.tab">
                <v-card id="item" align="center">
                  <h3 class="text-center">{{ certificate.tab }}</h3>
                  <v-avatar tile size="92%">
                    <img :src="certificate.images" />
                  </v-avatar>
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
  name: "Certificate",
  data: () => ({
    certificates: [
      {
        tab: "Java (Basic)",
        images: require("@/assets/certificate/hackerrank/javabasic.png"),
        link: "https://www.hackerrank.com/certificates/92256285c086",
      },
      {
        tab: "SQL (Basic)",
        images: require("@/assets/certificate/hackerrank/sqlbasic.png"),
        link: "https://www.hackerrank.com/certificates/71891e3d2aac",
      },
      {
        tab: "SQL (Intermediate)",
        images: require("@/assets/certificate/hackerrank/sqlintermediate.png"),
        link: "https://www.hackerrank.com/certificates/709ffc280bf3",
      },
      {
        tab: "SQL For Everyone",
        images: require("@/assets/certificate/sqlforeveryone.png"),
      },
      {
        tab: "Angular (Basic)",
        images: require("@/assets/certificate/hackerrank/angularbasic.png"),
        link: "https://www.hackerrank.com/certificates/5a079f80d98e",
      },
      {
        tab: "Rest API (Intermediate)",
        images: require("@/assets/certificate/hackerrank/restapiintermediate.png"),
        link: "https://www.hackerrank.com/certificates/68618bfbc1c7",
      },
      {
        tab: "Problem Solving (Basic)",
        images: require("@/assets/certificate/hackerrank/problemsolvingBasic.png"),
        link: "https://www.hackerrank.com/certificates/6738f052739c",
      },
      {
        tab: "Problem Solving (Intermediate)",
        images: require("@/assets/certificate/hackerrank/problemsolvingintermediate.png"),
        link: "https://www.hackerrank.com/certificates/d0ef90d11a5a",
      },
      {
        tab: "JavaScript (Basic)",
        images: require("@/assets/certificate/hackerrank/javaScriptbasic.png"),
        link: "https://www.hackerrank.com/certificates/fa49cc11a57f",
      },
      {
        tab: "CSS",
        images: require("@/assets/certificate/hackerrank/css.png"),
        link: "https://www.hackerrank.com/certificates/c6d2b56c8913",
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

#item {
  border-radius: 25px;
}

#link {
  padding: 11px;
}

#title {
  font-size: 30px;
  font-weight: 700;
}

#levels {
  color: #ffffff;
}
</style>
