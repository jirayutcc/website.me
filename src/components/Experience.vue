<template>
    <v-container>
        <div id="experience">
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
                        <v-avatar class="d-none d-sm-flex" tile size="50%">
                            <v-img src="@/assets/nav/experience.png"></v-img>
                        </v-avatar>
                        <v-avatar class="d-flex d-sm-none" tile size="100%">
                            <v-img src="@/assets/nav/experience.png"></v-img>
                        </v-avatar>
                    </v-card-title>

                    <v-row class="justify-center">
                        <v-col cols="12" md="9">
                            <v-timeline dense>
                                <v-timeline-item large>
                                    <template v-slot:icon>
                                        <v-avatar>
                                            <img src="@/assets/AIS.jpg" />
                                        </v-avatar>
                                    </template>
                                    <v-card
                                        id="sub-card"
                                        class="mx-auto"
                                        elevation="2"
                                    >
                                        <v-card-title
                                            >AIS -
                                            <br class="break-570" />Advanced
                                            Info
                                            <br class="break-570" />Services
                                            Plc.
                                        </v-card-title>
                                        <v-card-subtitle
                                            >2024 - Persent</v-card-subtitle
                                        >
                                        <v-card-text
                                            >IT <br class="break-370" />
                                            Specialist
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                                <v-timeline-item large>
                                    <template v-slot:icon>
                                        <v-avatar>
                                            <img src="@/assets/itone.png" />
                                        </v-avatar>
                                    </template>
                                    <v-card
                                        id="sub-card"
                                        class="mx-auto"
                                        elevation="2"
                                    >
                                        <v-card-title>IT One </v-card-title>
                                        <v-card-subtitle
                                            >2022 - 2024</v-card-subtitle
                                        >
                                        <v-card-text
                                            >Backend <br class="break-370" />
                                            Developer
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                                <v-timeline-item large>
                                    <template v-slot:icon>
                                        <v-avatar>
                                            <img src="@/assets/Accenture.png" />
                                        </v-avatar>
                                    </template>
                                    <v-card
                                        id="sub-card"
                                        class="mx-auto"
                                        elevation="2"
                                    >
                                        <v-card-title>Accenture </v-card-title>
                                        <v-card-subtitle
                                            >2021 - 2022</v-card-subtitle
                                        >
                                        <v-card-text
                                            >Backend <br class="break-370" />
                                            Developer
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                                <v-timeline-item large>
                                    <template v-slot:icon>
                                        <v-avatar>
                                            <img src="@/assets/CUBE.jpg" />
                                        </v-avatar>
                                    </template>
                                    <v-card
                                        id="sub-card"
                                        class="mx-auto"
                                        elevation="2"
                                    >
                                        <v-card-title
                                            >Cube
                                            <br class="break-400" />SoftTech
                                            <br class="break-500" />Co, Ltd.
                                        </v-card-title>
                                        <v-card-subtitle
                                            >2018 - 2021</v-card-subtitle
                                        >
                                        <v-card-text
                                            >Java <br class="break-370" />
                                            Developer
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
    name: "Experience",
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

@media screen and (min-width: 570px) {
    .break-570 {
        display: none;
    }
}

@media screen and (min-width: 500px) {
    .break-500 {
        display: none;
    }
}

@media screen and (min-width: 400px) {
    .break-400 {
        display: none;
    }
}

@media screen and (min-width: 370px) {
    .break-370 {
        display: none;
    }
}

@media screen and (max-width: 350px) {
    .v-card__title {
        font-size: 1rem;
    }
    .v-card__subtitle {
        font-size: 0.75rem;
    }
    .v-card__text {
        font-size: 0.75rem;
    }
    #title {
        font-size: 20px;
    }
}
</style>
