const express = require('express');

const {
    getAllPlanets,
} = require('./planets.controller');

const planetsRouter = express.Router();

// Define a route handler for the root route ("/")
planetsRouter.get('/planets', (req, res) => {
    res.send('Hello, planets!');
});

// Define other route handlers for planets-related routes
planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;