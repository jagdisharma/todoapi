const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

//Insert into todo
app.post('/todos', (req, res)=> {
  var todo = new Todo({
    text : req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

//FindAll todos
app.get('/todos', (req, res) =>{
  Todo.find().then( (todos) => {
    //console.log('Inside response');
    res.send({todos});
  }, (e) => {
    //console.log('Error');
    res.status(400).send(e);
  });
});

//find todo by id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }, (e) => {
    res.status(400).send(e);
  });
});

//Delete todo by id
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }, (e) => {
    res.status(404).send();
  });
});

app.listen(port, () => {
  console.log(`Listening to port number ${port}...`);
});

module.exports = {app};
