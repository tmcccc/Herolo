const express = require('express');
const router = express.Router();
const messages = require('../controller/messageConroller');

router.post('/', messages.createMessage);

router.route('/:id').get(messages.getMessages).delete(messages.deleteMessage);

module.exports = router;
