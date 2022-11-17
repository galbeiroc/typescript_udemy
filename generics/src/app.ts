const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is Done!!');
  }, 2000);
});

promise.then((result) => result.toLowerCase());