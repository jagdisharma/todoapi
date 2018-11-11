var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// let db = {
//   mlab: 'mongodb://jagdish:adobemuse12@ds159273.mlab.com:59273/first_mongodb',
//   localhost: 'mongodb://localhost:27017/TodoApp',
// };
//mongoose.connect(process.env.PORT ? db.mlab : db.localhost);
// var mongouri = process.env.MONGODB_URI ;
// console.log('mongouri------------------------------------------------>',mongouri);
mongoose.connect(process.env.MONGODB_URI );

module.export = {
  mongoose
};
