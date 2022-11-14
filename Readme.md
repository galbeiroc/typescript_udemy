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

### 06- Advanced Types & TypeScript Features ###
### 07- Generics ###
### 08- Decorators ###
### 09- Time to Practice - Full Project ###
### 10- Working with Namespaces & Modules ###
### 12- Webpack and TypeScript ###
### 13- 3rd Party Libraries & TypeScript ###
### 14- React + TypeScript & node + TypeScript ###
