const express = require('express');

const CustomerService = require('./../services/customer.service');
const validationHandler = require('./../middlewares/validator.handler');
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('./../schemas/customer.schema');

const router = express.Router();
const service = new CustomerService();

router.get('/',  async (request, response, next) => {
  try {
    response.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validationHandler(createCustomerSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      response.status(201).json(await service.create(body));
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validationHandler(getCustomerSchema, 'params'),
  validationHandler(updateCustomerSchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;
      response.status(201).json(await service.update(id, body));
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      response.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;