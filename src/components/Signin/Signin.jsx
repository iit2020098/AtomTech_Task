import React, { useState } from "react";
import "./Signin.css";
import Forminput from "../Forminput";
import google from "../../images/g_logo.svg";
import facebook from "../../images/f_logo.svg";
import logo from "../../images/Logo.svg";
import forgotpassword from "../forgotpassword/Forgotpassword";

function Signin({ changeComponent }) {
  const [values, setValues] = useState({
    email: "",
    password: "",

  });
  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email@gmail.com",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleGoogle = (e) => {
    alert("Transferred to Google O Auth");
  };
  const handleFacebook = (e) => {
    alert("Redirected to Facebook O Auth");
  };

  console.log(values);
  return (
    <div className="Signin">
      <div>
        <img src={logo} alt="" />
        <h1>Log In</h1>
        <div className="buttons">
          <button onClick={handleGoogle}>
            <img src={google} alt="" /> Google
          </button>
          <button onClick={handleFacebook}>
            <img src={facebook} alt="" /> Facebook
          </button>
        </div>
      </div>

      <div className="line-container">
        <hr className="line" />
        Or
        <hr className="line" />
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Forminput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="division">
          <label>
            <input type="checkbox" name="rememberMe" /> Remember Me
          </label>
          <a className="fp" href="#" onClick={() => changeComponent("ForgotPassword")}>Forgot Password</a>
        </div>

        <button>Submit</button>
        <h6>
          Dont Have an Account yet
          <a href="#" onClick={() => changeComponent("Signup")}>
            {" "}
            New Account{" "}
          </a>
        </h6>
      </form>
    </div>
  );
}

export default Signin;
