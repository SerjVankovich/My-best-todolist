export default class TodoItem {
  constructor(
    id,
    title,
    description,
    timeAdded,
    timeExpired,
    compleated,
    color
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.timeAdded = timeAdded;
    this.timeExpired = timeExpired;
    this.compleated = compleated;
    this.color = color;

    this.expired = new Date().valueOf() > timeExpired.valueOf() ? true : false;
  }

  compleate() {
    this.compleated = true;
  }

  expire() {
    this.expired = true;
  }
}
