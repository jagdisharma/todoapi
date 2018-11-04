const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect with database', err);
  }

  console.log('Connected with database');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bdd76fbdeff340af048d201')
  // },{
  //   $set:{
  //     completed: true
  //   }
  // },{
  //   returnOriginal : false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bdd78bb29a3620ad45767b0')
  },{
    $set:{
      name:'Jagdish Sharma'
    },
    $inc:{
      age: 2
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
});
