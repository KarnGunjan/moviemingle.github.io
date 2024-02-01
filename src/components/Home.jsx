import React from "react";
import "./home.css";
import posterImg from "./images/moviePoster.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  let signUphandler = () => {
    navigate("/signup");
  };
  return (
    <div className="homeContainer">
      <div className="homeContent">
        <div className="text">
          <h2 style={{ fontSize: "2.3rem" }}>Welcome to MovieMingle</h2>
          <p style={{ fontSize: "large" }}>
            Where movies and fans meet!
            <br />
            Discover, explore, and mingle with your favorite movies.
          </p>
        </div>
        <div>
          <button className="signUpBtn" onClick={signUphandler}>
            sign up
          </button>
        </div>
      </div>
      <div className="posterDiv">
        <img className="poster" src={posterImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
