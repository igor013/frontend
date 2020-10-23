import React from "react";
import Header from "../pages/Components/Header.js"
import "../styles/globalstyles.css"
import {Link}from "react-router-dom"


function Home() {
  const [ismouted, setismouted] = React.useState(false);
  React.useEffect(() => {
    if (!ismouted) {
      console.log(" O componente foi montado!");
      setismouted(true);
    }
  }, [ismouted]);

  return (
    <div>
      <Header title="Bra chat" user="gil" />
      <Header title="sisputas" user="hudson" />
      <h5>Hello World2</h5>
      <Link to="/profile">
      <p>Ir pra Profile</p>
      </Link>
    </div>

  );

}

export default Home;
