import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="container signup-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 welcome-section">
            <h2>Welcome Back!</h2>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <Link to={"/login"}>
              <button
                className="btn signin-btn"
                aria-label="Sign in to your account"
              >
                SIGN IN
              </button>
            </Link>
          </div>

          <div className="col-lg-6 col-md-6 signup-section">
            <h2>Create Account</h2>

            <p>Use your email for registration:</p>

            <form
              aria-labelledby="form-title"
              aria-describedby="form-instructions"
            >
              <input
                type="text"
                name="userName"
                placeholder="Enter Name"
                maxLength={22}
                className="form-control input-field"
              />
              <input
                type="email"
                name="userMail"
                placeholder="Enter mail"
                maxLength={60}
                className="form-control input-field"
              />
              <input
                type="text"
                name="userNumber"
                placeholder="Enter Number"
                maxLength={10}
                minLength={10}
                required
                className="form-control input-field"
              />
              <input
                type="password"
                name="userPassword"
                placeholder="Enter Password"
                required
                className="form-control input-field"
              />
              <input
                type="submit"
                name="register"
                value="Register"
                className="signup-btn"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
