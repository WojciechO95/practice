import { useState } from "react";

export const PostNavigation = (props) => {
  const handleBtnClick = () => {
    props.handleIdIncrease();
  };
  return (
    <section>
      <div>
        <p>This is the post number: {props.id}</p>
        <button onClick={handleBtnClick}>Next post</button>
      </div>
    </section>
  );
};
