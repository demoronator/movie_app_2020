import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading: true,
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Ready!"}</div>;
  }

  componentDidMount() {
    // 영화 데이터 로딩
    setTimeout(() => {
      this.setState({ isLoading: false });
      console.log("aa");
    }, 3000)
  }
}

export default App;
