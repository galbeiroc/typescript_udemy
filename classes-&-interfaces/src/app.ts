// type AddFunc = (a: number, b: number) => number;
interface AddFunc {
  (a: number, b: number): number
}

let add: AddFunc;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase, ' ', this.name);
    } else {
      console.log('Hi!!');
    }
  }
}
let user: Greetable;
user = new Person();
user.greet('Hi there - I am');

let user1: Greetable = {
  name: 'galbeiroc',
  greet(phrase: string) {
    console.log(phrase, ' ', this.name);
  }
}

user1.greet('Hi there - I am');