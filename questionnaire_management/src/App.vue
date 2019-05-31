<template>
  <div id="app">
  	<top></top>
  	<router-view></router-view>
  </div>
</template>

<script>
import top from './components/Top'

export default {
  name: 'App',
  components: {
  	top
  }
}
</script>

<style>
@import "style/reset";

#app {
  min-width: 110rem;
  height: 100%;
  font-family: arial;
  background-color: #efefef;
  overflow: auto;
}
</style>
