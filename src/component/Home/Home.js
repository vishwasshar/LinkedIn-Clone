import HomeSideBar from "./HomeSideBar";

const Home = () => {
  return (
    <div className=" grid grid-cols-[20%_50%_auto] gap-4 mx-28 my-8 ">
      <div className="min-h-[40vh] ">
        <HomeSideBar />
      </div>
      <main className="h-[20vh] "></main>
      <aside className="min-h-[40vh] "></aside>
    </div>
  );
};

export default Home;
