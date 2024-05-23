import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";

// Définir le middleware personnalisé pour les actions asynchrones
const customMiddleware = (store) => (next) => (action) => {
  // Vérifier si l'action est asynchrone (par exemple, si elle contient une promesse)
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

// Configuration du store Redux
const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware(),
    thunkMiddleware,
    logger,
    customMiddleware,
  ],
});

export default store;
