<template>
  <v-container>
    <div id="start">
      <v-lazy
        :options="{
          threshold: 0.9,
        }"
        min-height="200"
        transition="scale-transition"
        origin="center center"
      >
        <v-row id="start" class="justify-center">
          <router-link to="/home">
            <v-img
              class="d-none d-sm-flex"
              id="startButtom"
              src="@/assets/startButtom.png"
              contain
              max-height="290"
              max-width="500"
            ></v-img>
            <v-img
              class="d-flex d-sm-none"
              id="startButtom"
              src="@/assets/startButtom.png"
              contain
              max-height="200"
              max-width="300"
            ></v-img>
          </router-link>
        </v-row>
      </v-lazy>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Start",
};
</script>

<style lang="scss" scoped>
#start {
  margin-top: 170px;
}
#startButtom {
  transition: transform 0.2s;
}

#startButtom:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
}
</style>
