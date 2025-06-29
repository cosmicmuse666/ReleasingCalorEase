import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

export default function Login() {
  const [open, setOpen] = useState(false);

  return (
    <div className="login-bg">
      <div className="login-container">
        {!open && (
          <button
            className="submit-button"
            onClick={() => setOpen(true)}
          >
            Track your Calories
          </button>
        )}
        {open && (
          <div className="login-modal">
            <button
              className="btn-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >X</button>
            <div className="login-form-wrapper">
              <h1 className="text-center mb-4 fw-bold">Login</h1>
              <form action="http://localhost:5000/auth/login" method="post">
                <div className="form-group mb-4">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="form-label fw-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-green btn-lg">
                    Login
                  </button>
                </div>
                <p className="text-center">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-link">
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}