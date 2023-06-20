import { useContext, useEffect, useState } from "react";
import FeedPost from "../component/Feed/FeedPost/FeedPost";
import FeedSideBar from "../component/Feed/FeedSideBar/FeedSideBar";
import News from "../component/Feed/News/News";
import { UserContext } from "../component/context/UserContext";

const Feed = (props) => {
  const [news, setNews] = useState([]);
  const { profile } = useContext(UserContext);
  useEffect(() => {
    document.title = "Feed | LinkedIn";
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b628b0d2726648879c20f5c4b27b5fec"
    )
      .then((res) => res.json())
      .then((json) => {
        setNews(json.articles);
      })
      .catch((err) => {
        setNews([]);
      });
  }, []);

  return (
    <div className=" grid md:grid-cols-[20%_auto_25%] gap-6 mx-10 lg:mx-28 my-8 grid-cols-[auto]">
      <div className="md:block hidden">
        <FeedSideBar profile={profile} className="" />
      </div>
      <main className="min-w-[200px]">
        <FeedPost profile={profile}></FeedPost>
      </main>
      <aside>
        <News news={news} className=" hidden lg:block"></News>
      </aside>
    </div>
  );
};

export default Feed;
