const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function addNumbers(num1, num2) {
  return num1 + num2;
}

app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  const result = addNumbers(num1, num2);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
