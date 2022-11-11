const userName = 'Albeiro';
// userName = 'Crespo';
let age1 = 30;

age1 = 33;

const add = (a: number, b: number = 5) => a + b; // one expression

console.log(add(2))

const printOutput: (a: string | number) => void = output => console.log(output); // one parameter
printOutput(add(5, 6));

const button = document.querySelector('button')!;
button.addEventListener('click', event => console.log(event));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(...hobbies);

const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;

console.log(hobby1, hobby2, remainingHobbies);

const person = {
  firstName: 'galbeiro',
  age: 30
};

const { firstName, age } = person;

const copiedPerson1 = person; // bad
const copiedPerson2 = { ...person}; // good

const addNumbers = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => curResult + curValue ,0)
}

const addedNumbers = addNumbers(5, 4, 3, 2, 2.5);
console.log(addedNumbers);


