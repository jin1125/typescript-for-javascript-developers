export{}

class Animal {
  constructor(public name: string) {}

  run():string {
    return 'run'
  }
}

class Lion extends Animal {
  public speed: number

  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed
  }

  run(): string {
    // const parentMessage = super.run()
    // console.log({parentMessage});
    return `${super.run()} ${this.speed}km`
  }
}

// let animal = new Animal()
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal('micky').run());
console.log(new Lion('simba', 80).run());
