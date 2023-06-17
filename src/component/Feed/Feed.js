import FeedPost from "./FeedPost/FeedPost";
import FeedSideBar from "./FeedSideBar/FeedSideBar";

const Home = (props) => {
  return (
    <div className=" grid grid-cols-[20%_50%_auto] gap-6 mx-28 my-8 ">
      <div>
        <FeedSideBar profile={props.profile} />
      </div>
      <main className="h-[20vh] ">
        <FeedPost profile={props.profile}></FeedPost>
      </main>
      <aside className="min-h-[40vh] "></aside>
    </div>
  );
};

export default Home;
