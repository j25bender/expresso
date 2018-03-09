const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('express intro running on localhost:3000');
});

const urlLogger = (request, response, next) => {
  console.log('RequestURL: ', request.url);
  next();
}

const timeLogger = (request, response, next) => {
  console.log('TimeLogger: ', new Date(Date.now()).toDateString());
  next();
}

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('Hello world');
});

app.get('/json', (request, response) => {
  response.status(200).json({ name: 'Bender' });
});

app.get('/sunsets', (request, response) => {
  response.sendFile('public/sunsets/sun1.jpg', {root: __dirname})        
})

app.get('/json-file', (request, response) => {
  response.sendFile('public/json-file.json', {root: __dirname})
})
