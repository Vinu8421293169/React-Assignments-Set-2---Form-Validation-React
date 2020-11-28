import React, { useState } from "react";
import "../styles/App.css";
import Form from "./form";

const App = () => {
  const [username, setUsername] = useState("");

  const extractUserName = (email) => {
    let username = "";
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") break;
      username += email[i];
    }
    setUsername(username);
  };

  return (
    <div id="main">
      {!username && <Form extractUserName={extractUserName}></Form>}
      {username && "welcome"}
      {username && `Hello ${username}`}
    </div>
  );
};

export default App;
