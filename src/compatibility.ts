export{}

let fooCompatible: any;
let barCompatible: string = 'aaa';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 111;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'bbb';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1992 = 1992;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
// me = {age: 29, name: 'jin'}

me = new Person(43, 'jin')