
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="form-box">
        <h1>Student Registration Form</h1>

        <input type="text" placeholder="Student Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Course" />
        <input type="tel" placeholder="Mobile Number" />

        <button>Register</button>
      </div>
    </div>
  );
}

export default App;