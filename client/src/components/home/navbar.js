import React, { useContext } from "react";
import { UserContext } from "../userContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold text-xl">
          <a href="/">Series-Center</a>
        </div>

        <div className="flex space-x-4">
          {user ? (
            <>
              {/* <span className="text-white">Bonjour, {user.userName}</span> */}
              <Link to="/series" className="text-white">
                Séries
              </Link>
              <Link to="/profil" className="text-white">
                Déposer un article
              </Link>
              <Link to="/admin" className="text-white">
                Admin
              </Link>
              <Link to="/logout" className="text-white">
                Deconnexion
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Connexion
              </Link>
              <Link to="/register" className="text-white">
                Inscription
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
