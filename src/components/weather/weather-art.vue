<template>
  <component
    :is="weather"
    :class="[{ animated: isAnimated }, 'weather-art']"
    :width="dimension"
    :height="dimension"
  />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Day from "@/assets/icons/sunny.svg";
import Night from "@/assets/icons/moon.svg";
import Rainy from "@/assets/icons/rainy.svg";
import RainyNight from "@/assets/icons/rainy-night.svg";
import RainyDay from "@/assets/icons/rainy-day.svg";
import Cloudy from "@/assets/icons/cloudy.svg";
import CloudyDay from "@/assets/icons/cloudy-day.svg";
import CloudyNight from "@/assets/icons/cloudy-night.svg";
import Fog from "@/assets/icons/fog.svg";
import Snowy from "@/assets/icons/snowy.svg";
import FreezingRain from "@/assets/icons/snow-rain-cloud.svg";
import Thunderstorm from "@/assets/icons/thunderstorm.svg";
import Windy from "@/assets/icons/windy.svg";
import WindyRainClouds from "@/assets/icons/wind-rain-cloud.svg";
import WindyRain from "@/assets/icons/wind-rain.svg";

export default defineComponent({
  props: {
    weather: {
      type: String,
      required: true,
      default: ""
    },
    isAnimated: {
      type: Boolean,
      default: true
    },
    dimension: {
      type: String,
      default: "50px"
    }
  },
  components: {
    Rainy,
    Day,
    Night,
    RainyNight,
    Cloudy,
    CloudyDay,
    CloudyNight,
    FreezingRain,
    Snowy,
    RainyDay,
    Thunderstorm,
    Fog,
    Windy,
    WindyRainClouds,
    WindyRain
  }
});
</script>

<style scoped>
.weather-art {
  transition: all 0.5s ease;
}
path {
  fill: #fff;
}
</style>
