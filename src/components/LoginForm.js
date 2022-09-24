import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className="container">
      <h1>Welcome</h1>
      <div className="row justify-content-center">
        <div className=" col-12 col-lg-4">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
                name="email"
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="">
              <label
                htmlFor="password"
                name="password"
                id="password"
                className="form-label"
              >
                Password
              </label>
              <input
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
                type="password"
                className="form-control border border-danger"
                id="exampleInputPassword1"
                aria-describedby="passwordHelp"
              />
            </div>
            <div className="mb-3 message">
              - At least one uppercase <br/>
              - At least one lowercase <br/>
              - At least a number <br/>
              - Minimum 8 characters
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
