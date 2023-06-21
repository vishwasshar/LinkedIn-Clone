import { Formik, Form, ErrorMessage, Field } from "formik";
import { object, string } from "yup";
import Card from "../UI components/Card";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const LSForm = (props) => {
  const { checkEmailSignIn, checkEmailSignUp } = useContext(UserContext);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (props.title == "Sign in") {
      setMessage("Email isn't registered");
    } else {
      setMessage("Email is already registered");
    }
  }, []);

  const checkEmail = (email) => {
    if (props.title == "Sign in") {
      console.log(checkEmailSignIn(email));
      return checkEmailSignIn(email);
    } else {
      console.log(checkEmailSignUp(email));
      return checkEmailSignUp(email);
    }
  };
  const validate = object({
    email: string()
      .email("Enter a valid E-mail address")
      .required("Please enter Email")
      .test("email", message, (email) => {
        return checkEmail(email);
      }),
    password: string()
      .min(8, "Password must be atleast 8 character")
      .required("Please enter Password"),
  });

  return (
    <div className="flex justify-center items-center py-2 bg-white">
      <Card className="border border-black min-h-10 min-w-10 flex-col p-8 shadow-xl">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validate}
          onSubmit={props.submitHandler}
        >
          {(formik) => (
            <Form className=" flex-col justify-between">
              <h1 className="text-3xl py-2">{props.title}</h1>
              <div className="my-2">
                <label
                  htmlFor="email"
                  className=" block text-sm text-gray-700 font-semibold py-2"
                >
                  Email or phone
                </label>
                <Field
                  name="email"
                  className="border border-black rounded-md w-[300px] p-3 hover:bg-gray-100 hover:border-2 cursor-pointer"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="email"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="password"
                  className=" block text-sm text-gray-700 font-semibold py-2"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="border border-black rounded-md w-[300px] p-3 hover:bg-gray-100 hover:border-2 cursor-pointer"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="password"
                />
              </div>
              {props.children}
              <button
                type="submit"
                className="w-full border rounded-full bg-blue-600 text-white font-semibold py-3 my-2"
              >
                {props.btnName}
              </button>
              <div className="my-2  flex justify-center items-center before:content-[''] before:w-[50%] before:border before:border-gray-200 before:h-[50%] after:content-[''] after:w-[50%] after:border after:border-gray-200 after:h-[50%]">
                <div className="px-2 text-gray-500"> or </div>
              </div>
            </Form>
          )}
        </Formik>
        <button className="w-full my-2 py-2 border border-black rounded-full hover:bg-gray-100 ">
          <FcGoogle className="inline mx-2 text-2xl" />
          {props.btnName} with Google
        </button>
        <div className="my-2 flex justify-center items-center">
          <span>
            {props.title == "Sign in"
              ? "New to LinkedIn?"
              : "Already on Linkedin?"}
          </span>
          <span className="text-blue-500 font-semibold cursor-pointer">
            <Link to={props.title == "Sign in" ? "/signup" : "/login"}>
              {props.title == "Sign in" ? " Join us" : " Sign in"}
            </Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default LSForm;
