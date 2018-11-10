const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.findOneAndRemove({_id: '5be6e297818ddf0d3048e987'}).then((todo) => {
//   console.log(todo);
// })

Todo.findByIdAndRemove('5be6e297818ddf0d3048e987').then((todo) => {
  console.log(todo);
});
