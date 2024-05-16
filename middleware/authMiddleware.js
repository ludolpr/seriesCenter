const jwt = require("jsonwebtoken")

module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          // si deco l'erreur vien du maxAge à controller "
          res.cookie("jwt", "", { maxAge: 1 });
          next();
        } else {
          // console.log("decoded token :" + decodedToken.id);
          let user = await userModel.findById(decodedToken.id);
          res.locals.user = user;
          // console.log("user:", res.locals.user);
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

  module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
        if (err) {
          console.log(err);
        } else {
          // console.log("Id dans la console: " + decodedToken.id);
          next();
        }
      });
    } else {
      console.log("No token");
    }
  };