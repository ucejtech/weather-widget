<template>
  <div class="weather-widget-card px-7 py-6">
    <div class="current-weather-box d-flex">
      <weather-art
        class="day-weather-art mt-1"
        dimension="90px"
        v-if="!weather.loading"
        :weather="
          convertInfoToWeatherRepresentation(weather.data.current.weather[0])
        "
        :isAnimated="false"
      />
      <div class="current-weather-info ml-6">
        <div class="text-22 text-sm-25 text-white">
          {{ weather.loading ? "..." : "Barcelona, Spain" }}
        </div>
        <div class="text-20 text-white">
          {{ weather.loading ? "..." : weather.data.current.temp }}º
        </div>
        <div class="current-weather-humidity mt-1 text-white text-15">
          Humidity:
          {{ weather.loading ? "..." : weather.data.current.humidity }}%
        </div>
        <div class="current-weather-uvi mt-1 text-white text-15">
          UVI:
          {{ weather.loading ? "..." : weather.data.current.uvi }}
        </div>
        <div class="current-weather-wind mt-1 text-white text-15">
          Wind:
          {{
            weather.loading
              ? "..."
              : `${convertDirection(
                  weather.data.current.wind_deg
                )} ${convertSpeed(weather.data.current.wind_speed)}kmh`
          }}
        </div>
      </div>
    </div>
    <div class="days-weather-box d-grid mt-5" v-if="!weather.loading">
      <day-weather
        :day="day"
        :weather="
          convertInfoToWeatherRepresentation(
            weather.data.daily[index].weather[0]
          )
        "
        :maxTemp="weather.data.daily[index].temp.max"
        :minTemp="weather.data.daily[index].temp.min"
        v-for="(day, index) in days"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import WeatherArt from "./weather-art.vue";
import DayWeather from "./day-weather.vue";

import { defineComponent } from "@vue/composition-api";
import { degToCompass, metreToKmPerSecond } from "@/utils/conversion";
import { daysInWeekFromGivenDay } from "@/utils/days";
import { useWeatherApi } from "@/api/weather";
import { convertWeatherInfoToCondition } from "../../utils/WeatherEnum";
import { Weather } from "@/interfaces/weather";

export default defineComponent({
  components: {
    WeatherArt,
    DayWeather
  },
  setup() {
    const days: string[] | never[] = daysInWeekFromGivenDay(
      new Date().getDay()
    );
    const weather = useWeatherApi();

    return { days, weather };
  },
  methods: {
    convertDirection(num: string | number) {
      return degToCompass(num);
    },
    convertSpeed(num: string | number) {
      return metreToKmPerSecond(num);
    },
    convertInfoToWeatherRepresentation(weatherItem: Weather) {
      return convertWeatherInfoToCondition(weatherItem);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("../../styles/components/weather-widget.scss");

.days-weather-box {
  @include breakpoint(smAndDown) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.day:not(:first-child) {
  @include breakpoint(smAndDown) {
    margin-top: 20px;
  }
}
</style>
