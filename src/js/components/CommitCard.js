import dateTransformer from '../utils/date-transformer.js';

export class CommitCard {
  constructor() {
  }

  create(commit) {
    this.commitInfo = commit;
    
    return `    
    <div class="swiper-slide commits__slider-slide">
      <div class="commits__card">
        <p class="commits__card-date">
          ${dateTransformer(this.commitInfo.commit.committer.date)}
        </p>
        <img src="${this.commitInfo.author? this.commitInfo.author.avatar_url : `https://avatars1.githubusercontent.com/u/22224322?v=4`}" alt="Аватар" class="commits__card-img">
        <div class="commits__card-header">
          <h3 class="commits__card-name">
            ${this.commitInfo.commit.committer.name}
          </h3>
          <p class="commits__card-email">
            ${this.commitInfo.commit.committer.email}
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