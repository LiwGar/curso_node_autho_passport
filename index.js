const express = require('express');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello my server in express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`La API está escuchando en el puerto ${port}`);
});

routerApi(app);




