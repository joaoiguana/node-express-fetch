import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to fetch data
app.get('/api/data', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  res.json(data); // Send data as JSON
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
