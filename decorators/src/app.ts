function Logger(constructor: Function) {
  console.log('Logging..');
  console.log(constructor);
}

@Logger
class Person {
  name = 'galbeiroc';

  constructor() {
    console.log('Creating person object....');
  }
}

const person = new Person();
console.log(person);