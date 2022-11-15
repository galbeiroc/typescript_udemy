type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevetadEmployee = Admin & Employee;

const employee: ElevetadEmployee = {
  name: 'galbeiroc',
  privileges: ['create', 'update'],
  startDate: new Date()
}
console.log(employee);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

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

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
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

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!; // option 1
const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // casting

userInputElement.value = 'Hi there!!';

interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character' }
  [key: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email'
}

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

const userInputVal = null;
const storedData = userInputVal ?? 'DEFAULT';
console.log(storedData); // 'DEFAULT'