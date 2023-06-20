import { useEffect } from "react";
import LSForm from "../component/Login-SignUp/Form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up | LinkedIn";
  });
  const navigate = useNavigate();
  const singUpHandler = () => {
    console.log("Sign Up Successful");
    navigate("/feed");
  };
  return (
    <LSForm title="Join LinkedIn" btnName="Join us" submitHandler={singUpHandler}>
      <p className="w-[300px] text-xs text-gray-700 my-2">
        By clicking Join, you agree to the LinkedIn User Agreement, Privacy
        Policy, and Cookie Policy.
      </p>
    </LSForm>
  );
};

export default SignUp;
