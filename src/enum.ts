export {}

enum Months {
  January = 1,
  Febuary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

Months.Febuary

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
  // YELLOW = '#FFFF00'
}

let green = COLORS.GREEN
console.log(green);

enum COLORS {
  YELLOW = '#FFFF00'
}

COLORS.YELLOW

enum os {
  Window, //0
  Mac, //1
  Linux, //2
}

interface pc {
  id: number;
  osType: os;
}

const pc1: pc = {
  id: 1,
  osType: os.Window,
};

const pc2: pc = {
  id: 2,
  osType: os.Mac,
};

console.log(pc1);
console.log(pc2);
