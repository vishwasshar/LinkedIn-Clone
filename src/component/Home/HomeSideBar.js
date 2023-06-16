import Card from "../UI components/Card";
import CoverImage from "../../Images/Cover Photo.jpeg";
import profile from "../../Images/profile.png";

const ActivityCard = () => {
  return (
    <Card className="">
      <img src={CoverImage} className="min-w-[250px]" />
      <img
        src={profile}
        className="h-16 w-16 absolute translate-y-[-50%] translate-x-[130%] border-2 border-white rounded-full"
      />
      <div className="border-b border-gray-300 text-center mt-12 pb-4 ">
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
          <li className="py-1 px-3 cursor-pointer hover:bg-gray-300">
            <a className="">
              <div className="flex justify-between">
                <div>Impression of your last post</div>
                <div className="text-blue-600">60</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="p-3">
        <p className="text-[12px] text-gray-500">
          Access exclusive tools & insights
        </p>
        <a className="text-[12px] underline"></a>
      </div>
    </Card>
  );
};

const ProfileCard = () => {};

const HomeSideBar = () => {
  return (
    <div>
      <ProfileCard />
      <ActivityCard />
    </div>
  );
};

export default HomeSideBar;
