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
	min-width: 1200px;
    width: 100%;
	height: 100vh;
	font-family: arial;
	background-color: #efefef;
	overflow: auto;
}
</style>
