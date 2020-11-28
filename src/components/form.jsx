import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [allError, setAllError] = useState("");

  function alphanumeric(TCode) {
    for (var i = 0; i < TCode.length; i++) {
      var char1 = TCode.charAt(i);
      var cc = char1.charCodeAt(0);

      if (
        (cc > 47 && cc < 58) ||
        (cc > 64 && cc < 91) ||
        (cc > 96 && cc < 123)
      ) {
      } else {
        return false;
      }
    }

    return true;
  }

  const numericString = (str) => {
    if (typeof str !== "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Name Error");
    } else if (!alphanumeric(name)) {
      setNameError("Name is not alphanumeric");
    } else {
      setNameError("");
    }

    if (!email) {
      setEmailError("Email Error");
    } else if (!email.includes("@")) {
      setEmailError("Email must contain @");
    } else {
      setEmailError("");
    }

    if (!phoneNumber) {
      setPhoneNumberError("Phone Number Error");
    } else if (!numericString(phoneNumber)) {
      setPhoneNumberError("Phone Number must contain only numbers");
    } else {
      setPhoneNumberError("");
    }

    if (!password) {
      setPasswordError("Password Error");
    } else if (password.length <= 6) {
      setPasswordError("Password must contain atleast 6 letters");
    } else {
      setPasswordError("");
    }

    if (nameError || emailError || phoneNumberError || passwordError) {
      setAllError("All fields are mandatory");
      return;
    } else {
      setAllError("");
    }

    props.extractUserName(email);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      Name:
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        data-testid="name"
      ></input>
      {nameError}
      <br />
      <br />
      Email:
      <input
        onChange={(e) => setEmail(e.target.value)}
        data-testid="email"
      ></input>
      {emailError}
      <br />
      <br />
      Gender:
      <select data-testid="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br />
      <br />
      Phone Number:
      <input
        data-testid="phoneNumber"
        onChange={(e) => setPhoneNumber(e.target.value)}
      ></input>
      {phoneNumberError}
      <br />
      <br />
      Password:
      <input
        onChange={(e) => setPassword(e.target.value)}
        data-testid="password"
        type="password"
      ></input>
      {passwordError}
      <br />
      <br />
      {allError}
      <button type="submit" data-testid="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
