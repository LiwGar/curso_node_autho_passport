const express = require('express');

const { faker } = require('@faker-js/faker');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
  response.send('Hello my server in express');
});

app.get('/nueva-ruta', (request, response) => {
  response.send('Hello, I am a new route');
});

app.get('/products', (request, response) => {
const products = [];
const { size } = request.query;
const limit = size || 10;
for (let index = 0; index < limit; index++) {
  products.push({
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    image: faker.image.url(),
  });
}
  response.json(products);
});

app.get('/products/filter', (request, response) => {
  response.send('I am a Filter');
});

app.get('/products/:productId', (request, response) => {
  const {productId} = request.params;
  response.json({
    productId,
    name: 'Product 2',
    price: 10
  });
});

app.get('/categories', (request, response) => {
  response.json([
    {
      name: 'Electronic',
      imagen: 'imagen',
    },
    {
      name: 'Toys',
      imagen: 'imagen',
    },
    {
      name: 'Clothes',
      imagen: 'imagen',
    },
    {
      name: 'Books',
      imagen: 'imagen',
    }
  ]);
});

app.get('/categories/:categoryId', (request, response) => {
  const {categoryId} = request.params;
  response.json({
    categoryId,
    name: 'Product',
    imagen: 'imagen',
  });
});

app.get('/categories/:categoryId/products/:productId', (request, response) => {
  const {categoryId, productId} = request.params;
  response.json({
    categoryId,
    productId,
  });
});

app.get('/users', (request, response) => {
  const { limit, offset } = request.query;
  if(limit && offset) {
    response.json({
      limit,
      offset
    });
  }else{
    response.send('There are no parameters');
  };
});

app.listen(port, () => {
  console.log(`La API está escuchando en el puerto ${port}`);
});




