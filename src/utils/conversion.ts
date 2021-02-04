/**
 * Convert degree to compass direction.
 * example: 340 to NNW
 * @param  {string|number} num
 * @returns string
 */
export const degToCompass = (num: string | number): string => {
  const arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW"
  ];
  return arr[Math.round(Number(num) / 22.5) % 16];
};

/**
 * Convert m/s to km/h.
 * @param  {string|number} num
 * @returns string
 */
export const metreToKmPerSecond = (num: string | number): string | number => {
  return Math.round(Number(num) * 3.6);
};
