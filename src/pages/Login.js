import { useContext, useEffect } from "react";
import LSForm from "../component/Login-SignUp/Form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../component/context/UserContext";

const Login = () => {
  const { setLoggedIn } = useContext(UserContext);
  useEffect(() => {
    document.title = "Sign In | LinkedIn";
  }, []);
  const navigate = useNavigate();
  const loginHandler = () => {
    setLoggedIn(true);
    navigate("/feed");
  };
  return (
    <LSForm title="Sign in" btnName="Sign in" submitHandler={loginHandler}>
      <a href="#" className="block py-2">
        Forget Password?
      </a>
    </LSForm>
  );
};

export default Login;
