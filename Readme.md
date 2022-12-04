# TYPESCRIPT #

## COURSE OUTLINE ##

### 01- Getting Started ###

> Link for downloading  [TypeScirpt](https://www.typescriptlang.org/download).
> [Docs](https://www.typescriptlang.org/docs/).
> We will need a copy of [Node.js](https://nodejs.org/en/download/) as an environment to run the package. Then you use a dependency manager like [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/) to download TypeScript into your project.
  - `npm install typescript --save-dev`
  - `yarn add typescript --dev`
  - `pnpm add typescript -D`
> All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:
  - `npx tsc`
  - `yarn tsc`
  - `pnpm tsc`

### 02- TypeScript Basics ###
- Core Types

* *number:* all bumber s, no differentiation between intergers or floats.
* *string* all text values.
* *boolean:* true or flase just these two values.
* *object:* more specific types (type of object) are possible.
* *array:* type can be flexible or strict (regarding the element types).
* *tuple:* fixed-array lenght.
* *enum:* automatically enumerated global constant identifiers.
* *any:* any kind of value, no specific type assigment. `any` disables all types checking.

**Unions Types**
The first way to combine types you might see is a *union* type. A *union* type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
Example:
```typescript
function printId(id: number | string) {}

printId(101); // Ok
printId("202"); // Ok

printId({ myID: 22342 }); // Error
```

**Literal Types**
In addition to the general types string and number, we can refer to specific strings and numbers in type positions.
```typescript
function printText(s: string, alignment: "left" | "right" | "center") {}

printText("Hello, world", "left"); // Ok
printText("G'day, mate", "centre"); // Error
```

**Type Aliases / Custom Types**
A type alias is exactly that - a name for any type. The syntax for a type alias is:

```typescript
type ID = number | string;

function combine(id: ID) {}
```
**Type Aliases & Object Types**
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

```typescript
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }
```

This allows you to avoid unnecessary repetition and manage types centrally.

```typescript
function greet(user: User) {}

function isOlder(user: User, checkAge: number) {}
```

- Core Types & Concepts

**Function Return Type & Void**
The function overall, has one important adverb type. It has a return type is inferred by Typescipt. The colon after the parameter list describe the return type of the function.

The `void` return type for functions can produce some unusual, but expected behavior.
Contextual typing with a return type of `void` does **not** force functions to **not** return something.

```typescript
function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('The Result is: ', num);
}
printResult(add(5, 6));
```
**Function as Types**
Function is a type provided by Typescript in the end, and this makes it clear that whatever we store in here has to be a function. Functions types allow us to describe which type of function specifically we want to use somewhere.

```typescript
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));
```

**Function Types & Callbacks**
```typescript
function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1+ n2;
  cb(result);
}

addAndHandler(20, 40, (result) => {
  console.log(result);
});
addAndHandler(10, 10, printResult);
```

**The 'unknonw' Type**
There are two more types which are good to be aware of because they will matter from time to time.
The `unknown` type represents any value. This is similar to the `any` type, but is safer because it’s not legal to do anything with an `unknown` value. 

```typescript
let userInput: unknown;
let userName: string;

userInput = 20;
userInput = 'a string';

userName = userInput; // Type 'unknown' is not assignable to type 'string'.
```

`unknown` is a bit more restrictive than `any`. unknown check the type that's currently stored in variable before we can assign it.

```typescript
if (typeof userInput === 'string') {
  userName = userInput;
}
```
So we need to such an extra check here with `unknown` to be able to assign an unkonwn value to a value with a fixed type, and therefore `unknown` is the better choice over `any`. If we know we can't tell exactly what type We'll store in there.

**The 'never' Type**
The `never` is another type function. Some functions `never` return a value.
The `never` type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

```typescript
function generatorError(message: string, code: number): never {
  throw { message, code };
}

generatorError('An error ocurred!', 500);
```

### 03- Compiler & Configurations Deep Dive ###
**Watch mode**
We can tell TypeScript to watch file, and whenever that file changes, TypeScript will recompile. Watch mode is already a big imporevement.

`tsc app.ts -w`  or  `tsc app.ts -watch`

**Compiling The Entire Project / Multiples Files**
We need to tell TypeScript that is one project that should be managed with TypeScript.

`tsc --init`

Run this command is TypeScript project, that means it will now basically tell TypeScript that everything in the folder where we run this command, project folder where my files are so that this project is now managed by TypeScript.

We have into project a new file `tsconfig.json`.
Now we are ble to run `tsc` and compile all TypeScript files in the project. I we need to watch all changes run this `tsc -w`.

**Including & Excluding Files**
We can include and exclude files, folder and subfolders in the file `tsconfig.json`.
```json
{
  "compilerOptions": {
    ...
  },
  "exclude": [ // Exlcude files, folder and subfolder
    "node_modules",
    "*.dev.ts"
  ],
  "include": [ // Exlcude files, folder and subfolder
    "analytics.ts",
    "app.ts"
  ],
  "files": [ // Include files, we can`t pecifiy folders
    "app.ts"
  ]
```
**Setting a Compilation Target**
`compilerOptions: {}` this allow us to control how our types code is compiled.
`"target": "es2016"` this set by default this options is to tell TypeScript which
target JavaScript version we want to compile the code. It also compiles the code to JavaScript that runs in certain set of browsers.

**Understanding TypeScript Core Libs**
`"lib": []` lib is a option that allows us to specify wich default objects and features TypeScript knows.
```json
{
  "compilerOptions": {
    "lib": [
      "DOM", // This is an identifier TS understands basically unlocks all the DOM api in TS
      "DOM.Iterable"
    ],
  }
}
```

**More Configuration & Compilation Options**
```json
{
  "compilerOptions": {
    "lib": [
      "DOM", // This is an identifier TS understands basically unlocks all the DOM api in TS
      "DOM.Iterable"
    ],
    /* JavaScript Support */
    "allowJs": true, // Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files.
    "checkJs": true, // Enable error reporting in type-checked JavaScript files.
    "jsx": "preserve", // Specify what JSX code is generated.
    "declaration": true, // Generate .d.ts files from TypeScript and JavaScript files in your project.
    "declarationMap": true, // Create sourcemaps for d.ts files.
  }
}
```

**Working SourceMap**
`"sourceMap": true` help us with debbuging and development. It is super convinient beacuse that really takes our debugging process to the next level, because we can work directly in our files. basically in our TypeScript files instead of the JavaScript files.

**rootDir and outDir**
```json
{
  "compilerOptions": {
    "outDir": "./dist", // Specify an output folder for all emitted files.
    "rootDir": "./src", // Specify the root folder within your source files.
    "removeComments": true, // Disable emitting comments in js files.
    "noEmitOnError": true, // Disable emitting files if any type checking errors are reported.
  }
}
```
**Strict Compilitation**
```json
{
  "compilerOptions": {
    /* Type Checking */
    "strict": true, // Enable all strict type-checking options.
    "noImplicitAny": false, // Enable error reporting for expressions and declarations with an implied 'any' type. Not for variables.
    "strictNullChecks": false, // Enable strict null checks
    "strictFunctionTypes": true, // When assigning functions, check to ensure parameters and the return values are subtype-compatible.
    "strictBindCallApply": true, // Check that the arguments for 'bind', 'call', and 'apply' methods match the original function.
    "strictPropertyInitialization": true, // Check for class properties that are declared but not set in the constructor.
    "noImplicitThis": true, // Enable error reporting when 'this' is given the type 'any'.
  }
}
```

**Code Quality Options**
```json
{
  "compilerOptions": {
    "noUnusedLocals": true, // Enable error reporting when local variables aren't read.
    "noUnusedParameters": true, // Raise an error when a function parameter isn't read.
    "noImplicitReturns": true, // Enable error reporting for codepaths that do not explicitly return in a function.
  }
}
```
**Useful Resources & Links**
* [tsconfig Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
* [Compiler Config Docs](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
* [TS Debugging](https://code.visualstudio.com/docs/typescript/typescript-debugging)

### 04- Working with Next-gen JS Code ###
**let and const**
[Next-gen JS Feature Table](https://kangax.github.io/compat-table/es6/)
`const` are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment.
```typescript
const userName = 'Albeiro';
userName = 'Crespo'; // Error
```
`let` declaration declares a block-scoped local variable, optionally initializing it to a value.
A block is basically allways a snippet sorrounded with curly braces.
```typescript
let age = 30;
age = 31; // Ok
```

**Arrow Function**
An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage.
* Arrow functions don't have their own bindings to `this`, `arguments`, or `super`, and should not be used as `methods`.
* Arrow functions cannot be used as constructors. Calling them with `new` throws a `TypeError`. They also don't have access to the `new.target` keyword.
* Arrow functions cannot use `yield` within their body and cannot be created as generator functions.

```typescript
const add = (a: number, b: number) => a + b; // one expression
const printOutput: (a: string | number) => void = output => console.log(output); // one parameter
const getValue = () => console.log('get value'); // no parameters
```

**Default Parameters**
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
```typescript
const add = (a: number, b: number = 5) => a + b;
console.log(add(2)) // 7
```

**The Spread Operator (...)**
Spread operator (`...`) allows us to quickly copy all or part of an existing array or object into another array or object.

```typescript
// Array
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies]; // 1t option
activeHobbies.push(...hobbies); // 2d option
const copyArr = [...hobbies];  // copy
// Object
const person = {
  name: 'galbeiro',
  age: 30
};
const copiedPerson = person; // bad
const copiedPerson = { ...person}; // good
```

**The Rest Parameters**
The rest parameter (`...`) allows a function to treat an indefinite number of arguments as an array.

```typescript
const addNumbers = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => curResult + curValue ,0)
}
const addedNumbers = addNumbers(5, 4, 3, 2, 2.5);
```

**Array & Object Destruturing**
The `destructuring` assignment syntax is a *JavaScript* expression that makes it possible to unpack values from arrays, or properties from objects.
The important thing is for array destructuring elements are pulled out in order because an array is an ordered list.

```typescript
const hobbies = ['Sports', 'Cooking', 'Hiking'];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(activeHobbies, remainingHobbies); // 'Sports' 'Cooking' ['Hiking']
```
In object the order s not always guaranteed, we don't pull elements out by position. But by key name.

```typescript
const person = {
  firstName: 'galbeiro',
  age: 30
};
const { firstName, age } = person;
const { firstName: userName, age } = person; // override firstName
```

### 05- Classes & Interfaces ###
* Classes
**What are Classes**
Define how object look like, which properties and methods they have. Classes are a template for creating objects.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Department" here)

```typescript
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}
const accounting = new Department('Accounting');
```

**Constructor Function & the `this` keyword**
`constructor` method is a special method for creating and initializing an object created with a class. 
`this` then typically refers back to the concrete instance of this class.
```typescript
class Department {
  name: string; //property

  constructor(n: string) { //constructor
    this.name = n;
  }

  describe(this: Department) { //method
    console.log('Department: ', this.name);
  }
}
const accounting = new Department('Accounting');
accounting.describe();

const accountingCopy = { describe: accounting.describe, name: 'Tested' };
accountingCopy.describe();
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe(); // Error
```

**'private' and 'public' Access Modifiers**
`public` (default) allows access to the class member from anywhere
`private` only allows access to the class member from within the class.
[JavaScript Private & Public Fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

*Shorthand Initialization*
```typescript
class Department {
  constructor(private id: string, public name: string) {}
}
```

**readonly**
This keyword is introducing by TypeScript, it doesn't exist in JavaScript. the `readonly` keyword can prevent class members from being changed.

```typescript
class Department {
  constructor(private readonly id: string, public name: string) {}
}
```

**inheritance**
Inheritance allows us to define a class that inherits all the methods and properties from another class.
*Parent* class is the class being inherited from, also called base class.
*Child* class is the class that inherits from another class, also called derived class.
Classes can extend each other through the `extends` keyword.

```typescript
class Department {
  private employees: string[] = []; // private modifier
  constructor(private readonly id: string, public name: string) {} //constructor

  describe(this: Department) { ... }
  addEmployes(employee: string) { ... }
  printEmployeesInfo() { ... }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]){
    super(id, 'IT'); // call the contructor of parent class
  }
}

class AccountingDepartment extends Department {
  private reports: string[];
  constructor(id: string, reports: string[]) {
    super(id, 'ACCOUNTING');
    this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('D1', ['guti']);
it.addEmployes('galbeiroc');
it.addEmployes('crespo');
it.describe();
it.printEmployeesInfo();

const accounting = new AccountingDepartment('D2', []);
accounting.addReport('Something went wrong...');
accounting.printReports();
```

**Overriding Properties & The `protected` Modifier**
`protected` allows access to the class member from itself and any classes that inherit it.
```typescript
class Department {
  protected employees: string[] = []; // protected modifier
  constructor(private readonly id: string, public name: string) {} //constructor

  describe(this: Department) { ... }
  addEmployes(employee: string) { ... }
  printEmployeesInfo() { ... }
}

class AccountingDepartment extends Department {
  private reports: string[];
  constructor(id: string, reports: string[]) {
    super(id, 'ACCOUNTING');
    this.reports = reports;
  }

  addEmployes(employee: string): void {
    if (employee === 'galbeiroc') {
      return;
    }
    this.employees.push(employee); // override property
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('D2', []);
accounting.addReport('Something went wrong...');
accounting.addEmployes('galbeiroc');
accounting.addEmployes('jesus');
accounting.printReports();
accounting.printEmployeesInfo();
```

**Getters and Settters (Encapsulation)**
Getters and setters allow you to get and set properties via methods.
* A getter method returns the value of the property’s value. A getter is also called an accessor.
* A setter method updates the property’s value. A setter is also known as a mutator.

```typescript
class AccountingDepartment extends Department {
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, 'ACCOUNTING');
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('Not report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value);
  }

  addEmployes(employee: string): void {
    if (employee === 'galbeiroc') {
      return;
    }
    this.employees.push(employee); // override property
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('D2', []);
accounting.addReport('Something went wrong...');
accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);
```

**Static Methods & Properties**
The `static` keyword defines static methods for classes.
Static methods are called directly on the class, without creating an instance/object.
We call methods directly on the class without the `new` keyword.
We can't access `static` properties and methods inside `constructor` method, because the whole idea behind static properties and methods is that they are detached from instances. If we want to use the static properties or methods from inside the class. We have to use the class name here to access it. Example `Department.fiscalYear`.

```typescript
class Department {
  static fiscalYear: number = 2022; // static property
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) { //constructor
    console.log(Department.fiscalYear); //access to static property
  }

  static createEmployee(name: string) { // static method
    return { name }
  }
}

const employee1 = Department.createEmployee('galbeiroc');
console.log(employee1, Department.fiscalYear); // { name: 'galbeiroc' } 2022
```

**Abstract Classes**
Classes, methods, and fields in TypeScript may be abstract.
An *abstract method* or *abstract field* is one that hasn’t had an implementation provided. These members must exist inside an `abstract class`, which cannot be directly instantiated.
```typescript
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
const b = new Base(); // Cannot create an instance of an abstract class.
```
The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be `concrete`. In the example based on the `Department` class, which is `abstract` class has such a `abstract` method, which means this method has to be implemented by any class based on this `Department` class.

```typescript
abstract class Department { // abstract class
  static fiscalYear: number = 2022;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {} //constructor

  static createEmployee(name: string) { // static method
    return { name }
  }

  abstract describe(this: Department): void; // abstract method
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]){
    super(id, 'IT'); // call the contructor of parent class
  }

  describe() { // describe method
    console.log('IT Department - ID', this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, 'ACCOUNTING');
    this.lastReport = reports[0];
  }

  describe() { // describe method
    console.log('Accounting Department - ID', this.id);
  }
}

const it = new ITDepartment('D1', ['guti']);
it.describe();

const accounting = new AccountingDepartment('D2', ['Something went wrong...']);
accounting.describe();
```

**Singletons & Private Constructors**
The Singleton pattern is about ensuring that we always only have exactly one instance of a certain class. This is can be useful in scenarios where we somehow can't use static methods or properties or we don't want to. But at the same time, we want to make sure that we can't create multiples objects based on a class.
We always have exactly one object based on a class.

```typescript
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; // static instance property

  private constructor(id: string, private reports: string[]) { // private constructor
    super(id, 'ACCOUNTING');
    this.lastReport = reports[0];
  }

  static getInstance() { // Singleton
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('D2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID', this.id);
  }

  get mostRecentReport() { ... }

  set mostRecentReport(value: string) { ... }

  addEmployes(employee: string): void { ... }

  addReport(text: string) { ... }

  printReports() { ... }
}

const accounting = AccountingDepartment.getInstance();
const accounting1 = AccountingDepartment.getInstance();
console.log(accounting, accounting1); // They are the same object because we have one instance
```

* Interfaces

**What are Interfaces**
Interfaces describe the structure of an object. We can use it to describe how an object should look like.
```typescript
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user: Person = {
  name: 'galbeiroc',
  age: 33,
  greet(phrase: string) {
    console.log(phrase, ' ', this.name);
  }
}

user.greet('Hi there - I am');
```
###### Differences Between Type Aliases and Interfaces ######
Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

|                interface                   |                         type                         |
| ------------------------------------------ | ---------------------------------------------------- |
| Extending an interface                     | Extending a type via intersections                   |
| `interface Bear extends Animal {}`         |  `type Bear = Animal & { }`                          |
| Adding new fields to an existing interface | A type cannot be changed after being created         |

**Using Interfaces With Classes**
Another thing we can do with interfaces, but we would also be also to do with custom types is we can implement an interface in a class. The reason why often work with interfaces is that inteface can be used as a contract, a class can implement, and a class then has to adhere to. We can impelemt more than one interface. That's a difference compared to inheritance. We can inherit only from one class. Therefore interface are often used o share funcionality amongst different classes, not regarding their concrete implementation. We can't have implementation or values inside of interfaces, regarding the feature a class should have. It's a bit like working with `abstract` classes. Therefore the diffrence being that an `interface` has not implementation deatils at all. Whereas `abstract` class can be mixture of we have to override this part and we have a concrete implementation part. That's an important diffrence between interfaces and abstract classes.


```typescript
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable { // implement interface
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
```

**Why Interfaces?**
Interfaces is useful in situations like this where know we want to have a certain set of functionalities.
`readonly` makes it clear that the interface properties in whatever object we build on this interfacemust only be set once and read only thereafter.

```typescript
interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable { ... }

user = new Person('crespo');
user.greet('Hi there - I am');
user.name = 'guti'; // Cannot assign to 'name' because it is a read-only property.
```

**Extending Interfaces**
Extending interfaces is possible and there we can also `extends` more than one. It is totally different in class wich we can extend one class.
``` typescript
interface Named {
  readonly name: string;
}

interface Greetable extends Named, AnotherInterface {
  greet(phrase: string): void;
}
```

**Interfaces as Function Types**
Interfaces can also be used to define the structure of a function, so basically as a replacement for the function types. It is a nice alternative syntax to be aware of.

```typescript
interface AddFunc {
  (a: number, b: number): number
}

let add: AddFunc;

add = (n1: number, n2: number) => {
  return n1 + n2;
}
``` 

**Optional Parameters & Properties**
We can also define optional properties in interfaces and also in class like this:
```typescript
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
user.greet('Hi there - I am'); // Hi
```
Interfaces nonetheless are powerful feature to force your class or objects to have a certain structure and to clearly describe our idea of how an object should look like.

* [More on (JS) Classes: ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [More on TS Interfaces: ](https://www.typescriptlang.org/docs/handbook/2/objects.html)

### 06- Advanced Types & TypeScript Features ###
**Intersection Types `&`**
TypeScript provides another construct called intersection (`&`) types that is mainly used to combine existing object types. Intersection types are closely related to interface inheritance because of course we could have achieved the same here by using an interface.

```typescript
// intersection types with types alias
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevetadEmployee = Admin & Employee;

// similar by using interfaces
interface Admin { ... }
interface Employee { ... }
interface ElevetadEmployee extends Admin, Employee{};

const employee: ElevetadEmployee = {
  name: 'galbeiroc',
  privileges: ['create', 'update'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
```

**More on Type Guards `&`**
* Type Guards allow us to utilize the flexibility union types gives us and still ensure that our code runs correctly at runtime.
* Type Guards allow us to narrow down the type of a variable within a conditional block.

1. **`typeof` type guard**
JavaScript supports a `typeof` operator which can give very basic information about the type of values we have at runtime. TypeScript expects this to return a certain set of strings:
* `"string"`
* `"number"`
* `"bigint"`
* `"boolean"`
* `"symbol"`
* `"undefined"`
* `"object"`
* `"function"`

```typescript
type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

2. **The `in` operator**
JavaScript has an operator for determining if an object has a property with a name: the `in` operator. TypeScript takes this into account as a way to narrow down potential types.

```typescript
type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ', emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ', emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ', emp.startDate);
  }
}
printEmployeeInformation({ name: 'Max', startDate: new Date() });
```

3. **`instanceof` type guard**
JavaScript has an operator for checking whether or not a value is an “instance” of another value.
The instanceof keyword checks whether an object is an instance of a specific class.
When working with classes, we can also use another type of type guard and that would be the instance.

```typescript
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...', amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);
```
Type guards is just a term that describes the idea or approach of checking if a certain property or method exists before we try to use it.

**Descriminated Unions**
It's a pattern which we can use when working union types that makes implementing type gurad easier. It is available when we work with object types.
This is a descriminated union because we have a common property in every object that makes up our union which describes that object, so that we can use this property that describes this object in our check to have 100% type safety.

```typescript
interface Bird {
  type: 'bird'; // common property
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // common property
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimmal(animal: Animal) {
  let speed;
  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    default:
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ', speed);
}

moveAnimmal({ type: 'bird', flyingSpeed: 10 });
```

**Type Casting**
Type Casting help us tell TypeScript that some value is of a specific type where TypeScript
is not able to detect it on it own. But we as a developer know that it will be the case. Type casting is powerful feature so is this exclamation mark `!`, this exclamation mark allow us to tell TypeScript that the expression in front of it will never yield null.

```typescript
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // option 1
const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // casting option 2

userInputElement.value = 'Hi there!!';
```

**Index Properties or Index Signatures**
Index types is a feature that allows us to create objects which are more flexible regarding the propeties they might hold.
Sometimes we don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.
In those cases we can use an index signature to describe the types of possible values.

```typescript
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character' }
  [key: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email'
}
```

**Function Overloads**
Function overloads is a feature thar allows us to define multiple function signatueres so to say for one at the same function, which simply means we can have multiple possible ways of calling a functionwith different parameters.
*Note:* Do sort overloads by putting the more general signatures after more specific signatures.
*Why*: TypeScript chooses the first matching overload when resolving function calls. When an earlier overload is “more general” than a later one, the later one is effectively hidden and cannot be called.

```typescript
// function add(a: number): number; // this it would work if 'b' is optional parameter
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = add(2, 2);
const result2 = add('galbeiroc', 'Crespo');
```
We can be really clear about what's getting returned for the different combinations we might support in our function.

**Optional Chaining**
Optional chaining operator helps us safely access nested properties and nested objects in our object data. If the thing in front of the question mark `?` is `undefined`, it will not access the thing thereafter.

```typescript
interface UserData {
  id: string;
  name: string;
  job?:  { title?: string, description?: string }
}

const fetchUserData: UserData = {
  id: 'abc123',
  name: 'galbeiroc',
  // job: { title: 'CEO', description: 'My own company' }
}
console.log(fetchUserData?.job?.title);
```

**Nullish Coalescing**
Nullish coalescing `??` allows us to specify a kind of a default value to be used in place of another expression, which is evaluated to null or undefined.

```typescript
const userInputVal = null;
const storedData = userInputVal ?? 'DEFAULT';
console.log(storedData); // 'DEFAULT'
```

[More on Advanced Types: ](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

### 07- Generics ###
Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
Generics makes it easier to write reusable code.
A generic type is a type which is kind of connected with some other type and is really flexible regarding which exact type that our type is.

```typescript
function merge<T, U>(target: T, source: U) {
 return Object.assign({}, target, source);
}

const mergeObj = merge({ username: 'galbeiroc', hobbies: ['sports'] }, { age: 30 });
mergeObj.username;
```
In this example is important to understand that this is in the end what generics are all about, that we can fill in different concrete types for different functions calls. We don't need to care about because TypeScript simply infers the types of the values we're passing. Then it plugs in the inferred types for `T` and `U`. for this function call.
Therefore, generics allow us to continue working with our data in a TypeScript optimal way.

**Constraints**
For generics types, we can set certain constraints regarding the types our generics types can be based on we can do this with the extended keyword.The `extends` keyword to denote our constraint. If we want to restrict the types in our case `T` and `U` here solve our generic types.

```typescript
function merge<T extends object, U extends object>(target: T, source: U) {
 return Object.assign({}, target, source);
}

const mergeObj = merge({ username: 'galbeiroc', hobbies: ['sports'] }, 30); // Error
const mergeObj = merge({ username: 'galbeiroc', hobbies: ['sports'] }, { age: 30 });
mergeObj.age;
```
This constraints can be anything, we can extend objects, strings, numbers, we can use own type if we had it or we can also use union type there if we want to.

```typescript
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

console.log(loggingIdentity({ length: 10, value: 3 })); // { length: 10, value: 3 }
// add another generic function
function countAndDescribe<T extends Lengthwise>(element: T): [T, string] {
  let descriptionText = 'Got no value';

  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else {
    descriptionText =`Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!!')); // ['Hi there!!', 'Got 10 elements']
console.log(countAndDescribe(['Sports', 'Jogging'])); // [['Sports', 'Jogging'], 'Got 10 elements']
```

**The `keyof` Constraint**
The `keyof` operator takes an object type and produces a string or numeric literal union of its keys.

```typescript
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'galbeiroc'}, 'name');
extractAndConvert({ name: 'galbeiroc'}, 'age'); // Error
```
* `keyof T` returns a union of string literal types. The extends keyword is used to apply constraints to `U`, so that `U` is one of the string literal types only
* `extends` means “is assignable” instead of “inherits”; `U extends keyof T` means that any value of type `U` can be assigned to the string literal union types
* The indexed access operator `obj[key]` returns the same type that the property has.

**Generic Classes**
A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (`<>`) following the name of the class.

```typescript
class DataStorage<T extends string | number> {
  private data: T[] = [];

  additem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data]
  }
}

const texStorage = new DataStorage<string>();
texStorage.additem('galbeiroc');
texStorage.additem('crespo');
// texStorage.additem(6) Error
texStorage.removeItem('crespo');
console.log(texStorage.getItems());

const numberStorage = new DataStorage<number>();
```

**Generics Utility Types**
TypeScript provides several utility types to facilitate common type transformations. These utilities are available globally. They can give us extra type safety or extra fexibility:

* `Partial<'Type'>`
Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

```typescript
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}


function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}
```
* `Required<'Type'>`
Constructs a type consisting of all properties of 'Type' set to required. The opposite of Partial.


```typescript
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 //  const obj2: Required<Props> = { a: 5 }; Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'
```

* `Readonly<'Type'>`
Constructs a type with all properties of 'Type' set to `readonly`, meaning the properties of the constructed type cannot be reassigned.

```typescript
const names: Readonly<string[]> = ['galbeiroc', 'crespo'];
// names.push('guti'); Property 'push' does not exist on type 'readonly string[]
// names.pop(); Property 'pop' does not exist on type 'readonly string[]'
```

* `Record<'Keys', 'Type'>`
Constructs an object type whose property keys are 'Keys' and whose property values are 'Type'. This utility can be used to map the properties of a type to another type.


```typescript
interface DogInfo {
  age: number;
  breed: string;
}

type DogName = 'fitu' | 'brilo' | 'roky';

const dogs: Record<DogName, DogInfo> = {
  fitu: { age: 9, breed: 'Pequins'},
  brilo: { age: 2, breed: 'Creole' },
  roky: { age: 4, breed: 'doberman' }
}
```

* `Pick<'Type', 'Keys'>`
Constructs a type by picking the set of properties 'Keys' (string literal or union of string literals) from 'Type'.

```typescript
interface UserInfo {
  name: string;
  age: number;
  email: string;
}

type UserInfoPreview = Pick<UserInfo, "name" | "email">

const userInfo: UserInfoPreview = {
  name: 'galbeiroc',
  email: 'useremail@mail.com'
  // age: 30 - Type '{ name: string; email: string; age: number; }' is not assignable to type 'UserInfoPreview'
}
```

* `Omit<'Type', 'Keys'>`
Constructs a type by picking all properties from 'Type' and then removing 'Keys' (string literal or union of string literals).

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Fix code",
  completed: false,
  createdAt: 1615544252770,
};

const todo1: TodoPreview = {
  title: "Fix code",
  completed: false,
  createdAt: 1615544252770,
  // description: 'tested' Type '{ title: string; completed: false; createdAt: number; description: string; }' is not assignable to type 'TodoPreview'
};

type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = { // Property 'description' is missing in type '{ title: string; }' but required in type 'TodoInfo'.
  title: "Pick up kids",
};
```

* `NonNullable<'Type'>`
Constructs a type by excluding null and undefined from Type.

```typescript
type T0 = NonNullable<string | number | undefined>; // type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>; // type T1 = string[]
```

[More Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

### 08- Decorators ###
We need to check the following in tsconfig.json to work with decorator.
```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```
* Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.
* Decorators execute when the class is defined. Not when it is instantiated. We dont need to instantiate our class at all. So decorator runs when JavaScript finds our class defintion, our constructor definition.
* Decorator is a special kind of declaration that can be attached to a class declaration, `method`, `accessor`, `property`, or `parameter`. Decorators use the form `@expression`, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

```typescript
function Logger(constructor: Function) {
  console.log('Logging..');
  console.log(constructor);
}

@Logger // decorator
class Person {
  name = 'galbeiroc';

  constructor() {
    console.log('Creating person object....');
  }
}
```

**Decorators Factories**
Decorator factory basically returns a decorator function, but allows us to configure it when we assign it as a decorator to something.
```typescript
function Logger(logString: string) {
  // this is the decorator factory, it sets up the returned decorator function
  return function(constructor: Function) {
    // this is the decorator
    console.log(logString);
    console.log(constructor);
  }
}

@Logger('Logging person...') // call decorator
class Person {
  name = 'galbeiroc';

  constructor() {
    console.log('Creating person object....');
  }
}
```
We can customize the values the decorator functio uses when it executes with our factory function. Using decorator factories can give us more power and more posibilities of configuring what decorator then does internally.

```typescript
function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name; // render name property 
    }
  }
}

// @Logger('Logging person...')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'galbeiroc';

  constructor() {
    console.log('Creating person object....');
  }
}
```

Another important thing we should know, we can add more than decorator to a class or anywhere else where we can use a decorator. Execution decorator run bottom up.

```typescript
function Logger(logString: string) {
  console.log('LOGGER DECORATOR..');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY..');
  return function(constructor: any) {
    console.log('Rendering template..');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
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
```

**Diving into Property Decorators**
We can add decorator as a property `@Log`, if we add a decorator to a property the decorator receives two arguments the first argument is `target` property, target would refer to the constructor function state, prototype, instance accessor or static. The second property we get, is the property name simply. It executes basically whe our class definition is registerd by JavaScript. So it executes when we define this property  basically to JavaScript as part our class here, as part of this constructor function which is created here in the end, this is when this property decorator executes.

```typescript
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName); // { constructor: ƒ, getPriceWithTax: ƒ } 'title'
}

class Product {
  @Log
  title: string;
  private _price: number;

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

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
```

**Accessor & Parameters Decorators**
We can also add decorators to accessors they receives three arguments `target` of the contructor, the `name` of the accessor and `descriptor` will be of the type property descriptor.
Besides properties and accessors, we also got methods and we can add decorators to methods. A method decorator also receives three arguments, the `target` again which if it's an instance method, is the property of the object, then `name` of the method and the `descriptor`.
We can add decorator to every parameter we get of course. Parameter decorator has three parameters `target`, `name` of the method in which we used this parameter and the last parameter is the position, start index 0.


```typescript
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName); // { constructor: ƒ, getPriceWithTax: ƒ } 'title'
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator!');
  console.log(target); // { constructor: ƒ, getPriceWithTax: ƒ } 'title'
  console.log(name); // price
  console.log(descriptor); // { configurable: true, enumerable: false, get: undefined, set: ƒ price(val) }
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method Decorator!');
  console.log(target); // { constructor: ƒ, getPriceWithTax: ƒ } 'title'
  console.log(name); // getPriceWithTax
  console.log(descriptor); // { writable: true, configurable: true, enumerable: false, value: ƒ getPriceWithTax(tax)}
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter Decorator!');
  console.log(target); // { constructor: ƒ, getPriceWithTax: ƒ } 'title'
  console.log(name); // getPriceWithTax
  console.log(position); // 0
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
```

### 09- Time to Practice - Full Project ###
### 10- Working with Namespaces & Modules ###
### 12- Webpack and TypeScript ###
### 13- 3rd Party Libraries & TypeScript ###
### 14- React + TypeScript & node + TypeScript ###
