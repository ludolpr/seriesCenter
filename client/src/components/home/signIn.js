// src/components/SignIn.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../userContext";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log("react api back: " + "http://localhost:2024/");
      const response = await axios.post(
        "http://localhost:2024/api/user/login",

        {
          email,
          password,
        }
      );
      const token = response.data.token;
      // Sauvegarder le token dans le localStorage ou gérer la connexion utilisateur
      localStorage.setItem("token", token);
      console.log("Connexion réussie");

      // Mise à jour de l'utilisateur dans le contexte utilisateur
      const user = response.data.user;
      setUser(user);
      navigate("/");
    } catch (error) {
      setError("Email ou mot de passe incorrect");
      setFormSubmit(true);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Connexion</h2>
        {error && <p className="text-red-500">{error}</p>}
        {formSubmit && !error && (
          <p className="text-green-500">Connexion réussie !</p>
        )}
        <form onSubmit={handleSubmit}>
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
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
