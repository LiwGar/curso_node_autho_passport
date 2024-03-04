const express = require('express');

const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const { checkApiKey } = require('./middlewares/auth.handler');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
//
const whiteList = [
  'http://localhost:3000', 
  'http://localhost:5500', 
  'https://vercel.com/liwgars', 
  'https://vercel.com/liwgars-projects/', 
  'https://dashboard.render.com/', 
  'https://dashboard.render.com/web/'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.get('/new-route', checkApiKey, (request, response) => {
  response.send('I am a new route');
});

app.get('/api', (request, response) => {
  const messageUno = 'Welcome to my first API whit Node.js - Express.js';
  const messageDos = 'Add to the end of the URL: /v1/products, /v1/categories, /v1/users, /v1/customers /v1/[id]';
  response.send(`${messageUno}<br>${messageDos}`);
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The API is listening on the port ${port}`);
});

module.exports = app;



