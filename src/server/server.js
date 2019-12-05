const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 5000;

let merchandise = [
  {
    id: 1,
    itemName: 'Słuchawki',
    imageUrl: 'http://lorempixel.com/400/200/technics/5/',
    district: 'Mazowieckie',
    description: 'Najnowsze słuchawki'
  },
  {
    id: 2,
    itemName: 'Kurs języka angielskiego',
    imageUrl: 'http://lorempixel.com/400/200/business/3/',
    district: 'Wielkopolskie',
    description: 'Kurs językowy w Empik School'
  },
  {
    id: 3,
    itemName: 'Ipad 6',
    imageUrl: 'http://lorempixel.com/400/200/technics/1/',
    district: 'Warmia',
    description: 'Najnowszy Ipad 6'
  },
  {
    id: 4,
    itemName: 'Gramofon',
    imageUrl: 'http://lorempixel.com/400/200/technics/2/',
    district: 'Warmia',
    description: 'Gramofony w stylu vintage'
  },
  {
    id: 4,
    itemName: 'Odtwarzacz MP3',
    imageUrl: 'http://lorempixel.com/400/200/technics/10/',
    district: 'Lubelskie',
    description: 'Gramofony w stylu vintage'
  }
];

app.get('/api/merchandise', (req, res) => {
  res.send(merchandise);
});

app.listen(port, () => console.log(`Server litening on port ${port}`));
