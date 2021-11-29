const faker = require('faker');

class EmployeeService {
  //En los servicios se define la logica y todas las interacciones a nivel transaccional,
  //que tendran los datos.

  constructor() {
    this.employees = [];
    this.generate(5);
  }

  generate(limit) {

  for (let i = 0; i < (limit || 3); i++) {
    this.employees.push({
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      gender: faker.name.gender(),
      phone: faker.phone.phoneNumber(),
      entrance: faker.date.recent(),
      photo: faker.image.people(),
    });
  }
}

  create(data) {
    const newEmployee = {
      id: faker.datatype.uuid(),
      ...data, //concatena todo lo que viene de data
    }

    this.employees.push(newEmployee);
    return newEmployee;
  }

  findAll(){
    return this.employees;
  }

  findOne(id){
    return this.employees.find(item => item.id === id);
  }

  findEntrance(){
    return this.employees;
  }

  update(id, changes) {
    const index = this.employees.findIndex(item => item.id === id);

    if(index === -1) {
      throw new Error('Empleado no encontrado');
    } else {
      const employee = this.employees[index];
      this.employees[index] = {
        ...employee, // de esta manera persisto los datos
        ...changes
      }
      return this.employees[index];
    }
  }

  delete(id) {
    const index = this.employees.findIndex(item => item.id === id);

    if(index === -1) {
      throw new Error('Empleado no encontrado');
    }

    this.employees.splice(index, 1);
    return { message: "Empleado eliminado", id }
  }

  }

module.exports = EmployeeService;
