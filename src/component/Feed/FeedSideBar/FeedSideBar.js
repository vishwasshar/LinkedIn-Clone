import ProfileCard from "./ProfileCard";
import ActivityCard from "./ActivityCard";

const HomeSideBar = (props) => {
  return (
    <>
      <ProfileCard profile={props.profile} />
      <ActivityCard />
    </>
  );
};

export default HomeSideBar;
