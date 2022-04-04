export {}

const reducer = (a: number, c: number) => {
  console.log({a, c});
  return a + c
}

const sum: (...values: number[]) => number
  = (...values: number[]): number => {
  return values.reduce(reducer)
}

console.log(sum(1, 2, 3, 4, 5));
