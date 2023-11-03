import "./App.css";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import ForgotPassword from "./components/forgotpassword/Forgotpassword";
import RightSection from "./components/RightSection/RightSection";
import { useState } from "react";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Signup");

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };
  if (selectedComponent === "ForgotPassword") {
    return (<div className="app np"><ForgotPassword /></div>);
  }
  return (
    <div className="app">
      <div className="left-section">
        {selectedComponent === "Signup" ? <Signup changeComponent={handleComponentChange} /> : null}
        {selectedComponent === "Signin" ? <Signin changeComponent={handleComponentChange} /> : null}
      </div>
      <div className="right-section">
        <RightSection selectedComponent={selectedComponent} />
      </div>
    </div>
  );
}

export default App;
