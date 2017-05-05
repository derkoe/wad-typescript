type AorB = 'A' | 'B';
type BiFunc = (a: number, b: number) => number;

let addFunc: BiFunc = function (a, b) {
  return a + b;
}

let a: AorB = 'A'; 

interface Person {
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
}

const p = {
  firstName: 'Chris',
  lastName: 'Kö'
};
const person: Person = p;
person.dateOfBirth = new Date();
