import React, { useState } from "react";
import "./AddMovie.css";
import axiosInstance from "./Helper/axiosInstance";

const AddMovie = () => {
  let [mname, setMname] = useState("");
  let [mgenre, setGenre] = useState("");
  let [mrating, setMrating] = useState("");

  let addMovieBtn = (e) => {
    e.preventDefault();
    let payLoad = {
      mname,
      mgenre,
      mrating,
    };
    axiosInstance.post("/posts", payLoad);
    window.location.assign("/gallery");
  };

  return (
    <>
      <div>
        <form action="" style={{ textAlign: "center" }}>
          <fieldset className="forms">
            <h3>Add Your Favourite Movie Here..</h3> <br />
            <br />
            <label htmlFor=""> Movie name : </label>
            <input
              type="text"
              onChange={(e) => {
                setMname(e.target.value);
              }}
            />
            <br />
            <br />
            <label htmlFor=""> Genre : </label>
            <input
              type="text"
              onChange={(e) => {
                setGenre(e.target.value);
              }}
            />
            <br /> <br />
            <label htmlFor=""> Movie Rating : </label>
            <input
              type="number"
              onChange={(e) => {
                setMrating(e.target.value);
              }}
            />
            <br />
            <br />
            <button
              className="btn btn-info  mx-5"
              type="submit"
              fdprocessedid="a6ihz"
              onClick={addMovieBtn}
            >
              Add
            </button>
            <button
              className="btn btn-info mx-5"
              type="reset"
              fdprocessedid="a6ihz"
            >
              cancel
            </button>
          </fieldset>
        </form>
      </div>
      <div className="fake"></div>
    </>
  );
};

export default AddMovie;
