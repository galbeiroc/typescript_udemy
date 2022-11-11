const userName = 'Albeiro';
// userName = 'Crespo';
let age = 30;

age = 33;

const add = (a: number, b: number = 5) => a + b; // one expression

console.log(add(2))

const printOutput: (a: string | number) => void = output => console.log(output); // one parameter
printOutput(add(5, 6));

const button = document.querySelector('button')!;
button.addEventListener('click', event => console.log(event));