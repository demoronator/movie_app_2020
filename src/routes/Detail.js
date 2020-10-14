import React from "react";
import "./Detail.css";

const Detail = (props) => {
  console.log(props);
  const { location, history } = props;

  if (props === undefined) {
    history.push("/");
    return "";
  }

  if (location.state === undefined) {
    history.push("/");
    return "";
  }

  return (
    <span className="detail detail__container">{location.state.title}</span>
  );
};

export default Detail;
