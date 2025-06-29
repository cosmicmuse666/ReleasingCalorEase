import React from "react";
import loginimg from "./assets/img3.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

function Auth() {
  let [mail, setMail] = useState("");
  let [pwd, setPwd] = useState("");
  

  return (
    <div className="auth-container container-fluid">
      <div className="row vh-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={loginimg}
            alt="Login Illustration"
            className="auth-image img-fluid"
          />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="login-form-wrapper">
            <h1 className="text-center mb-4 fw-bold">Log in</h1>
           
            <div>
              <div className="form-group mb-4">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                 
                  onChange={(ev) => {
                    setMail(ev.target.value);
                  }}
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                 
                  onChange={(ev) => {
                    setPwd(ev.target.value);
                  }}
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-green btn-lg" onClick={async () => {
                  var formData = new FormData();
                  formData.append("mail", mail);
                  formData.append("pwd", pwd);
                 

                  var output = await fetch("http://localhost:5000/auth/signup", {
                    method: "POST",
                    body: formData,
                  })
                  var result = await output.json();
                  console.log(result);



                  


                }} >
                 Log in
                </button>
              </div>
              {/* <p className="text-center">
                Don't have an account?{" "}
                <Link to="/register" className="text-link">
                  Register here
                </Link>
              </p> */}
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Auth;
