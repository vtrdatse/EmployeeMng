import React, { useState } from 'react';

const RegisterPage = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info

  const errors = {
    uname: "Invalid Username",
    pass: "Invalid Password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    // var { uname, pass } = document.forms[0];

    // // Find user login info
    // const userData = database.find((user) => user.username === uname.value);

    // // Compare user info
    // if (userData) {
    //   if (userData.password !== pass.value) {
    //     // Invalid password
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   // Username not found
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className='name'>Full Name </label>
          <input type="text" name="uname" className='input' required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label className='name'>Date of birth </label>
          <input type="date" className='input' required></input>
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label className='name'>Email </label>
          <input type="email" className='input' required></input>
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label className='name'>Phone number </label>
          <input type="text" className='input'  required></input>
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label className='name'>Apply for position </label>
          <select className='select-container'>
            <option value={"Manager"}>Select</option>
            <option value={"Manager"}>Manager</option>
            <option value={"Technician"}>Technician</option>
            <option value={"Security"}>Security</option>
            <option value={"Labor"}>Labor</option>
            <option value={"HR"}>HR</option>
            <option value={"Reception"}>Reception</option>
            <option value={"Staff"}>Staff</option>
          </select>
        </div>
        <div class="input-container">
          <div className='name'>CV</div>
          <label for="attach-project-file-cv">                     
            <input type="file" name="cv"  id="attach-project-file-cv" accept=".pdf,.doc,.docx,.jpg,.png" />
          </label>
          <div class="txt-sm">Supported format: PDF, DOC, DOCX, JPG, PNG</div>         

        </div>
        <div className="button-container">
          <a class='button1' href="./">Cancel</a>
          <a class='button2' >Submit</a>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div id="title" className="title">Apply For Job</div>
        {isSubmitted ? <div>Summit successfully!</div> : renderForm}
      </div>
    </div>
  );
};

export default RegisterPage;




