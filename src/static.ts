export {};

class Me {
 static isProgrammer: boolean = true;
 static firstName: string = 'sho'
 static lastName: string = 'jin'

 static work() {
   return `hi, I'm ${this.firstName}`
 }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);

console.log(Me.work());
