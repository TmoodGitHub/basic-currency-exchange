const express = require('express');
const router = express.Router();
const {
  convertCurrency,
  getHistory,
  getSupportedCurrencies,
} = require('../controllers/conversionController');

router.post('/convert', convertCurrency);
router.get('/history', getHistory);
router.get('/currencies', getSupportedCurrencies);

module.exports = router;
