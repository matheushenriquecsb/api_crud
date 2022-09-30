const yup = require('yup');

const personSchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  lastname: yup.string().required('This field is required'),
  CPF: yup
    .number('This field is only accepted number')
    .required('This field is required'),
  age: yup
    .number('This field is only accepted number')
    .required('This field is required')
    .positive()
    .max(99),
  salary: yup
    .number('This field is only accepted number')
    .required('This field is required'),
  genre: yup.string().max(1),
  married: yup.boolean(),
  cellphone: yup
    .number('This field is only accepted number')
    .required('This field is required'),
  createdOn: yup.date().default(function () {
    return new Date()
  })
})

module.exports = personSchema;
