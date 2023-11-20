const express = require('express');
const router = express.Router();
const { getRoutinesWithoutActivities, getAllActivities } = require('../db');
const client = require('../db/client');
// const { requireUser, requiredNotSent } = require('./utils')

// router.get('/', async (req, res, next) => {
//   try {
//     const routines = await getRoutinesWithoutActivities();
//     const activities = await getAllActivities();
//     combined = routines + activities;
//     const result = await combined;
//     res.send(result);
// } catch (error) {
//     next(error);
// }
// })


// module.exports = router;