import React from "react";

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

  return <span>{location.state.title}</span>;
};

export default Detail;
