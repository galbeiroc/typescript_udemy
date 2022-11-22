// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is Done!!');
//   }, 2000);
// });

// promise.then((result) => result.toLowerCase());

function merge<T extends object, U extends object>(target: T, source: U) {
 return Object.assign({}, target, source);
}

console.log(merge({ name: 'galbeiro', hobbies: ['sports'] }, { age: 30 }));
const mergeObj = merge({ username: 'galbeiroc', hobbies: ['sports'] }, { age: 30 });
mergeObj.age;

interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

console.log(loggingIdentity({ length: 10, value: 3 }));

function countAndDescribe<T extends Lengthwise>(element: T): [T, string] {
  let descriptionText = 'Got no value';

  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else {
    descriptionText =`Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!!'));
console.log(countAndDescribe(['Sports', 'Jogging']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'galbeiroc'}, 'name');
console.log(extractAndConvert({ name: 'galbeiroc'}, 'name'));

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
};

getProperty({ name: 'galbeiroc' }, 'name');
console.log(getProperty({ name: 'galbeiroc' }, 'name'));

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
// texStorage.additem(6);
texStorage.removeItem('crespo');
console.log(texStorage.getItems());

const numberStorage = new DataStorage<number>();

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

const names: Readonly<string[]> = ['galbeiroc', 'crespo'];
// names.push('guti'); Property 'push' does not exist on type 'readonly string[]
// names.pop(); Property 'pop' does not exist on type 'readonly string[]'

interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 //  const obj2: Required<Props> = { a: 5 }; Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'

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

console.log(dogs.brilo);

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
  // description: 'tested' Type '{ title: string; completed: false; createdAt: number; description: string; }' is not assignable to type 'TodoPreview'
};

type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: 'description test'
};

type T0 = NonNullable<string | number | undefined>; // type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>; // type T1 = string[]