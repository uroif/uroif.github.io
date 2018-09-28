<template>
  <v-stage ref="stage" :config="configKonva">
    <v-layer ref="layer">
      <v-circle :config="configCircle"></v-circle>
      <v-rect :config="configRect"></v-rect>
    </v-layer>
  </v-stage>
</template>

<script>
export default {
  data() {
    return {
      configKonva: {
        container: '#app',
        width: 480,
        height: 360
      },
      configCircle: {
        x: 240,
        y: 300,
        radius: 20,
        fill: "red",
        stroke: "black",
        strokeWidth: 1
      },
      configRect: {
        x: 200,
        y: 350,
        width: 100,
        height: 10,
        fill: "blue",
        stroke: "black",
        strokeWidth: 1
      }
    };
  }
};
</script>

/* eslint-disable */