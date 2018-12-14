const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5c13cc0edc80518c56ee9d36';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');;
  }

  console.log('User by Id:', JSON.stringify(user, undefined, 2));
}).catch(e => console.log(e));

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//
//   console.log('Todo by ID:', todo);
// }).catch(e => console.log(e));
