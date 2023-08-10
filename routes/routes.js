const express = require('express');
const personController = require('../controller/person-controller');

const router = express.Router();
router.post('/person', personController.createPerson);
router.get('/person', personController.readPerson);

module.exports = router;