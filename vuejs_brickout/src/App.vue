<template>
  <div id="app">
    <!-- <BoardGame msg="Brick-Out"/> -->
  </div>
</template>

<script>
import BoardGame from './components/BoardGame.vue'

export default {
  name: 'app',
  components: {
    BoardGame
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

canvas {
  border: 1px solid #aaaaaa;
  background-color: #dddddd;
}
</style>
