import '../pages/analytics.css';

const query = JSON.parse(localStorage.query);
const news = JSON.parse(localStorage.news);

document.querySelector('.statistics__heading').innerHTML = `Вы спросили: «${query}»`;
document.getElementById('total').innerHTML = `${news.totalResults}`;
document.getElementById('inTitles').innerHTML = `${localStorage.mentions}`;


