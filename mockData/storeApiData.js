const express = require('express');
const serviceHandler = require('./defineApiData');
var router = express.Router();

router.get('/get',serviceHandler.getHandler)

router.post('/post',serviceHandler.postHandler)

router.get('/delete',serviceHandler.deleteHandler)

router.put('/update',serviceHandler.updateHandler)

module.exports = router;