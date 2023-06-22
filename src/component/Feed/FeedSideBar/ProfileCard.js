import Card from "../../UI components/Card";
import CoverImage from "../../../Images/Cover Photo.jpeg";
// import profile from "../../../Images/profile.png";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const ProfileCard = (props) => {
  const { profile } = useContext(UserContext);
  return (
    <Card className="sticky my-2 top-5">
      <img src={CoverImage} className="min-w-[250px]" />
      <div className="relative h-10">
        <img
          src={profile}
          className="h-16 w-16 relative left-[37%] translate-y-[-50%] border-2 border-white rounded-full"
        />
      </div>
      <div className="border-b border-gray-300 text-center  pb-4 ">
        <a className="font-sans text-[16px] font-semibold hover:underline cursor-pointer text-gray-700">
          Vishwas Sharma
        </a>
        <p className="text-[13px] text-gray-500">
          Student at Suresh Gyan Vihar University
        </p>
      </div>
      <div className="border-b border-gray-300 text-xs text-gray-500 font-sans py-5">
        <ul className="">
          <li className="py-1 px-3 cursor-pointer hover:bg-gray-300">
            <a className="">
              <div className="flex justify-between">
                <div>Who's viewed your profile</div>
                <div className="text-blue-600">84</div>
              </div>
            </a>
          </li>
          <li className="py-1 px-3 cursor-pointer hover:bg-gray-200">
            <a className="">
              <div className="flex justify-between">
                <div>Impression of your last post</div>
                <div className="text-blue-600">60</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="p-3 px-4 border-b border-gray-300 cursor-pointer hover:bg-gray-200">
        <p className="text-[12px] text-gray-500">
          Access exclusive tools & insights
        </p>

        <a className="text-[13px] underline hover:text-blue-800">
          Get Hired Faster, Try Premium Free
        </a>
      </div>
      <div className="p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-200 ">
        <BsFillBookmarkFill className="inline w-3 h-3 text-gray-600" />
        <p className="text-[12px] text-gray-800  inline pl-1">My items</p>
      </div>
    </Card>
  );
};

export default ProfileCard;
