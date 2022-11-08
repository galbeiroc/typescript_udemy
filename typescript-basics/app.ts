let userInput: unknown;
let userName: string;

userInput = 20;
userInput = 'a string';

if (typeof userInput === 'string') {
  userName = userInput;
}