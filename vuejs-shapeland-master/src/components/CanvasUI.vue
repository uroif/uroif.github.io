<template>
  <div class="canvas-ui__root">
    <canvas ref="myCanvas" id="myCanvas" height="800" width="500"></canvas>
  </div>
</template>
<script>
import throttle from 'lodash.throttle';
import Shape from './shape';

export default {
  props: {
    shapes: {
      type: Array,
      required: true,
    },
    selectedShape: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      mutableShapes: this.shapes,
      shapeFrame: 200,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.drawShapes();
    });
  },
  watch: {
    shapes: {
      handler() {
        this.mutableShapes = this.shapes;
        this.drawShapes();
      },
      deep: true,
    },
    selectedShape(order) {
      this.mutableShapes.forEach((s, index) => {
        if (order !== s.order) {
          this.mutableShapes[index].isHoverd = false;
          this.mutableShapes[index].hover(order);
        } else {
          this.mutableShapes[index].hover(order);
          this.mutableShapes[index].isHoverd = true;
        }
      });
    },
  },
  methods: {
    drawShapes() {
      const canvas = this.$refs.myCanvas;
      const context = canvas.getContext('2d');
      canvas.height = this.shapeFrame * (this.mutableShapes.length + 1);
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.mutableShapes = this.mutableShapes.map(s => new Shape(context, canvas, s));
      this.mutableShapes.forEach(s => s.draw());
      canvas.onmousemove = throttle((e) => {
        const itemIndex = Math.ceil(e.layerY / this.shapeFrame);
        this.$emit('hover', itemIndex);
      }, 200, { trailing: false });
      canvas.onmouseleave = () => {
        this.$emit('hover', -1);
      };
    },
  },
};
</script>
<style scoped>
  .canvas-ui__root {
    height: 100%;
    overflow: auto;
    width: 100%;
  }
</style>
