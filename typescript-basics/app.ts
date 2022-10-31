const person = {
  name: 'Albeiro',
  age: 33,
  hobbies: ['Sports', 'Cooking']
}

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