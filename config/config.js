// require("dotenv").config();
// const mysql = require("mysql2");

// // Fonction pour se connecter à la base de données
// const connectDB = async () => {
//   try {
//     const connection = await mysql.createConnection({
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//       user: process.env.DB_USER,
//       // password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//     });
//     return connection;
//   } catch (err) {
//     console.error("Error connecting to MySQL:", err);
//   }
// };

// connectDB().then((connection) => {
//   console.log("Connecté à la base de données MySQL ");
// });

// module.exports.connectDB = connectDB;
