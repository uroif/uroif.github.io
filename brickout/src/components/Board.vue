<template>
  <div>
    <canvas id="myCanvas" width="400" height="360"></canvas>
    <slot></slot>
  </div>
</template>

<script>
var ctx = document.querySelector('#myCanvas').getContext('2d')
export default {
  data() {
    return {
    }
  },
  mounted() {},
  methods: {}
};
</script>