import { createContext, useState } from "react";
import profile from "../../Images/profile.png";

export const UserContext = createContext();

const UserStates = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <UserContext.Provider value={{ profile, isLoggedIn, setLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStates;
