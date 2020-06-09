const app = require('./app');

const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');

const server = async () => {
  //
  try {
    dotenv.config({ path: './confing.env' });
    await dbConnect();

    app.listen(process.env.PORT || 8080, () => console.log('start listnig'));
  } catch (err) {
    console.log(err);
  }
};

server();
