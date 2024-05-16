require("dotenv").config();
const mysql = require("mysql");

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Fonction pour se connecter à la base de données
const connectDB = async () => {
  try {
    await connection.connect();
    console.log("Connected to MySQL!");
  } catch (err) {
    console.error("Error connecting to MySQL:", err);
  }
};

// Fonction pour se déconnecter de la base de données
const disconnectDB = async () => {
  try {
    await connection.end();
    console.log("Disconnected from MySQL!");
  } catch (err) {
    console.error("Error disconnecting from MySQL:", err);
  }
};

// Exporter les fonctions si nécessaire
module.exports.connectDB = connectDB;
module.exports.disconnectDB = disconnectDB;