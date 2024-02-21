const express = require('express');

const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
//
const whiteList = [ 'http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5500', 'https://vercel.com/liwgars', 'https://vercel.com/liwgars-projects/'];

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

app.get('/api', (request, response) => {
  response.send('Welcome to my first API whit Node.js - Express.js' + 'add to url: /api/v1/products, /api/v1/categories, /api/v1/users, /api/v1/[id]');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The API is listening on the port ${port}`);
});

module.exports = app;



