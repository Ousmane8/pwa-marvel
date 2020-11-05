import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <p>Home</p>
      <p>{props.match.params.id}</p>
      <Link to="/login">To login</Link>
    </div>
  );
};

export default Home;
