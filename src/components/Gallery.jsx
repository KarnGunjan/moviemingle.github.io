import React, { useState, useEffect } from "react";
import axiosInstance from "./Helper/axiosInstance";
import "./Gallery.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  let [movie, setMovie] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axiosInstance.get("/posts");
      setMovie(data);
    };
    fetchData();
  }, []);

  let handleDelete = (id) => {
    axiosInstance.delete(`/posts/${id}`);
    window.location.assign("/gallery");
  };
  return (
    <div className="mainCardContainer">
      <div className="addMovieBtn">
        <span style={{ fontSize: "1.3rem" }}>
          Click here to add more movies:{" "}
        </span>
        <button className="btn btn-success">
          <Link id="updateBtn" to={"/addMovie"}>
            Add Movie
          </Link>
        </button>
      </div>
      <div className="cardContainer">
        {movie.map((x) => {
          return (
            <div className="card">
              <img
                src={`https://source.unsplash.com/random/900×700/?${x.mname}`}
              />
              <div className="nameRating">
                <h3>{x.mname}</h3>
                <div className="">{x.mrating} /10</div>
              </div>
              <div className="genre">
                <div>Genre</div>
                <div>{x.mgenre}</div>
              </div>
              <div className="footer">
                <button className="btn btn-success">
                  <Link id="updateBtn" to={`/update/${x.id}`}>
                    Update
                  </Link>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(x.id);
                  }}
                >
                  Delete{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
