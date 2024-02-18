const express = require('express');

const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (request, response) => {
  const users = [];
  const { size } = request.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.person.fullName(),
      role: faker.person.bio(),
      job: faker.person.jobTitle(),
    });
  }
    response.json(users);
});

router.get('/:userId', (request, response) => {
  const {userId} = request.params;
  response.json({
    userId,
    name: faker.person.fullName(),
    role: faker.person.bio(),
    job: faker.person.jobTitle(),
  });
});

router.post('/', (request, response) => {
  const body = request.body;
  response.json({
    message: 'created',
    data: body,
  });
});

router.patch('/:userId', (request, response) => {
  const { userId } = request.params;
  const body = request.body;
  response.json({
    userId,
    message: 'updated',
    data: body,
  });
});

router.delete('/:userId', (request, response) => {
  const { userId } = request.params;
  response.json({
    userId,
    message: 'deleted',
  });
});

module.exports = router;
