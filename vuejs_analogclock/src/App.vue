<template>
  <div id="app">
    <Clock/>
  </div>
</template>

<script>
import Clock from './components/Clock.vue'

export default {
  name: 'app',
  components: {
    Clock
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
</style>
