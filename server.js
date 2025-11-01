const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const colors = [
  { name: 'Crimson', hex: '#DC143C' },
  { name: 'Tomato', hex: '#FF6347' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'MediumSeaGreen', hex: '#3CB371' },
  { name: 'DodgerBlue', hex: '#1E90FF' },
  { name: 'SlateBlue', hex: '#6A5ACD' },
  { name: 'Orchid', hex: '#DA70D6' },
  { name: 'LightSalmon', hex: '#FFA07A' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Black', hex: '#000000' }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/colors', (req, res) => {
  res.json(colors);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
