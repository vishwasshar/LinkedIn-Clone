import Post from "./Post";
import { useEffect, useState, useRef } from "react";
import { createClient } from "pexels";
import { SpinningCircles } from "react-loading-icons";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const postRef = useRef();
  const [search, setSearch] = useState(false);
  const [skip, setSkip] = useState(0);
  const client = createClient(
    "gkMtcFDUm87gK8vSZKkY2EBVCUjmgmji2Y7Ogg0lzIGs3KjQrBLqVrDL"
  );
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    setSearch(true);
    window.addEventListener("scroll", () => {
      if (
        window.scrollY >=
          document.documentElement.scrollHeight - 2 * window.innerHeight &&
        !search &&
        skip < 90
      ) {
        setSearch(true);
      }
    });
  }, []);

  useEffect(() => {
    if (skip == 90) {
      setSearching(false);
    }
    if (search && skip < 90) {
      fetch(`https://dummyjson.com/posts?limit=10&skip=${skip}`)
        .then((res) => res.json())
        .then((json) => {
          setPosts((currPosts) => {
            return [...currPosts, ...json.posts];
          });
          setSkip((currSkip) => {
            return (currSkip += 10);
          });
          setSearch(false);
        });
    }
  }, [search]);

  return (
    <div className="flex-row justify-around" ref={postRef}>
      {posts.map((itm) => (
        <Post postData={itm} key={itm.id} pexelAPI={client}></Post>
      ))}
      <SpinningCircles
        className={`${!searching && "hidden"} mx-[50%]  translate-x-[-50%] `}
        fill="#9c9c9c"
      />
    </div>
  );
};

export default Posts;
