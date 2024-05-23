import React, { useState, useEffect } from "react";
import axios from "axios";

const SeriesList = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchSeries();
  }, []);

  const fetchSeries = async () => {
    try {
      const response = await axios.get("/api/post/getAllSeries");
      setSeries(response.data);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Liste des séries</h1>
      <div className="grid grid-cols-3 gap-4">
        {series.map((serie) => (
          <div key={serie.idSerie} className="bg-gray-100 p-4 rounded">
            <img
              src={serie.picture}
              alt={serie.nameSerie}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{serie.nameSerie}</h2>
            <p className="text-gray-700">{serie.serieDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesList;
