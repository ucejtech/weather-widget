export const daysInWeekFromGivenDay = (givenDay: number): string[] => {
  const list: string[] = [];
  const daysArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  function recursive(day: number) {
    if (list.length < 1) {
      list.push("Today");
      recursive(++day);
    } else if (list.length < 6) {
      if (day >= daysArr.length) {
        day = 0;
      }
      list.push(daysArr[day]);
      recursive(++day);
    }
  }
  recursive(givenDay);
  return list;
};
