import { useContext, useEffect } from "react";
import LSForm from "../component/Login-SignUp/Form";
import { UserContext } from "../component/context/UserContext";

const Login = () => {
  const { loginUser } = useContext(UserContext);

  useEffect(() => {
    document.title = "Sign In | LinkedIn";
  }, []);

  const loginHandler = ({ email, password }) => {
    console.log({ email, password });
    loginUser(email, password);
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
