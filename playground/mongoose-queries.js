const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id='5be66f92f748e806ecff3566';
//
// if(!ObjectID.isValid(id)){
//   return console.log('Id is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo ',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('No Id found.');
//   }
//   console.log('Todo by Id', todo);
// }).catch( (e) => console.log(e));

var user_id = '5be1103f40e31b0e5855dc11';

if(!ObjectID.isValid(user_id)){
  return console.log('Invalid User_id');
}

User.findById(user_id).then( (user) => {
  if(!user){
      return console.log('No user found.');
  }
  console.log(JSON.stringify(user, undefined, 2));
},(e)=> {
    console.log(e)
} );
