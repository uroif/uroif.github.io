<template>
  <div id="app">
    <div class="app-core-layout uk-flex uk-flex-row">
      <div class="canvas-ui__wrapper uk-card uk-card-default">
        <canvas-ui
        @hover="handleHover"
        :selectedShape="hoveredOrder"
        :shapes="shapes">
        </canvas-ui>
      </div>
      <div class="canvas-inspectors__wrapper uk-card uk-card-default">
        <div
        class="canvas-inspectors__list"
        @mouseleave="handleHover(-1)">
          <draggable
          @end="shapesReOrdered"
          :list="shapes"
          style="width:100%;"
          :options="{handle:'.draggable'}"
          class="dragArea">
            <canvas-inspector
            v-for="shape in shapes"
            :shape="shape"
            :editMode="editMode"
            :selectedShape="hoveredOrder"
            @hover="handleHover"
            @shapeEdited="handleShapeEdit"
            @shapeDeleted="deleteAndReorder(shape.order)"
            :key="shape.id">
            <div slot="handle" class="draggable">
              <i class="fas fa-bars"></i>
            </div>
            </canvas-inspector>
          </draggable>
        </div>
        <div class="canvas-inspectors__buttons">
          <div class="edit-button__wrapper">
            <button @click="editMode = !editMode" class="edit-button">
              <i class="fa-pencil-square"></i>
            </button>
          </div>
          <div class="append-button__wrapper">
            <button @click="addShape()" class="append-button">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
import CanvasUi from './components/CanvasUI';
import CanvasInspector from './components/CanvasInspector';

export default {
  name: 'App',
  components: {
    CanvasUi,
    CanvasInspector,
    draggable,
  },
  data() {
    return {
      hoveredOrder: -1,
      shapes: [
        {
          id: Math.floor(Math.random() * Math.floor(1000)),
          order: 1,
          type: 'rectangle',
          props: {
            height: 100,
            width: 100,
            scale: {
              y: 1,
              x: 1,
            },
            radius: 40,
            rotation: 0,
            text: '',
            color: 'red',
          },
        },
        {
          id: Math.floor(Math.random() * Math.floor(1000)),
          order: 2,
          type: 'circle',
          props: {
            height: 100,
            width: 100,
            scale: {
              y: 1,
              x: 1,
            },
            text: '',
            radius: 40,
            color: 'green',
          },
        },
        {
          id: Math.floor(Math.random() * Math.floor(1000)),
          order: 3,
          type: 'triangle',
          props: {
            height: 100,
            width: 100,
            scale: {
              y: 1,
              x: 1,
            },
            text: '',
            radius: 40,
            rotation: 0,
            color: 'blue',
          },
        },
      ],
      editMode: false,
    };
  },
  methods: {
    shapesReOrdered() {
      this.shapes.forEach((s, i) => {
        this.shapes[i].order = i + 1;
      });
    },
    handleHover(order) {
      this.hoveredOrder = order;
    },
    addShape() {
      this.shapes.push({
        id: Math.floor(Math.random() * Math.floor(20)),
        order: this.shapes.length + 1,
        type: 'rectangle',
        props: {
          height: 100,
          width: 100,
          scale: {
            y: 1,
            x: 1,
          },
          radius: 40,
          rotation: 0,
          text: '',
          color: 'red',
        },
      });
    },
    deleteAndReorder(order) {
      this.shapes.splice(order - 1, 1);
      this.shapesReOrdered();
    },
    handleShapeEdit(shape) {
      this.shapes[shape.order - 1] = shape;
    },
  },
};
</script>
<style>
  html, body {
    height: 100%;
    background-color: #f8f8f8;
  }
  * {
    box-sizing: border-box;
  }
  button:hover {
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .canvas-ui__wrapper {
    flex: 1;
    border-radius: 0px;
    height: 800px;
    margin: 10px;
    background-color: white;
  }
  .canvas-inspectors__wrapper {
    flex: 1;
    border-radius: 0px;
    position: relative;
    margin: 10px;
    background-color: white;
  }
  .canvas-inspectors__list {
   display: flex;
   flex-flow: column;
   align-items: center;
   max-height: 800px;
   overflow: auto;
   padding-bottom: 20px;
  }
  .canvas-inspectors__buttons {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-flow: row;
  }
  .canvas-inspectors__buttons i {
    font-size: 1.5rem;
    color: white;
  }
  .canvas-inspectors__buttons button {
    border: none;
    background: none;
    border-radius: 100%;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1);
  }
  .edit-button__wrapper {
    border-radius: 100%;
    background-color: rgb(143, 120, 199);
    margin-left: 10px;
  }
  .append-button__wrapper {
    border-radius: 100%;
    background-color: rgb(126, 181, 241);
    margin-left: 10px;
  }
  .append-button {
    flex: 1;
    height: 50px;
    width: 50px;
  }
  .edit-button {
    flex: 1;
    height: 50px;
    width: 50px;
  }
</style>
