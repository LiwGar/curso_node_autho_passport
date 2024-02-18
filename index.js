const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
  response.send('Hello my server in express');
});

app.get('/nueva-ruta', (request, response) => {
  response.send('Hello, I am a new route');
});

app.get('/products', (request, response) => {
  response.json([
    {
      name: 'Product 1',
      price: 10
    },
    {
      name: 'Product 2',
      price: 10
    }
  ]);
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

app.listen(port, () => {
  console.log(`La API está escuchando en el puerto ${port}`);
});




