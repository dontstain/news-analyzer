import '../pages/analytics.css';

console.log(localStorage);
const query = JSON.parse(localStorage.query);
const resObj = JSON.parse(localStorage.resObj);
const articles = resObj.articles;

let daySeven = new Date();
const daySix = new Date(daySeven.setDate(daySeven.getDate() - 1));
const dayFive = new Date(daySeven.setDate(daySeven.getDate() - 1));
const dayFour = new Date(daySeven.setDate(daySeven.getDate() - 1));
const dayThree = new Date(daySeven.setDate(daySeven.getDate() - 1));
const dayTwo = new Date(daySeven.setDate(daySeven.getDate() - 1));
const dayOne = new Date(daySeven.setDate(daySeven.getDate() - 1));
daySeven = new Date();


document.querySelector('.statistics__heading').innerHTML = `Вы спросили: «${query}»`;
document.getElementById('total').innerHTML = `${resObj.totalResults}`;
document.getElementById('inTitles').innerHTML = `${localStorage.mentions}`;




// for (let i = 0; i < articles.length; i++) {
//   const words = articles[i].title.split(' ').concat(articles[i].description.split(' '));
//   const counter = words.filter((word) => {
//     return word === query;
//   }).length;
//   console.log(counter);
// }