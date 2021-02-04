<template>
  <div class="day text-center">
    <div class="day-name text-white text-15">{{ day }}</div>
    <weather-art class="day-weather-art mt-1" :weather="weather" />
    <div class="temp-max text-error mt-sm-2">{{ maxTemp }}ºC</div>
    <div class="temp-min text-info mt-sm-2">{{ minTemp }}ºC</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import WeatherArt from "./weather-art.vue";

export default defineComponent({
  props: {
    weather: {
      type: String,
      required: true
    },
    day: {
      type: String,
      required: true
    },
    minTemp: {
      type: Number,
      required: true
    },
    maxTemp: {
      type: Number,
      required: true
    }
  },
  components: {
    WeatherArt
  }
});
</script>

<style lang="scss" scoped>
.day-name {
  @include breakpoint(smAndDown) {
    width: 85px;
  }
}
.day {
  @include breakpoint(smAndDown) {
    width: 100%;
    display: grid;
    text-align: left !important;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
