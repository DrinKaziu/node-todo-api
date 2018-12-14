let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// let newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Todo saved', doc);
// }, (err) => {
//   console.log('Unable to save todo');
// });

let newTodo = new Todo({
  text: 'Walk Nacho',
  completed: false
});

newTodo.save().then((doc) => {
  console.log('Todo saved:');
  console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log('Unable to save todo');
});
