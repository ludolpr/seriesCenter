// src/components/SignUp.js
import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2024/api/user/register",
        {
          nameUser,
          email,
          password,
        }
      );
      console.log(response.data);
      // Si l'inscription est réussie, réinitialise les champs et indique que le formulaire a été soumis avec succès
      setNameUser("");
      setEmail("");
      setPassword("");
      setFormSubmit(true);
    } catch (error) {
      setError("Erreur lors de l'inscription");
      setFormSubmit(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Inscription</h2>
        {error && <p className="text-red-500">{error}</p>}
        {formSubmit && !error && (
          <p className="text-green-500">Inscription réussie !</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Pseudonyme</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
