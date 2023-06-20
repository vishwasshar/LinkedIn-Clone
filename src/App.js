import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import Feed from "./pages/Feed";
import profile from "./Images/profile.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import LoginSignUpHeader from "./component/Header/LoginSignUpHeader";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <Header profile={profile} /> : <LoginSignUpHeader />}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/feed" /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/feed" /> : <Login />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/feed"
            element={
              isLoggedIn ? <Feed profile={profile} /> : <Navigate to="/login" />
            }
            profile={profile}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
