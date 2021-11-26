//Configura rutas
// import router from "./employeesRouter";
const employeesRouter = require('./employeesRouter');

function routerApi(app) {
  app.use('/employees', employeesRouter);
}

module.exports = routerApi;
