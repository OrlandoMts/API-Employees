//Configura rutas
const express = require('express');
const employeesRouter = require('./employeesRouter');
const departmentsRouter = require('./departmentsRouter');

function routerApi(app) {
  const routerMaster = express.Router();
  app.use('/api/v1', routerMaster); // Me permite tener un mejor control en las versiones futuras
  // Asi evito que choquen si las rutas tienen un cambio importante

  routerMaster.use('/employees', employeesRouter);
  routerMaster.use('/employees/department', departmentsRouter)
}

module.exports = routerApi;
