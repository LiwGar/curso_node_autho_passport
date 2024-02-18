const express = require('express');

const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get('/', (request, response) => {
  response.json([
    {
      category: faker.commerce.productAdjective(),
    },
    {
      category: faker.commerce.productAdjective(),
    },
    {
      category: faker.commerce.productAdjective(),
    },
    {
      category: faker.commerce.productAdjective(),
    }
  ]);
});

router.get('/:categoryId', (request, response) => {
  const {categoryId} = request.params;
  response.json({
    categoryId,
    name: 'Product',
    imagen: 'imagen',
  });
});

router.get('/:categoryId/products/:productId', (request, response) => {
  const {categoryId, productId} = request.params;
  response.json({
    categoryId,
    productId,
  });
});

router.post('/', (request, response) => {
  const body = request.body;
  response.json({
    message: 'created',
    data: body,
  });
});

module.exports = router;
