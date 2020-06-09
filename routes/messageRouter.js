const express = require('express');
const router = express.Router();
const messages = require('../controller/messageConroller');

router.route('/').get(messages.getMessages).post(messages.createMessage);

module.exports = router;
