const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'Please provide at least one URL.' });
  }

  try {
    const fetchPromises = urls.map(url => fetch(url));
    const responses = await Promise.all(fetchPromises);

    const numbers = [];

    for (const response of responses) {
      const data = await response.json();
      if (Array.isArray(data.numbers)) {
        numbers.push(...data.numbers);
      }
    }

    res.json({ numbers });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching and processing data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
