const express = require('express');

const UserService = require('./../services/user.service');

const validatorHandler = require('./../middlewares/validator.handler');

const { createUserSchema, getUserSchema, updateUserSchema } = require('./../schemas/user.schema');

const router = express.Router();

const service = new UserService();

router.get('/', async (request, response, next) => {
  try {
    const categories = await service.find();
    response.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const category = await service.findOne(id);
      response.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newCategory = await service.create(body);
      response.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;
      const category = await service.update(id, body);
      response.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      await service.delete(id);
      response.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
