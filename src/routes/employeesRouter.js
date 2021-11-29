const express = require('express');
const faker = require('faker');
const router = express.Router();
const EmployeeService = require('../services/employeeService');
const service = new EmployeeService(); //Al ser una clase debe ser instanciada para poder usarla

router.get('/', (req, res) => {
  const employees = service.findAll();
  res.json(employees);
});

router.get('/entrances', (req, res) => {
  const entrances = service.findEntrance();
  const nuevoArray = [];

  entrances.forEach(ele => {
    nuevoArray.push({id:ele.id, name:ele.name, entrance:ele.entrance});
  });
  res.json(nuevoArray);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const employee = service.findOne(id);

  if(!employee) {
    res.status(404).json({
      message: 'Empleado no encontrado'
    });
  } else {
    res.status(200).json(employee);
  }
});

router.get('/entrance/:id', (req, res) => {
  let employeesEntranceId = [];
  const { id } = req.params;

  if(id === '456') {
    res.status(404).json({
      message: 'Not Found'
    })
  } else {
    employeesEntranceId.push({
      id,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      entrance: faker.date.recent(),
    });
  }


  res.status(200).json(employeesEntranceId);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newEmployee = service.create(body);
  res.status(201).json(newEmployee);
})


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const employee = service.update(id, body);
  res.json(employee)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;
