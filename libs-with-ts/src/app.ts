import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Product } from "./product.model";
import { validate } from 'class-validator';

const products = [
  { title: 'A Carpet', price: 25.38 },
  { title: 'A Book', price: 18.99 }
]

const newProd = new Product('', -8.58);
validate(newProd).then(err => {
  if (err.length > 0) {
    console.log('VALIDATIONS ERROS');
    console.log(err);
  }
})
console.log(newProd.getInformation())

// const loadedProducts = products.map(prod => {
//   return new Product(prod.title, prod.price);
// })

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// const p1 = new Product('A Book', 18.99);
