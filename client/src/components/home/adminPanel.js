import React from "react";

const Admin = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Page d'Administration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Gestion des Utilisateurs</h3>
            <p className="text-gray-700">
              Ici, vous pouvez gérer les utilisateurs.
            </p>
          </div>
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Gestion des Séries</h3>
            <p className="text-gray-700">
              Ajouter, modifier ou supprimer des séries.
            </p>
          </div>
          {/* <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Statistiques</h3>
            <p className="text-gray-700">
              Statistiques de l'application.
            </p>
          </div> */}
          {/* <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold mb-2">Paramètres</h3>
            <p className="text-gray-700">
              Paramètres de l'application.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
