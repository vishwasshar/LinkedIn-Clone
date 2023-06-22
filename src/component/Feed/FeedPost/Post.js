import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "../../UI components/Card";
import { FaGlobeAsia } from "react-icons/fa";

const Post = (props) => {
  const postData = props.postData;
  const [userData, setUserData] = useState({});
  const [seeMore, setSeeMore] = useState(false);
  const descRef = useRef();
  const [postImgSrc, setPostImgSrc] = useState("");

  useEffect(() => {
    const userId = postData.id;
    fetch("https://dummyjson.com/users/" + userId)
      .then((res) => res.json())
      .then((json) => {
        setUserData(json);
      });
    props.pexelAPI.photos
      .search({
        query: postData.tags[0],
        size: "medium",
        orientation: "portrait",
        per_page: 1,
      })
      .then((photo) => {
        setPostImgSrc(photo.photos[0].src.medium);
      });
  }, []);

  useLayoutEffect(() => {
    if (descRef.current.scrollHeight > descRef.current.clientHeight) {
      setSeeMore(true);
    } else {
      setSeeMore(false);
    }
  }, [descRef]);

  const seeFullDesc = () => {
    descRef.current.style.height = "100%";
    setSeeMore(false);
  };

  return (
    <Card className="my-2">
      <div className="p-4 flex justify-center">
        <img src={userData?.image} className="rounded-full h-12 w-12"></img>
        <div className="w-[75%] flex-row px-2">
          <h4 className="text-sm font-semibold text-gray-800">
            {userData?.firstName + " " + userData?.lastName}
          </h4>
          <p className="text-xs text-gray-500">{userData?.company?.title}</p>
          <p className="text-xs text-gray-500 flex items-center">
            {Math.round(Math.random() * 10)}h •
            <FaGlobeAsia className="inline text-center" />
          </p>
        </div>
        <button className="text-blue-700 font-semibold hover:bg-gray-200 h-10 p-2 rounded-md">
          + Follow
        </button>
      </div>
      <div className="relative px-5 my-2 text-sm border-b border-gray-200">
        <p ref={descRef} className="h-16 overflow-hidden">
          {postData.body}
        </p>
        <button
          className={`${
            seeMore ? "block" : "hidden"
          } absolute right-4 bottom-0 bg-white border-l-4 border-white cursor-pointer select-none`}
          onClick={seeFullDesc}
        >
          ...see more
        </button>
      </div>
      <div>
        <img src={postImgSrc} className="w-full h-[500px]"></img>
      </div>
    </Card>
  );
};

export default Post;
