<template>
  <v-container>
    <div id="skills">
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
            SKILLS
          </v-card-title>
          <v-tabs
            vertical
            class="d-none d-md-flex"
            color="deep-orange lighten-2"
          >
            <v-tab>
              Programming Language
            </v-tab>
            <v-tab>
              Framework & Libraries
            </v-tab>
            <v-tab>
              Tools
            </v-tab>

            <v-tab-item>
              <v-card flat id="item">
                <h5 v-for="lang in languages" :key="lang.name">
                  {{ lang.name }}
                  <v-progress-linear
                    :value="lang.exp"
                    height="15"
                    rounded
                    color="deep-orange lighten-2"
                    ><h5 id="levels">{{ lang.levels }}</h5>
                  </v-progress-linear>
                </h5>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat id="item" align="center">
                <v-avatar tile size="92%">
                  <img src="@/assets/framework.png" />
                </v-avatar>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat id="item" align="center">
                <v-avatar tile size="92%">
                  <img src="@/assets/tools.png" />
                </v-avatar>
              </v-card>
            </v-tab-item>
          </v-tabs>
          <div class="d-flex d-md-none">
            <v-row>
              <v-col cols="12">
                <v-card flat id="item">
                  <h3 class="text-center">Programming Language</h3>
                  <h5 v-for="lang in languages" :key="lang.name">
                    {{ lang.name }}
                    <v-progress-linear
                      :value="lang.exp"
                      height="15"
                      rounded
                      color="deep-orange lighten-2"
                      ><h5 id="levels">{{ lang.levels }}</h5>
                    </v-progress-linear>
                  </h5>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card flat id="item" align="center">
                  <h3 class="text-center">Framework & Libraries</h3>
                  <v-avatar tile size="92%">
                    <img src="@/assets/framework.png" />
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card flat id="item" align="center">
                  <h3 class="text-center">Tools</h3>
                  <v-avatar tile size="92%">
                    <img src="@/assets/tools.png" />
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
  name: "Skills",
  data: () => ({
    languages: [
      { name: "JAVA", exp: 80, levels: "Advanced" },
      { name: "GROOVY", exp: 80, levels: "Advanced" },
      { name: "PHP", exp: 40, levels: "Basic" },
      { name: "SQL", exp: 80, levels: "Advanced" },
      { name: "HTML", exp: 70, levels: "Advanced" },
      { name: "CSS", exp: 65, levels: "Intermediate" },
      { name: "JAVASCRIPT", exp: 65, levels: "Intermediate" },
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
  padding: ($gutters - 10);
}

#title {
  font-size: 30px;
  font-weight: 700;
}

#levels {
  color: #ffffff;
}
</style>
