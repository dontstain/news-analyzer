export class CommitCard {
  constructor(commit) {
    this.commitInfo = commit;
  }

  create() {
    return `    
    <div class="swiper-slide commits__slider-slide">
      <div class="commits__card">
        <p class="commits__card-date">
          ${new Date(this.commitInfo.commit.committer.date).getDate()}-${new Date(this.commitInfo.commit.committer.date).getMonth()}-${new Date(this.commitInfo.commit.committer.date).getFullYear()}
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