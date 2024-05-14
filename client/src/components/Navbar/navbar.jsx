import React from 'react';
import { link } from "react-router-dom"

import './navbar.style.css'

const navbar = () => {
    return (
        <div>
            <div>
                <h1>Series</h1>
                <a href="/home">Acceuil</a>
                <a href="/series">Series</a>
                <a href="/films">Films</a>
                <a href="">Communauté</a>
            </div>

            <div>
                <a href="/register">Incription</a>
                <a href="/login">Connexion</a>
            </div>
        </div>
    );
};

export default navbar;