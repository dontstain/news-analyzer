export class NewsCardList {
  constructor(container, articles, cardClass) {
    this.container = container;
    this.articles = articles;
    this.articlesAmount = this.articles.length
    this.card = cardClass;
    this.counter = 0;
  }

  _addCard(articleObj) {
    const cardMarkup = this.card.create(articleObj);

    this.container.insertAdjacentHTML('beforeend', cardMarkup);
  }
  
  _determineButton() {
    const moreButton = document.querySelector('.search-result__more-button');

    if (this.counter < this.articlesAmount) {
      moreButton.classList.remove('search-result__more-button_hidden')
    } else {
      if (!moreButton.classList.contains('search-result__more-button_hidden')) {
        moreButton.classList.add ('search-result__more-button_hidden')
      }
    }
  }

  renderThree() {
    for (let i = 0; i < 3; i++) {
      if (this.counter < this.articlesAmount) {
        this._addCard(this.articles[this.counter]);
        this.counter++;
      }
    }    
    this._determineButton();
  }
}