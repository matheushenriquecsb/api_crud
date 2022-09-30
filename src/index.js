const express = require('express');
const personRoutes = require('./routes/personRoutes');
require('dotenv').config();
require('./database/index');

const api = express();

api.use(express.json());
api.use('/person', personRoutes);

api.listen(process.env.PORT, () => {
  console.log('Server is running');
})

module.exports = personRoutes;
