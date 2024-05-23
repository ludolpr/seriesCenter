// UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Ce code crée un contexte utilisateur (UserContext) et un fournisseur de contexte utilisateur (UserProvider) en utilisant React Context API. Voici ce que font les différentes parties du code :

// import React, { createContext, useState } from "react"; : Importe les fonctionnalités nécessaires de React, notamment createContext pour créer un nouveau contexte et useState pour gérer l'état de l'utilisateur.

// export const UserContext = createContext(null); : Crée un contexte utilisateur avec createContext(null). La valeur initiale est null, ce qui signifie que si un composant tente d'accéder à ce contexte sans avoir de fournisseur, il obtiendra null par défaut.

// export const UserProvider = ({ children }) => {...} : Définit le fournisseur de contexte utilisateur. Ce composant prend une prop children qui représente les composants enfants qui seront enveloppés par ce fournisseur de contexte.

// const [user, setUser] = useState(null); : Utilise le hook useState pour déclarer une variable d'état user qui représente l'utilisateur connecté. null est la valeur initiale.

// return ( <UserContext.Provider value={{ user, setUser }}> {children} </UserContext.Provider> ); : Renvoie le contexte utilisateur avec son fournisseur. Tous les composants descendants auront accès à ce contexte et pourront y accéder à l'aide de useContext(UserContext).

// value={{ user, setUser }} : Cela fournit les valeurs user et setUser au contexte. Tous les composants descendants peuvent lire ces valeurs à partir du contexte.
// {children} : Enveloppe tous les composants enfants avec ce contexte. Cela permet aux composants enfants d'accéder aux valeurs du contexte.
// En résumé, ce code crée un contexte utilisateur global qui peut être utilisé pour stocker et partager des informations sur l'utilisateur connecté à travers l'application React.
