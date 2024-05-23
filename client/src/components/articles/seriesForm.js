import React, { useState } from "react";
import axios from "axios";

const SeriesForm = () => {
  const [nameSerie, setNameSerie] = useState("");
  const [serieDescription, setSerieDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("nameSerie", nameSerie);
      formData.append("serieDescription", serieDescription);
      formData.append("picture", picture);
      formData.append("idCategory", "1"); // Remplacez par l'ID de la catégorie

      await axios.post("http://localhost:2024/api/series", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsLoading(false);
      alert("Série publiée avec succès !");
      setNameSerie("");
      setSerieDescription("");
      setPicture("");
    } catch (error) {
      console.error("Erreur lors de la publication de la série :", error);
      alert("Erreur lors de la publication de la série.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Publier un article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nom de la série :</label>
          <input
            type="text"
            value={nameSerie}
            onChange={(e) => setNameSerie(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Description de la série :
          </label>
          <textarea
            value={serieDescription}
            onChange={(e) => setSerieDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            lien de l'image de la série :
          </label>
          <input
            type="text"
            value={picture}
            onChange={(e) => setNameSerie(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white py-2 rounded-md ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Publication en cours..." : "Publier"}
        </button>
      </form>
    </div>
  );
};

export default SeriesForm;
