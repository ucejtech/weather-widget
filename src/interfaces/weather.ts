export interface Weather {
  id: string;
  main?: string;
  description?: string;
  icon?: string;
  condition?: string;
  nightCondition?: string;
}

interface WeatherTemp {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

interface WeatherForecast {
  clouds: number;
  dew_point: number;
  dt: number;
  uvi: number;
  visibility: number;
  humidity: number;
  weather: Weather[];
  wind_deg: number;
  wind_speed: number;
  sunrise?: number;
  sunset?: number;
  temp: number | WeatherTemp;
  feels_like: number;
}

export interface WeatherApiResponse {
  current: WeatherForecast;
  daily: WeatherForecast[];
  hourly: WeatherForecast[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
}

export interface WeatherState {
  data: null | WeatherApiResponse;
  loading: boolean;
  errored: boolean;
}
