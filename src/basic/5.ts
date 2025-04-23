enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): void => {
  if (day >= 5) {
    console.log(true);
  } else {
    console.log(false);
  }
};
