import '../pages/analytics.css';
import {DataStorage} from '../js/modules/DataStorage.js';
import transformMonth from '../js/utils/transform-month.js';
import formTableDate from '../js/utils/form-table-date.js';

const dataStorage = new DataStorage;

const query = dataStorage.load('query');
const resObj = dataStorage.load('resObj');
const total = resObj.totalResults;

const daySeven = new Date(dataStorage.load('daySeven'));
const amountSeven = dataStorage.load('amountSeven');
const daySix = new Date(dataStorage.load('daySix'));
const amountSix = dataStorage.load('amountSix');
const dayFive = new Date(dataStorage.load('dayFive'));
const amountFive = dataStorage.load('amountFive');
const dayFour = new Date(dataStorage.load('dayFour'));
const amountFour = dataStorage.load('amountFour');
const dayThree = new Date(dataStorage.load('dayThree'));
const amountThree = dataStorage.load('amountThree');
const dayTwo = new Date(dataStorage.load('dayTwo'));
const amountTwo = dataStorage.load('amountTwo');
const dayOne = new Date(dataStorage.load('dayOne'));
const amountOne = dataStorage.load('amountOne');

document.querySelector('.statistics__heading').textContent = `Вы спросили: «${query}»`;
document.getElementById('total').textContent = `${total}`;
document.getElementById('inTitles').textContent = `${localStorage.mentions}`;
document.getElementById('dateTitle').textContent = `Дата (${transformMonth(dayFour.getMonth())})`;
document.getElementById('one').textContent = formTableDate(dayOne);
document.getElementById('two').textContent = formTableDate(dayTwo);
document.getElementById('three').textContent = formTableDate(dayThree);
document.getElementById('four').textContent = formTableDate(dayFour);
document.getElementById('five').textContent = formTableDate(dayFive);
document.getElementById('six').textContent = formTableDate(daySix);
document.getElementById('seven').textContent = formTableDate(daySeven);

const valueOne = document.querySelector('.analytics__table-value_one');
valueOne.textContent = amountOne;
valueOne.setAttribute('style', `width: calc(100% * ${amountOne} / ${total})`);
const valueTwo = document.querySelector('.analytics__table-value_two');
valueTwo.textContent = amountTwo;
valueTwo.setAttribute('style', `width: calc(100% * ${amountTwo} / ${total})`)
const valueThree = document.querySelector('.analytics__table-value_three');
valueThree.textContent = amountThree;
valueThree.setAttribute('style', `width: calc(100% * ${amountThree} / ${total})`)
const valueFour = document.querySelector('.analytics__table-value_four');
valueFour.textContent = amountFour;
valueFour.setAttribute('style', `width: calc(100% * ${amountFour} / ${total})`)
const valueFive = document.querySelector('.analytics__table-value_five');
valueFive.textContent = amountFive;
valueFive.setAttribute('style', `width: calc(100% * ${amountFive} / ${total})`)
const valueSix = document.querySelector('.analytics__table-value_six');
valueSix.textContent = amountSix;
valueSix.setAttribute('style', `width: calc(100% * ${amountSix} / ${total})`)
const valueSeven = document.querySelector('.analytics__table-value_seven');
valueSeven.textContent = amountSeven;
valueSeven.setAttribute('style', `width: calc(100% * ${amountSeven} / ${total})`)


