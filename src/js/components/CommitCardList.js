export class CommitCardList {
  constructor(container, commits, cardClass) {
    this.container = container;
    this.commits = commits;
    this.card = cardClass;
  }

  _addCard(commitObj) {
    const cardMarkup = this.card.create(commitObj);

    this.container.insertAdjacentHTML('beforeend', cardMarkup);
  }

  render() {
    for (let i = 0; i < 20; i++) {
      this._addCard(this.commits[i]);
    }
  }
}
