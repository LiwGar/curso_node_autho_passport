const express = require('express');

const ProductsService = require('./../services/product.service');

const router = express.Router();

const service = new ProductsService();


router.get('/', async (request, response) => {
    try {
      const products = await service.find();
      response.status(200).json(products);
    } catch (error) {
      next(error);
    }
  });

  router.get('/:id', async (request, response, next) => {
    try {
      const { id } = request.params;
      const product = await service.findOne(id);
      response.status(200).json(product);
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async (request, response, next) => {
    try {
      const body = request.body;
      const newProduct = await service.create(body);
      response.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  });

  router.patch('/:id', async (request, response) => {
    try {
      const { id } = request.params;
      const body = request.body;
      const product = await service.update(id, body);
      response.status(200).json(product);
    }catch (error){
      next(error);
    }
  });

  router.delete('/:id', async (request, response) => {
   try {
    const { id } = request.params;
    const rta = await service.delete(id);
    response.status(200).json(rta);
   } catch (error) {
    next(error);
   }
  });

  module.exports = router;
