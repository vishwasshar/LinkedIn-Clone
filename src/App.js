import "./App.css";
import React, { useContext, useEffect } from "react";
import Header from "./component/Header/Header";
import Feed from "./pages/Feed";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginSignUpHeader from "./component/Header/LoginSignUpHeader";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserContext } from "./component/context/UserContext";
import News from "./pages/News";

function App() {
  const { isLoggedIn } = useContext(UserContext);
  useEffect(() => {}, []);

  return (
    <>
      {isLoggedIn ? <Header /> : <LoginSignUpHeader />}

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
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/feed" /> : <SignUp />}
        />
        <Route
          path="/feed"
          element={isLoggedIn ? <Feed /> : <Navigate to="/login" />}
        />
        <Route path="/news/:id" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
