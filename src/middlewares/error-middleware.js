const { config } = require("../config");

function errorMiddleware(err, req, res, next) {
  if (req.headersSent) {
    return next(err);
  }

  console.log(err);

  res.status(500).send({
    data: null,
    error: "Something went wrong",
  });
}

module.exports = {
  errorMiddleware: errorMiddleware,
};
