// simple express server for testing that returns a json object

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
