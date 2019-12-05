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
    availableInRegions: [
      'PL-LB',
      'PL-ZP',
      'PL-WP',
      'PL-PM',
      'PL-KP',
      'PL-OP',
      'PL-WN',
      'PL-PD',
      'PL-MZ',
      'PL-LD',
      'PL-SL',
      'PL-MA',
      'PL-SK',
      'PL-PK',
      'PL-LU'
    ],
    description: 'Najnowsze słuchawki'
  },
  {
    id: 2,
    itemName: 'Kurs języka angielskiego',
    imageUrl: 'http://lorempixel.com/400/200/business/3/',
    availableInRegions: [
      'PL-LB',
      'PL-ZP',
      'PL-WP',
      'PL-PM',
      'PL-KP',
      'PL-OP',
      'PL-WN',
      'PL-PD',
      'PL-MZ',
      'PL-LD',
      'PL-SL',
      'PL-MA',
      'PL-SK',
      'PL-PK',
      'PL-LU'
    ],
    description: 'Kurs językowy w Empik School'
  },
  {
    id: 3,
    itemName: 'Ipad 6',
    imageUrl: 'http://lorempixel.com/400/200/technics/1/',
    availableInRegions: ['PL-PM', 'PL-KP', 'PL-OP', 'PL-WN', 'PL-PD', 'PL-MZ'],
    description: 'Najnowszy Ipad 6'
  },
  {
    id: 4,
    itemName: 'Gramofon',
    imageUrl: 'http://lorempixel.com/400/200/technics/2/',
    availableInRegions: [
      'PL-PD',
      'PL-MZ',
      'PL-LD',
      'PL-SL',
      'PL-MA',
      'PL-SK',
      'PL-PK',
      'PL-LU'
    ],
    description: 'Gramofony w stylu vintage'
  },
  {
    id: 5,
    itemName: 'Odtwarzacz MP3',
    imageUrl: 'http://lorempixel.com/400/200/technics/10/',
    availableInRegions: [
      'PL-LB',
      'PL-ZP',
      'PL-WP',
      'PL-PM',
      'PL-KP',
      'PL-OP',
      'PL-WN'
    ],
    description: 'Gramofony w stylu vintage'
  }
];

app.get('/api/merchandise', (req, res) => {
  res.send(merchandise);
});

app.listen(port, () => console.log(`Server litening on port ${port}`));
