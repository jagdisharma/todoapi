var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<jagdisharma>:<Good@1234>@ds159273.mlab.com:59273/first_mongodb' || 'mongodb://localhost:27017/TodoApp');

module.export = {
  mongoose
};
