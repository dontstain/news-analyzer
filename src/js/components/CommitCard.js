import formCardDate from '../utils/form-card-date.js';

export class CommitCard {
  constructor() {
  }

  create(commit) {
    this.commitInfo = commit;

    return `    
    <div class="swiper-slide commits__slider-slide">
      <div class="commits__card">
        <p class="commits__card-date">
          ${formCardDate(this.commitInfo.commit.committer.date)}
        </p>
        <img src="${this.commitInfo.author.avatar_url}" alt="Аватар" class="commits__card-img">
        <div class="commits__card-header">
          <h3 class="commits__card-name">
            ${this.commitInfo.commit.author.name}
          </h3>
          <p class="commits__card-email">
            ${this.commitInfo.commit.author.email}
          </p>
        </div>
        <p class="commits__card-text">
          ${this.commitInfo.commit.message}
        </p>
      </div>
    </div>
    `;
  }
}