const { UserRepository } = require("../repositories");
const { MediaService } = require("../services");

async function get(req, res, next) {
  try {
    const { search, username, format } = req.query;
    const response = await MediaService.getActive({ search, username, format });

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

async function getOne(req, res, next) {
  try {
    const { id } = req.params;
    const response = await MediaService.getOne({ id });

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }
    if (response.data) {
      console.log(response.data);
      return res.status(202).send({
        data: response.data,
        error: null,
      });
    }
  } catch (error) {
    next(error);
  }
}

async function save(req, res, next) {
  try {
    const { uid } = req.user;
    const { format, url, thumbnailUrl, cloudinaryId, tags } = req.body;

    const {
      data: { _id },
    } = await UserRepository.find({ firebaseId: uid });

    const response = await MediaService.save({
      format,
      url,
      thumbnailUrl,
      cloudinaryId,
      tags,
      user: _id,
    });

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
  get,
  getOne,
  save,
};
