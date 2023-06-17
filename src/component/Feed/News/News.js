import { useEffect, useRef, useState } from "react";
import Card from "../../UI components/Card";
import { BsFillInfoSquareFill } from "react-icons/bs";

const News = (props) => {
  const showList = useRef();
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    showList.current.style.height =
      showList.current.getBoundingClientRect().height * 0.71 + "px";
    setShowFull(true);
  }, []);

  const onShowBtnHandler = () => {
    if (!showFull) {
      showList.current.style.height =
        showList.current.getBoundingClientRect().height / 2 + "px";
      setShowFull(true);
    } else {
      showList.current.style.height =
        showList.current.getBoundingClientRect().height * 2 + "px";
      setShowFull(false);
    }
  };

  let news = [];
  for (let i = 0; i < 10; i++) {
    news.push(
      <a key={i} href="#">
        <li className="pl-4 py-1 hover:bg-gray-200">
          <h3 className="font-semibold text-sm">
            <span className="pr-1 text-xl">•</span>A must-have Pride Month
            conversation
          </h3>
          <div className="text-xs px-2">
            <span>Top news </span>•<span> 1,298 readers</span>
          </div>
        </li>
      </a>
    );
  }

  return (
    <Card>
      <div className="flex justify-between items-center px-3 py-2 font-semibold text-gray-700">
        <h2>LinkedIn News</h2>
        <BsFillInfoSquareFill />
      </div>
      <ul
        className="text-gray-600 overflow-hidden transition-all duration-150"
        ref={showList}
      >
        {props.news.map((dat) => {
          return (
            <a key={dat.id} href="#">
              <li className="pl-4 py-1 hover:bg-gray-200">
                <h3 className="font-semibold text-sm">
                  <span className="pr-1 text-xl">•</span>
                  {dat.news}
                </h3>
                <div className="text-xs px-2">
                  <span>{dat.time} day ago </span>•
                  <span> {dat.reader} readers</span>
                </div>
              </li>
            </a>
          );
        })}
      </ul>
      <button
        onClick={onShowBtnHandler}
        className="cursor-pointer hover:bg-gray-200 mx-4 text-sm text-gray-600 px-2 my-2 rounded-md"
      >
        {showFull ? "Show full" : "Show less"}
      </button>
    </Card>
  );
};

export default News;
