import React from "react";
import SignupImg from "./SignUp.png";
import LogininImg from "./Login.png";
import "./RightSection.css"


function RightSection({ selectedComponent }) {
  let imageUrl = "";

  if (selectedComponent === "Signup") {
    imageUrl = SignupImg;
  } else if (selectedComponent === "Signin") {
    imageUrl = LogininImg;
  }

  return (
    <div className="right-section">
      <img src={imageUrl} alt={selectedComponent} />
    </div>
  );
}

export default RightSection;
