const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { mediaController } = require("../controllers");

const mediaRouter = Router();

mediaRouter.get("/", mediaController.get);
mediaRouter.get("/:id", mediaController.getOne);
mediaRouter.post("/", authMiddleware, mediaController.save);

module.exports = {
  mediaRouter,
};
