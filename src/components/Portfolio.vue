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
            PORTFOLIO
          </v-card-title>
          <br />
          <v-row class="justify-center">
            <v-icon large color="deep-orange lighten-2">fas fa-tools</v-icon>
          </v-row>
        </v-card>
      </v-lazy>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",
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
</style>
