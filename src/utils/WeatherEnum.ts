import { Weather } from "../interfaces/weather";

const MainWeatherGroups: { [index: string]: Weather[] } = {
  THUNDERSTORM: [{ id: "default", condition: "thunderstorm" }],
  DRIZZLE: [
    { id: "default", condition: "rainy", nightCondition: "rainy-night" }
  ],
  RAIN: [
    { id: "default", condition: "rainy", nightCondition: "rainy-night" },
    { id: "520", condition: "windy-rain-clouds", nightCondition: "windy-rain" },
    { id: "502", condition: "windy-rain", nightCondition: "windy-rain" }
  ],
  SNOW: [
    {
      id: "default",
      condition: "freezing-rain"
    },
    { id: "600", condition: "snowy" },
    { id: "601", condition: "snowy" }
  ],
  CLEAR: [{ id: "default", condition: "day", nightCondition: "night" }],
  CLOUDS: [
    { id: "default", condition: "cloudy" },
    { id: "801", condition: "cloudy-day", nightCondition: "cloudy-night" }
  ],
  FOG: [{ id: "default", condition: "fog" }],
  DEFAULT: [{ id: "default", condition: "windy" }]
};

//  Covert weather info from OpenWeatherMap to Custom Icon Representation
export function convertWeatherInfoToCondition(
  openWeatherMapWeatherCondition: Weather
): string | undefined {
  const main = openWeatherMapWeatherCondition.main
    ? openWeatherMapWeatherCondition.main.toUpperCase()
    : "";
  if (Object.prototype.hasOwnProperty.call(MainWeatherGroups, main)) {
    const weather = MainWeatherGroups[main].find(
      (weatherGroup: Weather) =>
        weatherGroup.id === `${openWeatherMapWeatherCondition.id}`
    );
    if (!weather) {
      return MainWeatherGroups[main][0].condition;
    }
    // Check if icon from OpenWeather has an `n` representing night
    return openWeatherMapWeatherCondition.icon?.includes("n")
      ? weather.nightCondition || weather.condition
      : weather.condition;
  }
  return MainWeatherGroups.DEFAULT[0].condition;
}
