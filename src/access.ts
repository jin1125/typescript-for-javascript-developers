export {}

class Person {
  public name: string;
  protected age: number;
  protected nationailty: string;

  constructor(name: string, age: number, nationailty: string) {
    this.name = name;
    this.age = age;
    this.nationailty = nationailty;
  }

  profile(): string {
    return `${this.name}:${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationailty: string) {
    super(name, age, nationailty)
  }

  profile(): string {
    return `${this.name}:${this.age}}:${this.nationailty}`
  }
}
let taro = new Person('taro', 30, 'japan');

console.log(taro.name);
console.log(taro.profile());

