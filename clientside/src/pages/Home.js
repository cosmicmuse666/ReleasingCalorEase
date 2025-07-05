import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  let [mail, setMail] = useState("");
  let [pwd, setPwd] = useState("");
  let[check, setCheck]=useState();
  let[backendmsg, setBackendmsg]=useState("");


  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="welcome-heading">Welcome to ByteWise</h1>
        <p>
          Your mindful companion for mastering your nutrition <br />
          Nurture your Inner Peace <br />
        </p>

        {!showLogin && (
          <button
            className="cta-button rounded-pill"
            onClick={() => setShowLogin(true)}
          >
            Ready to Thrive
          </button>
        )}
      </div>

      {showLogin && (
        <div className="login-modal " style={{ marginBottom: "6rem" }}>
          <button
            className="btn-close"
            onClick={() => setShowLogin(false)}
            aria-label="Close"
          >
            ✖️
          </button>
          {/* <div className="login-form-wrapper"> */}
          <h1>Sign up</h1>
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}
          <div>
            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn-green"
              onClick={async () => {
                var formData = new FormData();
                formData.append("mail", mail);
                formData.append("pwd", pwd);
                // alert(mail);

                var output = await fetch("http://localhost:5000/auth/signup", {
                  method: "POST",
                  body: formData,
                });
                var result = await output.json();
                setCheck(true);
                setBackendmsg(result.message);
                console.log(result);
                // setSuccess("Sign up successful!");
                // setError("");
                //   navigate("/track");

                // if (result) {
                //   setTimeout(() => {
                //     window.location.href = "/track";
                //   }, 1500);
                // } else {
                //   setError("Please try again.");
                //   setSuccess("");
                // }
              }}
            >
              Sign up
            </button>

            {check?<div><p>Success </p>{backendmsg}</div>  :''}
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-link">
                Register here
              </Link>
            </p>
          </div>
          {/* </div> */}
        </div>
      )}

      <div className="features-section">
        <div className="feature-card">
          <h3 className="fw-bold">Track Your Meals</h3>
          <p>
            Easily log your daily food intake to stay on top of your calorie
            consumption.
          </p>
        </div>
        <div className="feature-card">
          <h3 className="fw-bold">Monitor Progress</h3>
          <p>Visualize your journey with insightful progress.</p>
        </div>
        <div className="feature-card">
          <h3 className="fw-bold">Stay Motivated</h3>
          <p>
            Set goals, earn achievements, and stay motivated on your path to a
            healthier lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
