import LSForm from "../component/Login-SignUp/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginHandler = () => {
    console.log("Log In Successful");
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
