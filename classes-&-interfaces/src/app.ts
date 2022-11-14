interface Named {
  readonly name: string;
}
interface Greetable extends Named {
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
let user: Greetable;
user = new Person('crespo');
user.greet('Hi there - I am');

let user1: Greetable = {
  name: 'galbeiroc',
  greet(phrase: string) {
    console.log(phrase, ' ', this.name);
  }
}

user1.greet('Hi there - I am');