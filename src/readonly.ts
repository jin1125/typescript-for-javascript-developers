export {};

class VisaCard {
  // readonly owner: string;

  constructor(public readonly owner: string) {
    // this.owner = owner
  }

}

let myVisaCard = new VisaCard('jin');

console.log(myVisaCard);
// myVisaCard.owner = 'jinta'
// console.log(myVisaCard);


