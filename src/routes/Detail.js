import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./Detail.css";

const API_GET_TRAILER =
  "https://powqkoncwk.execute-api.ap-northeast-2.amazonaws.com/live/";

const Detail = (props) => {
  console.log(props);
  const { location, history } = props;
  const [youtubeId, setYoutubeId] = useState("");

  const canShow = props && location && location.state;

  useEffect(() => {
    async function getTrailer(title) {
      let isOk = true;
      const response = await Axios.get(API_GET_TRAILER + title).catch(
        (error) => {
          console.warn("Failed to retrieve trailer id");
          isOk = false;
        }
      );
      if (!isOk) {
        return;
      }

      const id = response.data.items[0].id.videoId;
      console.log(id);
      setYoutubeId(id);
    }

    if (canShow) {
      getTrailer(location.state.title);
    }
  }, [canShow, location]);

  if (!canShow) {
    history.push("/");
    return "";
  }

  const src = "https://www.youtube.com/embed/" + youtubeId;
  const trailer = youtubeId ? (
    <iframe
      title="trailer"
      className="detail__trailer"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ) : (
    <div className="detail__trailer"></div>
  );

  return (
    <span className="detail detail__container">
      <div className="detail__content">
        <div>
          <h1>{location.state.title}</h1>
        </div>
        {trailer}
      </div>
    </span>
  );
};

export default Detail;
