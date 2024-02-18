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

router.get('/:categoryName', (request, response) => {
  const { categoryName } = request.params;
  response.status(200).json({
    categoryName,
  });
});

router.get('/:categoryId/products/:productId', (request, response) => {
  const { categoryId, productId } = request.params;
  response.status(200).json({
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

router.patch('/:categoryName', (request, response) => {
  const { categoryName } = request.params;
  const body = request.body;
  response.status(200).json({
    categoryName,
    message: 'updated',
    data: body,
  });
});

router.delete('/:categoryName', (request, response) => {
  const { categoryName } = request.params;
  response.status(200).json({
    categoryName,
    message: 'deleted',
  });
});


module.exports = router;
