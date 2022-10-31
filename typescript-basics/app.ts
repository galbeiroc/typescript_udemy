const person: {
  name: string;
  age: number;
  hobbies: string[],
  role: [number, string]
} = {
  name: 'Albeiro',
  age: 33,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] // Tuple Fixed array lenght (number | string)[]
}

// person.role.push('admin') ts does'nt catch error with push
// person.role[1] = 10 errors
person.role = [1, 'admin']

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

type TProduct = {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}

const product: TProduct = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red carpet',
    description: 'A great carpet - almost brand-new'
  }
}