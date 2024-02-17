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
  response.json({
    name: 'Product 1',
    price: 10
  });
});

app.get('/categories', (request, response) => {
  response.json({
    name: 'Electronics'
  });
});

app.listen(port, () => {
  console.log(`La API está escuchando en el puerto ${port}`);
});




