import { useContext, useEffect } from "react";
import LSForm from "../component/Login-SignUp/Form";
import { UserContext } from "../component/context/UserContext";

const SignUp = () => {
  const { signUpUser } = useContext(UserContext);
  useEffect(() => {
    document.title = "Sign Up | LinkedIn";
  });

  const singUpHandler = ({ email, password }) => {
    signUpUser(email, password);
  };
  return (
    <LSForm
      title="Join LinkedIn"
      btnName="Join us"
      submitHandler={singUpHandler}
    >
      <p className="w-[300px] text-xs text-gray-700 my-2">
        By clicking Join, you agree to the LinkedIn User Agreement, Privacy
        Policy, and Cookie Policy.
      </p>
    </LSForm>
  );
};

export default SignUp;
