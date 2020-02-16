function formTableDate(date) {
  const number = date.getDate();
  const  weekday = date.getDay();
  let weekdayRu = '';

  switch (weekday) {
    case 0:
      weekdayRu = 'вс';
      break;
    case 1:
      weekdayRu = 'пн';
      break;
    case 2:
      weekdayRu = 'вт';
      break;
    case 3:
      weekdayRu = 'ср';
      break;
    case 4:
      weekdayRu = 'чт';
      break;
    case 5:
      weekdayRu = 'пт';
      break;
    case 6:
      weekdayRu = 'сб';
      break;
  }

  return `${number}, ${weekdayRu}`;
}

export default formTableDate; 