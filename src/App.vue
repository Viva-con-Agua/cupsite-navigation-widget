<template>
  <div id="app">
    <NavigationBar></NavigationBar>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  font-family: Museo, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
