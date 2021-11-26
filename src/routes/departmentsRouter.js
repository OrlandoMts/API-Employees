const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Departamentos');
});

router.get('/info', (req, res) => {
  let departments = [];

  for (let i = 0; i < 4; i++) {
    departments.push({
      name: faker.name.jobArea(),
      countEmployees: faker.datatype.number(),
    })
  }
  res.json(departments);
});

router.post('/', (req, res) => {
  const body = req.body;

  res.json({
    message: 'sucessful',
    data: body,
  });
})

module.exports = router;
