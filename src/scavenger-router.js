const express = require('express');
const xss = require('xss');
//const path = require('path');
const ScavengerService = require('./scavenger-service');
const ScavengerRouter = express.Router();
//const jsonParser = express.json();

const serializeScavenger = scavenger => ({
  id: scavenger.id,
  question: xss(scavenger.question),
  answer: xss(scavenger.answer),
});

ScavengerRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    ScavengerService.getAllScavenger(knexInstance)
      .then(scavengers => {
        res.json(scavengers.map(serializeScavenger));
      })
      .catch(next);
  });

module.exports = ScavengerRouter;