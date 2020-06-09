const express = require('express');
const router = express.Router();
const messages = require('../controoler/messageConroller');

router.route('/').get(messages.getMessages).post(messages.deleteMessage);

module.exports = router;
