<template>
  <div id="app">
    <weather-widget />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import WeatherWidget from "./components/weather/weather-widget.vue";

export default defineComponent({
  components: {
    WeatherWidget
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
