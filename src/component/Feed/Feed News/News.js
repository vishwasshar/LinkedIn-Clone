import { useEffect, useRef, useState } from "react";
import Card from "../../UI components/Card";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { SpinningCircles } from "react-loading-icons";
import { Link } from "react-router-dom";

const News = (props) => {
  const showList = useRef();
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    showList.current.style.height = "250px";
    setShowFull(true);
  }, []);

  const onShowBtnHandler = () => {
    if (!showFull) {
      showList.current.style.height = "250px";
      setShowFull(true);
    } else {
      showList.current.style.height = "490px";
      setShowFull(false);
    }
  };

  return (
    <Card className="sticky my-2 top-5">
      <div className="flex justify-between items-center px-3 py-2 font-semibold text-gray-700">
        <h2>LinkedIn News</h2>
        <BsFillInfoSquareFill />
      </div>
      <ul
        className="text-gray-600 overflow-hidden transition-all duration-200"
        ref={showList}
      >
        {props.news.length === 0 ? (
          <SpinningCircles
            className="w-20 m-[50%] translate-x-[-50%] translate-y-[-100%]"
            fill="#9c9c9c"
          />
        ) : (
          props.news.map((dat, i) => {
            const date = new Date(dat.publishedAt);
            return (
              <Link key={i} to={`/news/${i}`} title={dat.title} className="">
                <li className="pl-4 py-1 hover:bg-gray-200">
                  <h3 className="font-semibold text-sm max-w-[250px] max-h-6 overflow-hidden">
                    <span className="pr-1 text-xl">•</span>
                    {dat.title}
                  </h3>
                  <div className="text-xs px-2">
                    <span>{date.toLocaleDateString()} </span>•
                    <span> {Math.round(Math.random() * 10000)} readers</span>
                  </div>
                </li>
              </Link>
            );
          })
        )}
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
