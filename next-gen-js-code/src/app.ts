const userName = 'Albeiro';
// userName = 'Crespo';
let age = 30;

age = 33;

const add = (a: number, b: number) => a + b; // one expression

console.log(add(2, 8))

const printOutput: (a: string | number) => void = output => console.log(output); // one parameter
printOutput(add(5, 6));

const button = document.querySelector('button')!;
button.addEventListener('click', event => console.log(event));