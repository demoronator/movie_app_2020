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
    <span className="detail detail__container">
      <div className="detail__content">
        <div>
          <h1>
            <span role="img" aria-label="construction">
              👷
            </span>
            Under construction
          </h1>
        </div>
        <div>
          <h2>{location.state.title}</h2>
        </div>
      </div>
    </span>
  );
};

export default Detail;
