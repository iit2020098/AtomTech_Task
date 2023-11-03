import React, { useState } from "react";
import "./Signup.css";
import Forminput from "../Forminput";
import google from "../../images/g_logo.svg";
import facebook from "../../images/f_logo.svg";
import logo from "../../images/Logo.svg";

function Signup({ changeComponent }) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "johnkevine4362",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
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
      id: 3,
      name: "fullname",
      type: "text",
      placeholder: "Jiangyu",
      errorMessage: "",
      label: "Full Name",
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
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
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
    <div className="Signup">
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
      <br/>
      
      
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Forminput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="diva">
        <label >
            <input type="checkbox" name="AcceptPolicy" /></label> 
            <p>By creating an account you agree to the <a href="#">terms <br/>of use</a> and <a href="#">our privacy policy</a>.</p>
          
        </div>
        <button>Submit</button>
        <h6>
          Already Have Account
          <a href="#" onClick={() => changeComponent("Signin")}>
            {" "}
            Sign In{" "}
          </a>
        </h6>
      </form>
      <br/>
    </div>
  );
}

export default Signup;
