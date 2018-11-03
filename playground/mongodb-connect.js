//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name: "Ravi Kant",
    age: 23,
    location: "Chandigarh"
  }, (err, res) => {
    if(err){
      return console.log('Unable to add user',err);
    }

    //console.log(JSON.stringify(res.ops,undefined,2));
    console.log(res.ops);
  });

  client.close();
});
