export class GithubApi {
  constructor() {
  }

  getCommits() {
    return fetch('https://api.github.com/repos/dontstain/news-analyzer/commits', {
      method: 'GET'
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .catch(err => console.log(err));
  }
}

