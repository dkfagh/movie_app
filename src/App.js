import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading : true,
    movives: []
  };

  getMovies = async() => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We're ready"}</div>;
  }
}

export default App;
