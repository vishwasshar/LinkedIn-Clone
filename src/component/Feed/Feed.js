import FeedPost from "./FeedPost/FeedPost";
import FeedSideBar from "./FeedSideBar/FeedSideBar";
import News from "./News/News";

const Home = (props) => {
  const news = [
    {
      id: 1,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
    {
      id: 2,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
    {
      id: 3,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
    {
      id: 4,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
    {
      id: 5,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
    {
      id: 6,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
    {
      id: 7,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
    {
      id: 8,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
    {
      id: 9,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
    {
      id: 10,
      news: "A must-have Pride Month conversation",
      time: 1,
      reader: 1021,
    },
  ];

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

export default Home;
