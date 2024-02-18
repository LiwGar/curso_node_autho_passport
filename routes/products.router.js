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
    const { productId } = request.params;
    response.json({
      productId,
      name: 'Product 2',
      price: 10,
    });
  });

  router.post('/', (request, response) => {
    const body = request.body;
    response.json({
      message: 'created',
      data: body,
    });
  });

  router.patch('/:productId', (request, response) => {
    const { productId } = request.params;
    const body = request.body;
    response.json({
      productId,
      message: 'updated',
      data: body,
    });
  });

  router.delete('/:productId', (request, response) => {
    const { productId } = request.params;
    response.json({
      productId,
      message: 'deleted',
    });
  });

  module.exports = router;
