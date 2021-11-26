const express = require('express');
const app = express();
const port = 8080;

const routerApi = require('./src/routes/index');

routerApi(app);

// app.get('/', (req, res) => {
//   res.send('Oliver esta dormido');
// });

// app.get('/vehicles', (req, res) => {
//   res.json([
//     {
//       brand: 'Nissan',
//       model: 'Versa',
//       age: 2021,
//       category: 'Car',
//       color: 'Gray',
//     },
//     {
//       brand: 'Toyota',
//       model: 'Rav-4',
//       age: 2017,
//       category: 'SUV',
//       color: 'Red',
//     },
//     {
//       brand: 'Chevrolet',
//       model: 'Silverado',
//       age: 2019,
//       category: 'Pickup',
//       color: 'White',
//     },
//   ]);
// });

// app.get('/vehicles/:id', (req, res) => {
//   const { id } = req.params;

//   if (parseInt(id) === 1) {
//     res.json(
//       {
//         id,
//         brand: 'Nissan',
//         model: 'Versa',
//         age: 2021,
//         category: 'Car',
//         color: 'Gray',
//       }
//     )
//   } else {
//     res.send('No hay vehiculos para mostrar');
//   }
// })

// app.get('/brands/:brandId/model/:modelId', (req, res) => {
//   const { brandId, modelId } = req.params;
//   res.json(
//     {
//       brandId,
//       modelId,
//       brand: 'Nissan',
//       model: 'Versa',
//       age: 2021,
//       category: 'Car',
//       color: 'Gray',
//     });
// });


app.listen(port, () => {
  console.log('Jalando');
});
