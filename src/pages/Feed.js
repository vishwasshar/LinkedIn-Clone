import { useEffect, useState } from "react";
import FeedPost from "../component/Feed/FeedPost/FeedPost";
import FeedSideBar from "../component/Feed/FeedSideBar/FeedSideBar";
import News from "../component/Feed/News/News";
import { json } from "react-router-dom";

const Feed = (props) => {
  const [news, setNews] = useState([]);
  // console.log(news.length);
  useEffect(() => {
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

  // const news = [
  //   {
  //     id: 1,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  //   {
  //     id: 2,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  //   {
  //     id: 3,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  //   {
  //     id: 4,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  //   {
  //     id: 5,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  //   {
  //     id: 6,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  //   {
  //     id: 7,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  //   {
  //     id: 8,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  //   {
  //     id: 9,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  //   {
  //     id: 10,
  //     news: "A must-have Pride Month conversation",
  //     time: 1,
  //     reader: 1021,
  //   },
  // ];

  return (
    <div className=" grid grid-cols-[20%_50%_auto] gap-6 mx-28 my-8 ">
      <div>
        <FeedSideBar profile={props.profile} />
      </div>
      <main className="h-[20vh] ">
        <FeedPost profile={props.profile}></FeedPost>
      </main>
      <aside className="min-h-[40vh] ">
        <News news={news}></News>
      </aside>
    </div>
  );
};

export default Feed;
