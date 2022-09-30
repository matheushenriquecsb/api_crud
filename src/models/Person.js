const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
  name: String,
  lastname: String,
  CPF: Number,
  age: Number,
  salary: Number,
  genre: String,
  married: Boolean,
  cellphone: Number
})

module.exports = Person;
