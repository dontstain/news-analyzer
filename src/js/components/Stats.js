import transformMonth from '../utils/transform-month.js';
import formTableDate from '../utils/form-table-date.js';

export class Stats {
  constructor(dataStorage) {
    this.dataStorage = dataStorage;
    this.query = dataStorage.load('query');
    this.resObj = dataStorage.load('resObj');
    this.total = this.resObj.totalResults;
  }

  _readStorage(numberStr) {
    this[`day${numberStr}`] = new Date(this.dataStorage.load(`day${numberStr}`));
    this[`amount${numberStr}`] = this.dataStorage.load(`amount${numberStr}`);
  }

  _inputTableStat(numberStr) {
    this._readStorage(numberStr);
    this[`value${numberStr}`] = document.getElementById(`value${numberStr}`);
    this[`value${numberStr}`].textContent = this[`amount${numberStr}`];
    this[`value${numberStr}`].setAttribute('style', `width: calc(100% * ${this[`amount${numberStr}`]} / ${this.total})`);
  }

  inputStats() {
    this._inputTableStat('One');
    this._inputTableStat('Two');
    this._inputTableStat('Three');
    this._inputTableStat('Four');
    this._inputTableStat('Five');
    this._inputTableStat('Six');
    this._inputTableStat('Seven');

    document.querySelector('.statistics__heading').textContent = `Вы спросили: «${this.query}»`;
    document.getElementById('total').textContent = `${this.total}`;
    document.getElementById('inTitles').textContent = `${localStorage.mentions}`;
    document.getElementById('dateTitle').textContent = `Дата (${transformMonth(this.dayFour.getMonth())})`;
    document.getElementById('one').textContent = formTableDate(this.dayOne);
    document.getElementById('two').textContent = formTableDate(this.dayTwo);
    document.getElementById('three').textContent = formTableDate(this.dayThree);
    document.getElementById('four').textContent = formTableDate(this.dayFour);
    document.getElementById('five').textContent = formTableDate(this.dayFive);
    document.getElementById('six').textContent = formTableDate(this.daySix);
    document.getElementById('seven').textContent = formTableDate(this.daySeven);
  }
}