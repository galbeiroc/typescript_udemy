let userInput: unknown;
let userName: string;

userInput = 20;
userInput = 'a string';

if (typeof userInput === 'string') {
  userName = userInput;
}

function generatorError(message: string, code: number): never {
  throw { message, code };
}

generatorError('An error ocurred!', 500);
