import React, { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "../userContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const removeCookie = (key) => {
    if (Window !== undefined) {
      Cookies.remove(key, { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: "get",
      url: "http://localhost:2024/api/user/logout",
      withCredentials: true,
    })
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));

    window.location = "/";
  };
  return (
    <li onClick={logout}>
      <img src="./img/icons/logout.svg" alt="logout" />
    </li>
  );
};
export default Logout;
