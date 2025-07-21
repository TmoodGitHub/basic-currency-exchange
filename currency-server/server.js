const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('OK');
});

app.use(cors());
app.use(express.json());

const conversionRoutes = require('./routes/conversion');
app.use('/api', conversionRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
