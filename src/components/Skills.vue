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
            <v-avatar class="d-none d-sm-flex" tile size="30%">
              <v-img src="@/assets/nav/skills.png"></v-img>
            </v-avatar>
            <v-avatar class="d-flex d-sm-none" tile size="100%">
              <v-img src="@/assets/nav/skills.png"></v-img>
            </v-avatar>
          </v-card-title>
          <v-tabs vertical class="d-none d-md-flex" color="indigo">
            <v-tab v-for="tabSkill in tabSkills" :key="tabSkill.tab">
              {{ tabSkill.tab }}
            </v-tab>

            <v-tab-item>
              <v-card flat id="item">
                <h5 v-for="lang in languages" :key="lang.name">
                  {{ lang.name }}
                  <v-progress-linear
                    :value="lang.exp"
                    height="15"
                    rounded
                    color="indigo"
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
                <v-card id="item">
                  <h3 class="text-center">😎 Programming Language</h3>
                  <h5 v-for="lang in languages" :key="lang.name">
                    {{ lang.name }}
                    <v-progress-linear
                      :value="lang.exp"
                      height="15"
                      rounded
                      color="indigo"
                      ><h5 id="levels">{{ lang.levels }}</h5>
                    </v-progress-linear>
                  </h5>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card id="item" align="center">
                  <h3 class="text-center">🤖 Framework & Libraries</h3>
                  <v-avatar tile size="92%">
                    <img src="@/assets/framework.png" />
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-card id="item" align="center">
                  <h3 class="text-center">🧰 Tools</h3>
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
    tabSkills: [
      { tab: "😎 Programming Language" },
      { tab: "🤖 Framework & Libraries" },
      { tab: "🧰 Tools" },
    ],
    languages: [
      { name: "Java", exp: 70, levels: "Advanced" },
      { name: "Kotlin", exp: 70, levels: "Advanced" },
      { name: "Groovy", exp: 70, levels: "Advanced" },
      { name: "SQL", exp: 60, levels: "Intermediate" },
      { name: "HTML", exp: 60, levels: "Intermediate" },
      { name: "CSS", exp: 50, levels: "Intermediate" },
      { name: "JavaScript", exp: 60, levels: "Intermediate" },
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
  padding: ($gutters * 2);
}

#title {
  font-size: 30px;
  font-weight: 700;
}

#levels {
  color: #ffffff;
}
</style>
