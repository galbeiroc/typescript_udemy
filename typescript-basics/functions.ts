function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('The Result is: ', num);
}
printResult(add(5, 6));

function addAndHandler(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1+ n2;
  cb(result);
}

addAndHandler(20, 40, (result) => {
  console.log(result);
});

addAndHandler(10, 10, printResult);

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));