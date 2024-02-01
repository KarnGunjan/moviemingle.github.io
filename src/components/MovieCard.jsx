// import React, { useState, useEffect } from "react";
// import axiosInstance from "./Helper/axiosInstance";

// const MovieCard = () => {
//   let [movie, setMovie] = useState([]);
//   useEffect(() => {
//     let fetchData = async () => {
//       let { data } = await axiosInstance.get("/posts");
//       setMovie(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="card" style={{ width: "18rem" }}>
//       {movie.map((x) => {
//         return (
//           <>
//             <img
//               className="card-img-top"
//               src=".../100px180/"
//               alt="Card image cap"
//             />
//             <div className="card-body">
//               <h5 className="card-title">{x.mname}</h5>
//               <h6>{x.mgenre}</h6>
//               <h6>{x.mprice}</h6>
//             </div>{" "}
//           </>
//         );
//       })}
//     </div>
//   );
// };

// export default MovieCard;
