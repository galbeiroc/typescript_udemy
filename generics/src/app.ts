// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is Done!!');
//   }, 2000);
// });

// promise.then((result) => result.toLowerCase());

function merge<T, U>(target: T, source: U) {
 return Object.assign({}, target, source);
}

console.log(merge({ name: 'galbeiro', hobbies: ['sports'] }, { age: 30 }));
const mergeObj = merge({ username: 'galbeiroc' }, { age: 30 });
mergeObj.username;