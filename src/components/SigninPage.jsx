import React, { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";

const SigninPage = () => {
  let navigate = useNavigate();
  let [userpassword, setPassword] = useState("");
  let [useremail, setEmail] = useState("");

  let handleSignin = (e) => {
    e.preventDefault();
    let emailDb = window.localStorage.getItem("useremail");
    let passDb = window.localStorage.getItem("userpassword");
    console.log(emailDb, passDb);
    if (emailDb === useremail && passDb === userpassword) {
      alert("Signed in successfully🤓");
      navigate("/gallery");
    } else {
      let errorH1 = document.getElementById("signInhead");
      errorH1.innerHTML = " *email or password is incorrect!";
      errorH1.style["color"] = "red";
      errorH1.style["font-size"] = "18px";
    }
  };

  return (
    <>
      <form className="form-signin">
        <h1 id="signInhead" className="h3 mb-3 font-weight-normal">
          Please sign in
        </h1>
        <label for="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Email address"
          fdprocessedid="b1rhdc"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label for="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          fdprocessedid="h46g2n"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          fdprocessedid="a6ihz"
          onClick={handleSignin}
        >
          Sign in
        </button>
        <br />
        Don't have account?{" "}
        <button className="btn btn-primary" type="submit">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={"/signup"}
          >
            Click here..
          </Link>
        </button>
      </form>
      <div className="fake"></div>
    </>
  );
};

export default SigninPage;
