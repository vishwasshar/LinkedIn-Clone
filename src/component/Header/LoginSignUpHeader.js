import { BsLinkedin } from "react-icons/bs";

const LoginSignUpHeader = () => {
  return (
    <header className="px-20 py-3 bg-white">
      <a href="http://localhost:3000/">
        <span className="flex items-center text-blue-600 text-3xl font-bold">
          Linked <BsLinkedin />
        </span>
      </a>
    </header>
  );
};

export default LoginSignUpHeader;
