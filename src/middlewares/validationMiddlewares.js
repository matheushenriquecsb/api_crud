const validation = schema => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body);
    next()
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = validation;
