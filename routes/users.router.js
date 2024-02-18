const express = require('express');

const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (request, response) => {
  const { limit, offset } = request.query;
  if(limit && offset) {
    response.json({
      limit,
      offset
    });
  }else{
    response.send('There are no parameters');
  };
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


module.exports = router;
