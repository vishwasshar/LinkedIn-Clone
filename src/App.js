import "./App.css";
import Header from "./component/Header/Header";
import Feed from "./component/Feed/Feed";
import profile from "./Images/profile.png";

function App() {
  return (
    <>
      <Header profile={profile} />
      <Feed profile={profile} />
    </>
  );
}

export default App;
