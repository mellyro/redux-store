const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://merrychristmas:merrychristmas@reduxshop.reol2.mongodb.net/reduxshop?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
