import React from "react";

const Detail = (props) => {
    if (props === undefined) {
        history.push("/");
        return "";
    }
    
    console.log(props);
    const { location, history } = props;

    if (location.state === undefined) {
        history.push("/");
        return "";
    }
    
    return <span>{ location.state.title }</span>;
}

export default Detail;
