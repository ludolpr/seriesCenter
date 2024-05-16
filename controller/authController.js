require("dotenv").config();
dotenv.config();
const bcrypt = require("bcrypt");
const bcrypt_salt = 10;
const jwt = require("jsonwebtoken");
import mysql from "mysql";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

// Utilisez la configuration de la base de données depuis le fichier config.js
import config from "./config/config.js";

// Initialisez la connexion à la base de données MySQL en utilisant la configuration
const connexion = mysql.createConnection(config);

connexion.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL");
});
  
  
  // Inscription
  module.exports.signIn = async (req, res) => {
    console.log("register", req.body);
    const { email, password } = req.body;
    try {
      // Remplacez cette fonction login par votre propre fonction qui récupère l'utilisateur de la base de données MySQL
      const user = await getUserByEmail(email);
  
      // Si l'utilisateur existe, vérifiez le mot de passe
      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = createToken(user.id); // Assurez-vous d'avoir une fonction createToken appropriée
          console.log("token", token, email, password);
          res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 }); // Réglage du délai de validité du cookie JWT (1 heure ici)
          res.status(200).json({ user: user.id });
        } else {
          throw new Error('Mot de passe incorrect');
        }
      } else {
        throw new Error('Utilisateur non trouvé');
      }
    } catch (err) {
      const errors = signInErrors(err);
      res.status(200).json({ errors });
    }
  };
  
  // Fonction pour récupérer un utilisateur par e-mail depuis la base de données MySQL
  function getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE email = ?";
      connection.query(query, [email], (err, results) => {
        if (err) reject(err);
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      });
    });
  }
  
  // Fonction pour gérer les erreurs de connexion
  function signInErrors(err) {
    // Vous pouvez personnaliser ce gestionnaire d'erreurs en fonction de vos besoins
    console.error(err);
    let errors = [{ message: "Erreur lors de la connexion. Veuillez réessayer." }];
    return errors;
  }
  


// inscription

//     module.exports.signIn = async (req, res) => {
//     console.log("register", req.body);
//     const { email, password } = req.body;
//     try {
//       const user = await userModel.login(email, password);
//       const token = createToken(user._id);
//       console.log("token", token, email, password);
//       res.cookie("jwt", token, { httpOnly: true, maxAge });
//       res.status(200).json({ user: user._id });
//     } catch (err) {
//       const errors = signInErrors(err);
//       res.status(200).json({ errors });
//   }
// };


  
// connexion

 module.exports.signUp = async (req, res) => {
  console.log("login:", req.body);
  const { name, email, password } = req.body;

  try {
  const user = await userModel.create({ name, email, password });
  res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
  }
};
  