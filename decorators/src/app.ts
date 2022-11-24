function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger('Logging person...')
class Person {
  name = 'galbeiroc';

  constructor() {
    console.log('Creating person object....');
  }
}

const person = new Person();
console.log(person);