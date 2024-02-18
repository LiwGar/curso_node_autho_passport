const express = require('express');

const ProductsService = require('./../services/product.service');

const router = express.Router();

const service = new ProductsService();


router.get('/', (request, response) => {
    const products = service.find();
    response.status(200).json(products);
  });

  router.get('/:id', (request, response) => {
    const { id } = request.params;
    const product = service.findOne(id);
    response.status(200).json(product);
  });

  router.post('/', (request, response) => {
    const body = request.body;
    response.status(201).json({
      message: 'created',
      data: body,
    });
  });

  router.patch('/:id', (request, response) => {
    const { id } = request.params;
    const body = request.body;
    response.status(200).json({
      id,
      message: 'updated',
      data: body,
    });
  });

  router.delete('/:id', (request, response) => {
    const { id } = request.params;
    response.status(200).json({
      id,
      message: 'deleted',
    });
  });

  module.exports = router;
