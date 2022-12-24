import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Product } from "./product.model";

const products = [
  { title: 'A Carpet', price: 25.38 },
  { title: 'A Book', price: 18.99 }
]

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// })

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// const p1 = new Product('A Book', 18.99);
