import { useEffect, useState } from "react";

export const SinglePost = (props) => {
  const [isFetching, setIsFetching] = useState(true);
  const [singlePost, setSinglePost] = useState("");

  const URL = `https://dummyjson.com/posts/${props.id}`;

  useEffect(() => {
    setIsFetching(true);
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          return Promise.reject();
        }
        return response.json();
      })
      .then((data) => {
        setSinglePost(data);
      })
      .catch(() => {
        //error
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [props.id]);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h4>{singlePost.title}</h4>
      <p>{singlePost.body}</p>
    </div>
  );
};
