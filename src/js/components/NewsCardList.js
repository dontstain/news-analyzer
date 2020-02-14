export class NewsCardList {
  constructor(container, articles, cardClass) {
    this.container = container;
    this.articles = articles;
    this.card = cardClass;
    this.counter = 0;
  }

  addCard(articleObj) {
    const cardMarkup = this.card.create(articleObj);

    this.container.insertAdjacentHTML('beforeend', cardMarkup);
  }

  renderThree() {
    for (let i = 0; i < 3; i++) {
      if (this.counter < this.articles.length) {
        this.addCard(this.articles[this.counter]);
        this.counter++;
      }
    }
  }
}