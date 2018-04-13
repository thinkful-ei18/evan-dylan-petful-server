'use strict';

const express = require('express');
const router = express.Router();
const store = require('../store');

router.get('/cat', (req, res, next) => {
  res.json(store.getCat());
});

router.get('/dog', (req, res, next) => {
  res.json(store.getDog());
});

router.delete('/cat', (req, res, next) => {
  store.deleteCat();
  res.status(204).end();
});

router.delete('/dog', (req, res, next) => {
  store.deleteDog();
  res.status(204).end();
});

module.exports = router;