const Message = require('../model/messageModel');

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({
      $or: [{ sender: req.params.id }, { reciver: req.params.id }],
    }).sort('-date');

    res.status(200).json({
      status: 'success',
      messages,
    });
  } catch (err) {
    next(err);
  }
};

exports.createMessage = async (req, res, next) => {
  try {
    const message = await Message.create(req.body);

    res.status(201).json({
      status: 'success',
      message,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteMessage = async (req, res, next) => {
  try {
    await Message.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    next(err);
  }
};
