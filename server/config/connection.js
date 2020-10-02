const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://missadaska19:Dimebox13206!@reduxstore.reol2.mongodb.net/ReduxStore?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
