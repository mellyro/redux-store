const mongoose = require('mongoose');

mongodb+srv://merrychristmas:merrychristmas@reduxshop.reol2.mongodb.net/reduxshop?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
