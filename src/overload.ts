export {}

function double(value: number): number;
function double (value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if(typeof value === 'number') {
    return value * 2;
  } else if(typeof value === 'string') {
    return value + value;
  }
}

// function double (value: string): string {
//   return value + value;
// }

console.log(double(100));
console.log(double('go '));
// console.log(double(true));
