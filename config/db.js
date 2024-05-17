const Sequelize = require("sequelize");

// premier: "nom database", deuxieme: "nom userDB", troisieme: "mot de passe", dialect = "typedeSQL", host
module.exports = new Sequelize("seriescenter", "root", "", {
  dialect: "mysql",
  host: "localhost",
});
