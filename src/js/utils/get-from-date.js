function getFromDate() {
  let fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 7);
  return `${fromDate.getFullYear()}-${fromDate.getMonth()+1 < 10 ? `0${fromDate.getMonth()+1}` : fromDate.getMonth()+1}-${fromDate.getDate() < 10 ? `0${fromDate.getDate()}` : fromDate.getDate()}`
}

export default getFromDate

