<template>
  <div class="board">
    <canvas ref="my-canvas"></canvas>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BoardGame",
  data() {
    return {
      // By creating the provider in the data property, it becomes reactive,
      // so child components will update when `context` changes.
      provider: {
        // This is the CanvasRenderingContext that children will draw to.
        context: null
      }
    };
  },

  // Allows any child component to `inject: ['provider']` and have access to it.
  provide() {
    return {
      provider: this.provider
    };
  },

  mounted() {
    // We can't access the rendering context until the canvas is mounted to the DOM.
    // Once we have it, provide it to all child components.
    this.provider.context = this.$refs["my-canvas"].getContext("2d");

    // Resize the canvas to fit its parent's width.
    // Normally you'd use a more flexible resize system.
    this.$refs["my-canvas"].width = this.$refs[
      "my-canvas"
    ].parentElement.clientWidth;
    this.$refs["my-canvas"].height = this.$refs[
      "my-canvas"
    ].parentElement.clientHeight;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>

      // var ctx = document.querySelector('#myCanvas').getContext('2d');
      // ctx.beginPath();
      // ctx.moveTo(10, 10);
      // ctx.lineTo(50, 50);
      // ctx.lineWidth = 15;
      // ctx.strokeStyle = '#454545';
      // ctx.lineCap = 'round';
      // ctx.lineJoin = 'round';
      // ctx.stroke();