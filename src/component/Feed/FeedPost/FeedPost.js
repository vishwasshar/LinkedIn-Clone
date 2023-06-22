import { useState } from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
const FeedPost = (props) => {
  const [sortBy, setSortBy] = useState("Top");

  const sortBtnClickHandler = () => {
    sortBy == "Top" ? setSortBy("Recent") : setSortBy("Top");
  };
  return (
    <>
      <CreatePost profile={props.profile} />
      <div
        className="my-2 flex justify-end items-center before:content-[''] before:w-[81%] before:border before:border-gray-300 before:h-[50%] cursor-pointer"
        onClick={sortBtnClickHandler}
      >
        <div className="px-2 text-gray-500 text-xs select-none">
          Sort By: <span className="text-gray-700">{sortBy} ▼</span>
        </div>
      </div>
      <Posts></Posts>
    </>
  );
};
export default FeedPost;
