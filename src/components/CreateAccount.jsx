import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  let navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [userpassword, setPassword] = useState("");
  let [useremail, setEmail] = useState("");

  let createAccount = () => {
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("userpassword", userpassword);
    window.localStorage.setItem("useremail", useremail);
    navigate("/login");
  };
  let handleCancel = () => {
    navigate("/");
  };
  return (
    <>
      <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">Please fill the details</h1>
        <label for="inputEmail" class="sr-only">
          UserName
        </label>
        <input
          type="text"
          id="inputEmail"
          class="form-control"
          placeholder="User Name"
          fdprocessedid="b1rhdc"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          fdprocessedid="b1rhdc"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          fdprocessedid="h46g2n"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          class="btn btn-primary mx-3"
          type="submit"
          onClick={createAccount}
        >
          Create Account
        </button>
        <button class="btn btn-primary" type="submit" onClick={handleCancel}>
          Cancel
        </button>
      </form>
      <div className="fake"></div>
    </>
  );
};

export default CreateAccount;
