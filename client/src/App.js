// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import SignIn from "./components/home/signIn";
import SignUp from "./components/home/singUp";
import Series from "./components/articles/series";
import Admin from "./components/home/adminPanel";
import Navbar from "./components/home/navbar";
import Articles from "./components/articles/articles";
import Logout from "./components/home/logout";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/series" element={<Series />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { UserProvider } from "./components/userContext";
// import axios from "axios";
// import { getUser } from "./actions/userActions";

// import Routes from "./components/routes/routesContainer";

// const App = () => {
//   const [uid, setUid] = useState(null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchToken = async () => {
//       await axios({
//         method: "get",
//         url: `${process.env.REACT_APP_API_URL}/jwtid`,
//         withCredentials: true,
//       })
//         .then((res) => {
//           setUid(res.data);
//         })
//         .catch((err) => console.log("No token"));
//     };

//     fetchToken();

//     if (uid) dispatch(getUser(uid));
//   }, [uid]);

//   return (
//     <UserProvider.Provider value={uid}>
//       <Routes />
//     </UserProvider.Provider>
//   );
// };

// export default App;
