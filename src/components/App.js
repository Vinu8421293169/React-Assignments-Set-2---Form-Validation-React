import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "male",
    phoneNumber: "",
    password: ""
  });

  const [errormsg, Seterrormsg] = useState("");
  const [wlcmsg, Setwlcmsg] = useState("");
  const [open, Setopen] = useState(false);

  const handleSubmit = () => {
    console.log(user);
    if (
      user.name === "" ||
      user.email === "" ||
      user.gender === "" ||
      user.phoneNumber === "" ||
      user.password === ""
    ) {
      Seterrormsg("All fields are mandatory");
    } else if (!user.name.match(/^[a-zA-Z0-9_ ]*$/)) {
      Seterrormsg("Name is not alphanumeric");
    } else if (!user.email.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/)) {
      Seterrormsg("Email must contain @");
    } else if (
      user.gender != "male" &&
      user.gender != "female" &&
      user.gender != "others"
    ) {
      Seterrormsg("Please identify as male, female or others");
    } else if (!user.phoneNumber.match(/^[0-9]*$/)) {
      Seterrormsg("Phone Number must contain only numbers");
    } else if (user.password.length < 6) {
      Seterrormsg("Password must contain atleast 6 letters");
    } else {
      // Setopen(true);
      Seterrormsg(`Hello ${user.name}`);
    }
  };

  return (
    <div id="main">
      Name :{" "}
      <input
        type="text"
        name="name"
        data-testid="name"
        value={user.name}
        onChange={(e) => {
          let usercopy = { ...user };
          usercopy.name = e.target.value;
          setUser(usercopy);
        }}
      />
      <br />
      Email Address :{" "}
      <input
        type="text"
        name="email"
        data-testid="email"
        value={user.email}
        onChange={(e) => {
          let usercopy = { ...user };
          usercopy.email = e.target.value;
          setUser(usercopy);
        }}
      />
      <br />
      Gender :{" "}
      <input
        type="text"
        name="gender"
        data-testid="gender"
        value={user.gender}
        onChange={(e) => {
          let usercopy = { ...user };
          usercopy.gender = e.target.value;
          setUser(usercopy);
        }}
      />
      <br />
      Phone Number :{" "}
      <input
        type="text"
        name="number"
        data-testid="phoneNumber"
        value={user.phoneNumber}
        onChange={(e) => {
          let usercopy = { ...user };
          usercopy.phoneNumber = e.target.value;
          setUser(usercopy);
        }}
      />
      <br />
      Password :{" "}
      <input
        type="password"
        name="password"
        data-testid="password"
        value={user.password}
        onChange={(e) => {
          let usercopy = { ...user };
          usercopy.password = e.target.value;
          setUser(usercopy);
        }}
      />
      <br />
      <br />
      <button data-testid="submit" onClick={handleSubmit}>
        {" "}
        Submit
      </button>
      <p>{errormsg} </p>
    </div>
  );
};

export default App;
