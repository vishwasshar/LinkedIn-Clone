import Card from "../../UI components/Card";
import { BsImageFill, BsBriefcaseFill } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { MdArticle } from "react-icons/md";

const CreatePost = (props) => {
  return (
    <Card className="border border-black  bg-white ">
      <div className="flex p-3">
        <img src={props.profile} className="rounded-full w-12"></img>
        <button className="border border-gray-400 text-gray-400 text-sm text-left mx-2 px-4 hover:bg-gray-200 w-full rounded-full">
          Start a post
        </button>
      </div>
      <ul className="pb-2 flex justify-around">
        <li className="flex items-center px-3 py-3 hover:bg-gray-200 rounded-md cursor-pointer">
          <BsImageFill className="text-blue-600 text-xl mr-2" />
          <span className="text-sm text-gray-600">Photo</span>
        </li>
        <li className="flex items-center px-3 py-3 hover:bg-gray-200 rounded-md cursor-pointer">
          <MdVideoLibrary className="text-green-600 text-xl mr-2" />
          <span className="text-sm text-gray-600">Video</span>
        </li>
        <li className="flex items-center px-3 py-3 hover:bg-gray-200 rounded-md cursor-pointer">
          <BsBriefcaseFill className="text-purple-600 text-xl mr-2" />
          <span className="text-sm text-gray-600">Job</span>
        </li>
        <li className="flex items-center px-3 py-3 hover:bg-gray-200 rounded-md cursor-pointer">
          <MdArticle className="text-orange-600 text-xl mr-2" />
          <span className="text-sm text-gray-600">Write article</span>
        </li>
      </ul>
    </Card>
  );
};
export default CreatePost;
