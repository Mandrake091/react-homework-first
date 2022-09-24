import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-md-4">
          <h1 className="mb-5 text-center">React Homework</h1>
          <h2 className="text-center pb-3">Sign in to your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                type="email"
              />
            </div>
            <div className="form-label">
              <label className="py-2 font-medium">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                type="password"
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
