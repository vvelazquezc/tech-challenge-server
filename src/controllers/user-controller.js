const { UserRepository } = require("../repositories");

async function signUp(req, res, next) {
  const { uid, email } = req.user;
  const { username } = req.body;

  try {
    const response = await UserRepository.findUser({ email });

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: response.data,
        error: null,
      });
    }

    const { data, error } = await UserRepository.create({
      firebaseId: uid,
      username,
      email,
    });

    if (error) {
      return res.status(400).send({
        data: null,
        error: error,
      });
    }
    res.status(201).send({
      data: {
        _id: data._id,
        firebaseId: data.firebaseId,
        username: data.username,
        email: data.email,
      },
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

async function signOut(req, res) {
  req.signOut();

  res.status(200).send({
    data: "OK",
    error: null,
  });
}

async function getUser(req, res, next) {
  const { userId } = req.params;

  try {
    const response = await UserRepository.findUser({ _id: userId });
    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(202).send({
        data: response.data,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp,
  signOut,
  getUser,
};
