function transformMonth(monthNumber) {
  let month;

  switch (monthNumber) {
    case 0:
      month = 'январь';
      break;
    case 1:
      month = 'февраль'
      break;
    case 2:
      month = 'март'
      break;
    case 3:
      month = 'апрель'
      break;
    case 4:
      month = 'май'
      break;
    case 5:
      month = 'июнь'
      break;
    case 6:
      month = 'июль'
      break;
    case 7:
      month = 'август'
      break;
    case 8:
      month = 'сентябрь'
      break;
    case 9:
      month = 'октябрь'
      break;
    case 10:
      month = 'ноябрь'
      break;
    case 11:
      month = 'декабрь'
      break;
  }
  return month;
}

export default transformMonth;