import React, { useState } from "react";
import "./Forgotpassword.css";
import Forminput from "../Forminput";

import logo from "../../images/Logo.svg";


function Forgotpassword({ changeComponent }) {
  const [values, setValues] = useState({
    email: "",
  });
  const inputs = [
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email@gmail.com",
      errorMessage: "It should be a valid email address!",
      label: "Email Address",
      required: true,
    },
    
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
 
  console.log(values);
  return (
    <div className="Forgotpassword">
      <div className="center-div">
        <img src={logo} alt="" />
        <br/>
        <br/>
        <h1>Recover</h1>
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
        <button>Submit</button>
        
      </form>
    </div>
  );
}

export default Forgotpassword;
