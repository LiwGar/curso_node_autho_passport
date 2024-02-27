const express = require('express');

const OrderService = require('./../services/order.service');

const validatorHandler = require('./../middlewares/validator.handler');

const { createOrderSchema, getOrderSchema, addItemSchema } = require('./../schemas/order.schema');

const router = express.Router();

const service = new OrderService();

router.get('/',  async (request, response, next) => {
  try {
    response.json(await service.find());
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const order = await service.findOne(id);
      response.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newOrder = await service.create(body);
      response.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newItem = await service.addItem(body);
      response.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);

// router.patch('/:id',
//   validatorHandler(getOrderSchema, 'params'),
//   validatorHandler(updateOrderSchema, 'body'),
//   async (request, response, next) => {
//     try {
//       const { id } = request.params;
//       const body = request.body;
//       response.status(201).json(await service.update(id, body));
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.delete('/:id',
  validatorHandler(getOrderSchema, 'params'),
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