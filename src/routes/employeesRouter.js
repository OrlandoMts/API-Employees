const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  let employees = [];
  const { limit } = req.query;
  // const size = limit || 10;

  for (let i = 0; i < (limit || 3); i++) {
    employees.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      gender: faker.name.gender(),
      phone: faker.phone.phoneNumber(),
      entrance: faker.date.recent(),
      photo: faker.image.people(),
    });
  }

  res.json({
    limit: limit || 'No limit defined',
    data: employees,
  })
});

router.get('/entrance', (req, res) => {
  let employeesEntrance = [];

  for (let i = 0; i < 2; i++) {
    employeesEntrance.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      entrance: faker.date.recent(),
    });
  }

  res.json(employeesEntrance);
})

router.get('/entrance/:id', (req, res) => {
  let employeesEntranceId = [];
  const { id } = req.params;

  employeesEntranceId.push({
    id,
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    entrance: faker.date.recent(),
  });

  res.json(employeesEntranceId);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'update phone',
    data: body,
    id,
  })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    message: 'delete employee',
    id,
  });
});

module.exports = router;
