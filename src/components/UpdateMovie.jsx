import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "./Helper/axiosInstance";

const UpdateMovie = () => {
  let { id } = useParams();
  let [mname, setMname] = useState("");
  let [mgenre, setGenre] = useState("");
  let [mrating, setMrating] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get(`/posts/${id}`);
      setMname(data.mname);
      setGenre(data.mgenre);
      setMrating(data.mrating);
      console.log({ data });
    };
    fetchData();
  }, []);

  let updateMovieBtn = (e) => {
    e.preventDefault();
    let payLoad = { mname, mgenre, mrating };
    axiosInstance.put(`/posts/${id}`, payLoad);
    window.location.assign("/gallery");
  };

  return (
    <>
      <div>
        <form action="" style={{ textAlign: "center", marginTop: "3%" }}>
          <fieldset className="forms">
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
            <label htmlFor=""> Movie rating : </label>
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
              onClick={updateMovieBtn}
            >
              Update
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
    </>
  );
};

export default UpdateMovie;
