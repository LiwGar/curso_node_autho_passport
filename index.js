const express = require('express');

const routerApi = require('./routes');

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello my server in express');
});

app.get('/nueva-ruta', (request, response) => {
  response.send('Hello, I am a new route');
});

app.listen(port, () => {
  console.log(`La API está escuchando en el puerto ${port}`);
});

routerApi(app);




