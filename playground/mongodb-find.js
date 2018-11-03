//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos are: ${count}`);
  //
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Vaishali Sharma'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //client.close();
});
