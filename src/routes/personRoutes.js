const router = require('express').Router();
const Person = require('../models/Person');
const validation = require('../middlewares/validationMiddlewares');
const personSchema = require('../validations/personValidation');
const personController = require('../controllers/personController');

//Rotas

router.post('/', validation(personSchema), personController.createPerson);

router.patch('/:id', personController.updatePerson);

router.get('/', personController.getPerson);

router.get('/:id', personController.getByIdPerson);

router.delete('/:id', personController.deletePerson);

module.exports = router;
