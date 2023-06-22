import { Link } from "react-router-dom";

const NavIcon = (props) => {
  return (
    <>
      <li className={props.className + " max-w-sm"} onClick={props.clickFun}>
        <Link
          to={props.to}
          className={` ${
            props.isActive ? "text-black" : "text-gray-500"
          } flex-row text-center items-center max-w-sm hover:text-black`}
        >
          <div className="flex justify-center">{props.children}</div>
          <p className="text-xs hidden md:block">{props.title}</p>
        </Link>
      </li>
    </>
  );
};

export default NavIcon;
