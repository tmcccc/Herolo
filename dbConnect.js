const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const db = process.env.DATABASE.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD
    );

    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
