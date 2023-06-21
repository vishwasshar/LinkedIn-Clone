import { useContext, useEffect, useState } from "react";
import NavIcon from "../UI components/NavIcon";
import {
  AiFillLinkedin,
  AiOutlineSearch,
  AiFillHome,
  AiFillMessage,
} from "react-icons/ai";
import {
  BsFillGrid3X3GapFill,
  BsFillPeopleFill,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { UserContext } from "../context/UserContext";

const Header = (props) => {
  const [wiggle, setWiggle] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const { profile } = useContext(UserContext);
  const pagePath = window.location.pathname;

  return (
    <>
      <header className="px-5 lg:px-20 bg-white">
        <div className=" flex justify-center items-center">
          <a href="#" className="px-2 my-1">
            <AiFillLinkedin className="text-5xl text-blue-700" />
          </a>
          <div className="w-4/12 rounded overflow-hidden flex items-center">
            <AiOutlineSearch className="absolute ml-3 z-20 text-2xl text-gray-700 font-extrabold block md:hidden" />
            <form className="hidden md:block">
              <div className="relative flex items-center text-gray-600 focus-within:text-gray-800 ">
                <AiOutlineSearch className="absolute ml-3 z-20" />
                <input className="pr-2 pl-6 py-2 bg-slate-100 h-8 origin-left focus:scale-x-125 rounded-sm focus:border-4 transition ease-in-out " />
              </div>
            </form>
          </div>
          <nav className="w-6/12 border-black min-w-[80%] md:min-w-[70%] lg:min-w-[55%]">
            <ul className="flex justify-evenly ">
              <NavIcon title="Home" link="#" isActive={pagePath == "/feed"}>
                <AiFillHome className="text-2xl " />
              </NavIcon>
              <NavIcon
                title="My Network"
                link="#"
                isActive={pagePath == "/mynetwork"}
              >
                <BsFillPeopleFill className="text-2xl " />
              </NavIcon>
              <NavIcon title="Jobs" link="#" isActive={pagePath == "/jobs"}>
                <BsFillBriefcaseFill className="text-2xl " />
              </NavIcon>
              <NavIcon
                title="Messaging"
                link="#"
                isActive={pagePath == "/messaging"}
              >
                <AiFillMessage className="text-2xl " />
              </NavIcon>
              <NavIcon
                title="Notifications"
                link="#"
                isActive={pagePath == "/notifications"}
              >
                <IoNotificationsSharp
                  className={`${wiggle && "animate-wiggle"} text-2xl`}
                  onClick={() => {
                    setWiggle(true);
                  }}
                  onAnimationEnd={() => setWiggle(false)}
                />
              </NavIcon>
              <NavIcon
                title="Me ▼"
                link="#"
                clickFun={() => {
                  setZoomOut(true);
                }}
              >
                <img
                  src={profile}
                  className={`${
                    zoomOut && "animate-zoomOut"
                  } h-6 w-6 rounded-xl`}
                  onAnimationEnd={() => setZoomOut(false)}
                />
              </NavIcon>
              <NavIcon
                title="For Business ▼"
                link="#"
                className="border-gray-200 border-l pl-2 hidden sm:block"
              >
                <BsFillGrid3X3GapFill className="text-2xl " />
              </NavIcon>
              <NavIcon link="#" className="hidden sm:block">
                <p className="text-xs text-yellow-700 hover:text-yellow-900 underline">
                  Get Hired Faster,
                  <br /> Try Premium Free
                </p>
              </NavIcon>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
