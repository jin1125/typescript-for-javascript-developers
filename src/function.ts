export {}

function bmi(height: number, weight: number): number {
  return weight / (height * height)
}

console.log(bmi(1.63, 58));
