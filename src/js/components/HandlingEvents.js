export class HandlingEvents {
  constructor(api) {
    this.api = api;
    document.addEventListener('click', this);
    document.addEventListener('submit', this);
  }

  handleEvent(event) {
    if (event.type === 'click') {
      if (event.target.classList.contains('search-result__more-button')) {

      }
    }

    else if (event.type === 'submit') {
      event.preventDefault();

      if (event.target.classList.contains('search__form')) {
        console.log(document.querySelector('.search__input').value);
        this.api.getNews(`${document.querySelector('.search__input').value}`)
        .then(res => {
          console.log(res);
        })
      }
    }
  }
}