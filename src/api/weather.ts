import { reactive } from "@vue/composition-api";
import axios from "axios";
import { WeatherState } from "@/interfaces/weather";

export const useWeatherApi = () => {
  const state = reactive<WeatherState>({
    data: null,
    loading: true,
    errored: false
  });
  const WEATHER_API_URL = process.env.VUE_APP_WEATHER_API_URL;

  axios
    .get(WEATHER_API_URL)
    .then(response => {
      state.data = response.data;
    })
    .catch(error => {
      state.errored = true;
    })
    .finally(() => (state.loading = false));
  return state;
};
