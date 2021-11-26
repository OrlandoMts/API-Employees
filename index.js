const express = require('express');
const faker = require('faker');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Oliver esta dormido');
});

app.get('/vehicles', (req, res) => {
  res.json([
    {
      brand: 'Nissan',
      model: 'Versa',
      age: 2021,
      category: 'Car',
      color: 'Gray',
    },
    {
      brand: 'Toyota',
      model: 'Rav-4',
      age: 2017,
      category: 'SUV',
      color: 'Red',
    },
    {
      brand: 'Chevrolet',
      model: 'Silverado',
      age: 2019,
      category: 'Pickup',
      color: 'White',
    },
  ]);
});

app.get('/vehicles/:id', (req, res) => {
  const { id } = req.params;

  if (parseInt(id) === 1) {
    res.json(
      {
        id,
        brand: 'Nissan',
        model: 'Versa',
        age: 2021,
        category: 'Car',
        color: 'Gray',
      }
    )
  } else {
    res.send('No hay vehiculos para mostrar');
  }
})

app.get('/brands/:brandId/model/:modelId', (req, res) => {
  const { brandId, modelId } = req.params;
  res.json(
    {
      brandId,
      modelId,
      brand: 'Nissan',
      model: 'Versa',
      age: 2021,
      category: 'Car',
      color: 'Gray',
    });
});

app.get('/products', (req, res) => {
  let products = [];
  const { limit } = req.query;
  // const size = limit || 10;

  for (let i = 0; i < (limit || 3); i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10), //Numero en base 10
      image: faker.image.imageUrl(),
    });
  }

  res.json({
    limit: limit || 'No limit defined',
    data: products,
  })
});

app.listen(port, () => {
  console.log('Jalando');
});
