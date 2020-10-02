const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://missadaska19:merrychristmas@reduxstore.reol2.mongodb.net/reduxstore?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
