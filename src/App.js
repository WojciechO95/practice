import logo from "./logo.svg";
import "./App.css";
import { SinglePost } from "./components/SinglePost/SinglePost";
import { useState } from "react";
import { PostNavigation } from "./components/PostNavigation/PostNavigation";

function App() {
  const [postId, setPostId] = useState(1);
  const handleIdIncrease = () => {
    setPostId((prevState) => prevState + 1);
  };
  return (
    <div>
      <SinglePost id={postId} />
      <PostNavigation handleIdIncrease={handleIdIncrease} id={postId} />
    </div>
  );
}

export default App;
