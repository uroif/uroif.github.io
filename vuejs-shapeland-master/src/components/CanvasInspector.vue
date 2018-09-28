<template>
  <div
  @mouseover="$emit('hover', shape.order)"
  :class="[
  'uk-card',
  'canvas-inspector__wrapper',
  selectedShape === shape.order ? 'uk-card-default': ''
  ]">
    <!-- VIEWING MODE AREA -->
    <div
    v-if="!editMode"
    class="uk-flex uk-flex-column uk-flex-middle">
      <div class="uk-flex uk-flex-row uk-flex-middle uk-width">
        <div class="shape-selector uk-width uk-padding-small">
          <select
          class="uk-select"
          v-model="mutableShape.type"
          name="shapeSelector">
            <option value="circle">
              circle
            </option>
            <option value="rectangle">
              Rectangle
            </option>
            <option value="triangle">
              Triangle
            </option>
          </select>
        </div>
        <div class="shape-size-slider uk-width uk-padding-small">
          <div v-if="mutableShape.type == 'triangle'">
            <input
            class="uk-range"
            type="range"
            min="0"
            max="360"
            v-model="mutableShape.props.rotation" />
          </div>
          <div v-else-if="mutableShape.type == 'rectangle'">
            <input
            class="uk-range"
            type="range"
            min="1"
            max="3"
            step="0.1"
            v-model="mutableShape.props.scale.x" />
          </div>
          <div v-else>
            <input
            class="uk-range"
            type="range"
            step="0.01"
            min="40"
            max="80"
            v-model="mutableShape.props.radius" />
          </div>
        </div>
        <div class="shape-color-selector uk-width uk-padding-small">
          <select
          class="uk-select"
          v-model="mutableShape.props.color"
          name="shapeColorSelector">
            <option value="green">
                green
            </option>
            <option value="red">
                red
            </option>
            <option value="blue">
                blue
            </option>
          </select>
        </div>
        <div class="inspector-dragger uk-padding">
          <slot name="handle">
          </slot>
        </div>
      </div>
      <div class="uk-flex uk-flex-row uk-width uk-padding-small">
        <div class="shape-remover">
          <button
          class="shape_remover_button"
          @click="$emit('shapeDeleted', mutableShape);">
            <i class="far fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- VIEWING MODE AREA END -->
    <!-- EDITING MODE AREA -->
    <div
    v-else
    class="uk-flex uk-flex-column uk-flex-middle">
      <div>
        <!-- RECTANGLE SHAPE OPTIONS -->
        <div
        v-if="mutableShape.type === 'rectangle'"
        class="uk-padding">
          <input
          class="uk-input"
          type="text"
          v-model="mutableShape.props.text">
        </div>
        <!-- CIRCLE SHAPE OPTIONS -->
        <div
        v-if="mutableShape.type === 'circle'"
        class="uk-padding">
          <input
          class="uk-range"
          type="range"
          min="1"
          max="2"
          step="0.1"
          v-model="mutableShape.props.scale.y" />
        </div>
        <div
        v-if="mutableShape.type === 'circle'"
        class="uk-padding">
          <input
          class="uk-range"
          type="range"
          min="1"
          max="2"
          step="0.1"
          v-model="mutableShape.props.scale.x" />
        </div>
        <!-- TRIANGLE SHAPE OPTIONS -->
        <div
        v-if="mutableShape.type === 'triangle'"
        class="uk-padding">
          <input
          class="uk-range"
          type="range"
          min="0"
          max="360"
          v-model="mutableShape.props.rotation">
        </div>
      </div>
    </div>
    <!-- EDITING MODE AREA END -->
  </div>
</template>
<script>
export default {
  props: {
    shape: {
      type: Object,
      required: true,
    },
    editMode: {
      type: Boolean,
      required: true,
    },
    selectedShape: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      mutableShape: this.shape,
    };
  },
  watch: {
    mutableShape: {
      handler() {
        this.$emit('shapeEdited', this.mutableShape);
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
  .canvas-inspector__wrapper {
    flex: 1;
    min-height: 200px;
    min-width: 100%;
    border: 1px solid rgba(0,0,0,0.03);
  }
  .shape-selector select {
    width: 100%;
  }
  .shape-size-slider input {
    width: 100%;
  }
  .shape-color-selector select {
    width: 100%;
  }
  .inspector-dragger i {
    font-size: 2rem;
  }
  .shape-remover button {
    background: none;
    border: none;
    float: left;
    font-size: 1.5rem;
  }
</style>
