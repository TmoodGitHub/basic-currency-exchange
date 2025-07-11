const axios = require('axios');
const { Conversion } = require('../models');

const convertCurrency = async (req, res) => {
  const { from, to, amount } = req.body;

  try {
    const { data } = await axios.get(
      `https://open.er-api.com/v6/latest/${from}`
    );
    const rate = data.rates[to];
    const converted = amount * rate;

    const saved = await Conversion.create({
      from_currency: from,
      to_currency: to,
      amount,
      converted_amount: converted,
      rate,
    });

    res.json({ result: converted, rate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Conversion failed.' });
  }
};

const getHistory = async (req, res) => {
  const page = parseInt(req.query.page || '1');
  const limit = 25;
  const offset = (page - 1) * limit;

  const { count, rows } = await Conversion.findAndCountAll({
    order: [['createdAt', 'DESC']],
    offset,
    limit,
  });

  res.json({
    total: count,
    pages: Math.ceil(count / limit),
    data: rows,
  });
};

const getSupportedCurrencies = async (req, res) => {
  try {
    const { data } = await axios.get('https://open.er-api.com/v6/latest/USD');
    res.json(Object.keys(data.rates));
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch currencies' });
  }
};

module.exports = { convertCurrency, getHistory, getSupportedCurrencies };
