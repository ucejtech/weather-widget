import { mount } from "@vue/test-utils";
import WeatherArt from "@/components/weather/weather-art.vue";
import WindyRain from "@/assets/icons/wind-rain.svg";
import DayWeather from "@/components/weather/day-weather.vue";
import { useWeatherApi } from '../../src/api/weather';

import Vue from 'vue'
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi)


describe("WeatherArt", () => {
  it("renders the correct weather icon", () => {
    const weatherArtProps = {
      isAnimated: false,
      dimension: "50px",
      weather: "windy-rain"
    };
    const wrapper = mount(WeatherArt, {
      propsData: weatherArtProps
    });

    expect(wrapper.findComponent(WindyRain).exists()).toBe(true)
  });

  it('does not animate when `isAnimated: false` is passed as props', () => {
    const weatherArtProps = {
      isAnimated: false,
      dimension: "50px",
      weather: "windy-rain"
    };
    const wrapper = mount(WeatherArt, {
      propsData: weatherArtProps
    });

    expect(wrapper.find('.animated').exists()).toBe(false)
  })


  it('animates when `isAnimated: true` is passed as props', () => {
    const weatherArtProps = {
      isAnimated: true,
      dimension: "50px",
      weather: "windy-rain"
    };
    const wrapper = mount(WeatherArt, {
      propsData: weatherArtProps
    });

    expect(wrapper.find('.animated').exists()).toBe(true)
  })

  it('should render the correct dimension passed as props', () => {
    const weatherArtProps = {
      isAnimated: false,
      dimension: "50px",
      weather: "windy-rain"
    };
    const wrapper = mount(WeatherArt, {
      propsData: weatherArtProps
    });

    expect(wrapper.find(`[width="${weatherArtProps.dimension}"]`).exists()).toBe(true)
  })
});


describe("DayWeather", () => {
  it("renders the correct day to the component", () => {
    const dayWeatherProps = {
      weather: 'windy-rain',
      day: 'Sunday',
      minTemp: 3,
      maxTemp: 16
    }

    const wrapper = mount(DayWeather, {
      propsData: dayWeatherProps
    })

    expect(wrapper.text()).toMatch(dayWeatherProps.day);
    expect(wrapper.text()).toMatch(`${dayWeatherProps.minTemp}`);
  })

  it("renders the correct min and max temperature to the component", () => {
    const dayWeatherProps = {
      weather: 'windy-rain',
      day: 'Sunday',
      minTemp: 3,
      maxTemp: 16
    }

    const wrapper = mount(DayWeather, {
      propsData: dayWeatherProps
    })

    expect(wrapper.text()).toMatch(`${dayWeatherProps.minTemp}`);
    expect(wrapper.text()).toMatch(`${dayWeatherProps.maxTemp}`);
  })
})
