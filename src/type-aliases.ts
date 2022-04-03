export {}

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

const example1 = {
  name: 'jin',
  age: 27
}

type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'jin',
  age: 27
}

type Profile2 = typeof example1;