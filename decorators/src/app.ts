function Logger(logString: string) {
  console.log('LOGGER DECORATOR..');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY..');
  return function<T extends {new(...args: any []): { name: string }}>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any []) {
        super();
        console.log('Rendering template..');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

@Logger('Logging person...')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'galbeiroc';

  constructor() {
    console.log('Creating person object....');
  }
}

const person = new Person();
console.log(person);

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method Decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book TS', 25);
const p2 = new Product('Book JS', 20);

function autoBind(target: any, name: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    }
  };
  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  @autoBind
  showMessage() {
    console.log(this.message);
  }
}


const pp = new Printer();

const button = document.querySelector('button')!;
// button.addEventListener('click', pp.showMessage.bind(pp)); // defualt JS
button.addEventListener('click', pp.showMessage);