const Person = require('../models/Person');

const createPerson = async (req, res) => {
  const { name, lastname, CPF, age, salary, genre, married, cellphone } = req.body;
  
  const person = {
    name,
    lastname,
    CPF,
    age,
    salary,
    genre,
    married,
    cellphone
  }

  try {
    await Person.create(person);
    res.status(201).json({ message: 'Cadastro com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

const updatePerson = async (req, res) => {
  const id = req.params.id;

  const { name, lastname, CPF, age, salary, approved, genre, married, cellphone } = req.body;

  const person = {
    name,
    lastname,
    CPF,
    age,
    salary,
    approved,
    genre,
    married,
    cellphone 
  }

  try {
    const updatePerson = await Person.updateOne({ _id: id }, person);

    res.status(200).json({ message: 'Cliente atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

const getPerson = async (req, res) => {

  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

const getByIdPerson = async (req, res) => {
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });
    if (!person) {
      res.status(422).json({ message: 'User not found!' });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

const deletePerson = async (req, res) => {
  const id = req.params.id;
  const person = await Person.findOne({ _id: id });
  if (!person) {
    res.status(422).json({ message: 'User not found!' });
    return
  }

  try {
    await Person.deleteOne({ _id: id });
    res.status(200).json({ message: 'User removed sucessfully!' });
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
}

module.exports = {
  createPerson,
  updatePerson,
  getPerson,
  getByIdPerson,
  deletePerson
}
