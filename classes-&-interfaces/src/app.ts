interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person = {
  name: 'galbeiroc',
  age: 33,
  greet(phrase: string) {
    console.log(phrase, ' ', this.name);
  }
}

user1.greet('Hi there - I am');