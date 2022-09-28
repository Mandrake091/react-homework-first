import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import PswRequisite from "./PswRequisite";
import PswToggle from "./PswToggle";
import "font-awesome/css/font-awesome.min.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
/////////////////////////////////////////7
const Signin = () => {
  const [PasswordInputType, Icon] = PswToggle();
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  ////////////////////////////////////////////////////////////////
  ///State management
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [pswRequisite, setPasswordRequisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
  });

  const handleKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
    });
  };

  const checkPassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleOnFocus = () => {
    setPasswordRequisite(true);
  };
  const handleOnBlur = () => {
    setPasswordRequisite(false);
  };

  //////////////////////////////////////////////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.error);
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-8 col-md-4">
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
              <label htmlFor="password" className="py-2 font-medium">
                Password
              </label>
              <div className="position-relative">
                <input
                  value={password}
                  onChange={checkPassword}
                  className="form-control"
                  type={PasswordInputType}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  onKeyUp={handleKeyUp}
                />

                <div className="password-toggle-icon">{Icon}</div>
              </div>
            </div>
            {pswRequisite ? (
              <PswRequisite
                capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                numberFlag={checks.numberCheck ? "valid" : "invalid"}
                pwdLenghtFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
              />
            ) : null}
            <div className="text-center">
              <button className="btn">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
