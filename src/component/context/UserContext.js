import { createContext, useState } from "react";
import profile from "../../Images/profile.png";
import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export const UserContext = createContext();

const UserStates = (props) => {
  const usersCollectionRef = collection(db, "users");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkEmailSignIn = async (email) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    return userData.exists() === true;
  };
  const checkEmailSignUp = async (email) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    return userData.exists() === false;
  };

  const loginUser = async (email, password) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    if (userData.exists() && userData.data().password == password) {
      setLoggedIn(true);
    } else {
      console.log("Un-authenticated User");
    }
  };

  const signUpUser = async (email, password) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    if (userData.exists()) {
      console.log("Already exists");
      return;
    }
    await setDoc(userRef, {
      name: email.split("@")[0],
      email: email,
      password: password,
    });
    await loginUser(email, password);
  };

  return (
    <UserContext.Provider
      value={{
        profile,
        isLoggedIn,
        setLoggedIn,
        loginUser,
        checkEmailSignIn,
        checkEmailSignUp,
        signUpUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStates;
