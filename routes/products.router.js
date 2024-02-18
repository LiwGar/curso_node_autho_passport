const express = require('express');

const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get('/', (request, response) => {
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

  router.get('/filter', (request, response) => {
    response.send('I am a Filter');
  });

  router.get('/:productId', (request, response) => {
    const {productId} = request.params;
    response.json({
      productId,
      name: 'Product 2',
      price: 10
    });
  });

  module.exports = router;
