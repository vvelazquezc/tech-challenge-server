const { getAuthToken, verifyAuthToken } = require('../services/auth');

const { AuthService } = require('../services');

async function authMiddleware(req, res, next) {
  try {
    const bearerToken = await AuthService.getAuthToken(req.headers);
    const userClaims = await AuthService.verifyAuthToken(bearerToken);

    AuthService.login(req, userClaims);

    next();
  } catch (error) {
    console.error(error);

    res.status(401).send({
      data: null,
      error: 'Unauthorized',
    });
  }
}

module.exports = {
  authMiddleware: authMiddleware,
};
