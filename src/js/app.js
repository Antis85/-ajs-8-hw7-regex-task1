export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const filter1 = this.name.search(/^[a-z][-\w]*[a-z]$/gi) !== -1;
    const filter2 = this.name.search(/\d{4,}/) === -1;
    return filter1 && filter2 ? 'name is OK' : 'invalid name';
  }
}
