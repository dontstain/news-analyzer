import {CommitCard} from './CommitCard.js';

export class CommitCardList {
  constructor(container, commits) {
    this.container = container;
    this.commits = commits;
    this.render(); 
  }

  addCard(commitObj) {
    const cardMarkup = new CommitCard(commitObj).create();

    this.container.insertAdjacentHTML('beforeend', cardMarkup);
  }

  render() {
    for (let i = 0; i < 20; i++) {
      console.log(this.commits[i])
      this.addCard(this.commits[i]);
    }
  }
}
