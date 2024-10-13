export const formatDate = (stringDate) => {
  const date = new Date(stringDate);
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
};

export const isDatePassed = (date) => {
  const today = new Date();
  const targetDate = new Date(date);
  return targetDate > today;
};

export const compareDatesAsc = (a, b) => {
  const firstDate = new Date(a.date);
  const secondDate = new Date(b.date);

  return firstDate - secondDate;
};

export const compareDatesDesc = (a, b) => {
  const firstDate = new Date(a.date);
  const secondDate = new Date(b.date);

  return secondDate - firstDate;
};

export const filterByCurrentMonth = (arr) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Filter the array based on the date property
  const filteredArray = arr.filter((obj) => {
    const objDate = new Date(obj.date);

    // Check if the object's date is in the same year and month as the current date
    return (
      objDate.getFullYear() === currentYear &&
      objDate.getMonth() === currentMonth
    );
  });

  return filteredArray;
};

export const isInCurrentMonth = (date, offset) => {
  // Create a new Date object for today's date
  let today = new Date();
  // Add the offset of months to today's date
  today.setMonth(today.getMonth() + offset);
  // Create a new Date object for the given date
  let givenDate = new Date(date);
  // Compare the year, month and day of the two dates
  return (
    today.getFullYear() === givenDate.getFullYear() &&
    today.getMonth() === givenDate.getMonth()
  );
};

export const getMonthFromIndex = (index) => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  let targetMonth = (month + Number(index % 12)) % 12;
  let targetYear = year + Math.ceil(index / 12);

  if (targetMonth < 0) {
    targetMonth += 12;
    targetYear--;
  }

  switch (targetMonth) {
    case 0:
      return `Dec ${targetYear - 1}`;
    case 1:
      return `Jan ${targetYear}`;
    case 2:
      return `Feb ${targetYear}`;
    case 3:
      return `Mar ${targetYear}`;
    case 4:
      return `Apr ${targetYear}`;
    case 5:
      return `May ${targetYear}`;
    case 6:
      return `Jun ${targetYear}`;
    case 7:
      return `Jul ${targetYear}`;
    case 8:
      return `Aug ${targetYear}`;
    case 9:
      return `Sep ${targetYear}`;
    case 10:
      return `Oct ${targetYear}`;
    case 11:
      return `Nov ${targetYear}`;
    case 12:
      return `Dec ${targetYear - 1}`;
    default:
      return "";
  }
};

export const getMonthsSinceEarliestDate = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }

  let earliestDate = new Date(items[0].date);

  items.forEach((obj) => {
    const currentDate = new Date(obj.date);

    if (currentDate < earliestDate) {
      earliestDate = currentDate;
    }
  });

  const currentDate = new Date();
  const monthsDifference =
    (currentDate.getFullYear() - earliestDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    earliestDate.getMonth();

  return monthsDifference !== 0 ? monthsDifference : 1;
};
