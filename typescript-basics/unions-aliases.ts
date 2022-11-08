type Combineble = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(
  input1: Combineble,
  input2: Combineble,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 33, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '33', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Albeiro', 'Crespo', 'as-string');
console.log(combineNames)
