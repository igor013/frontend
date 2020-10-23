import React from "react";

class Home extends React.Component {
  
  componentDidMount(){

    console.log("O componente foi montado!");

  }

  render() {
    return <h5>Hello World</h5>;
  }
}

export default Home;
