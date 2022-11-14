interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(phrase, ' ', this.name);
  }
}

const user = new Person('crespo');
user.greet('Hi there - I am');

let user1: Greetable = {
  name: 'galbeiroc',
  greet(phrase: string) {
    console.log(phrase, ' ', this.name);
  }
}

user1.greet('Hi there - I am');