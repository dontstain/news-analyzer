export class DataStorage {
  constructor() {
  }

  save(item, name) {
    localStorage[name] = JSON.stringify(item);
  }

  load(item) {
    return JSON.parse(localStorage[item])
  }
}