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
texStorage.removeItem('crespo')
console.log(texStorage.getItems());

const numberStorage = new DataStorage<number>();
