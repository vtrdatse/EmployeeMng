import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { USER } from "../DATA";

const LoginPage = () => {
  // // React States
  // const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [queryForm, setQueryForm] = useState({
    username: "",
    password: "",
  });

  // // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

  // const errors = {
  //   uname: "Invalid Username",
  //   pass: "Invalid Password"
  // };

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();

  //   var { uname, pass } = document.forms[0];

  //   // Find user login info
  //   const userData = database.find((user) => user.username === uname.value);

  //   // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //   }
  // };

  // // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!queryForm.username || !queryForm.password) {
      toast.error("username and password is required!");
      return;
    }

    const foundUser = USER.find(
      (user) =>
        user.username === queryForm.username &&
        user.password === queryForm.password
    );
    if (!foundUser) {
      toast.error("Data incorrect or found user!");
      return;
    }

    toast.success("Successfully!");

    if (foundUser.role === "man") {
      navigate("/dash/" + foundUser.id);
      return;
    }
    navigate("/info/" + foundUser.id);
    return;
    // console.log(foundUser);
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label className="name">Username </label>
          <input
            type="text"
            className="input"
            name="uname"
            onChange={(e) =>
              setQueryForm({ ...queryForm, username: e.target.value })
            }
          />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label className="name">Password </label>
          <input
            type="password"
            className="input"
            name="pass"
            onChange={(e) =>
              setQueryForm({ ...queryForm, password: e.target.value })
            }
          />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="button-container">
          <button id="login">Log in</button>
        </div>
        <div id="register" className="button-container">
          <label>Want to become a part of us? </label>
          <a id="link-register" href="./register">
            Join here!
          </a>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div id="title" className="title">
          Sign In
        </div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default LoginPage;
