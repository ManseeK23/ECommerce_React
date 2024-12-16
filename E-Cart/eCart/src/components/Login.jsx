import React from "react";

const Login = () => {
  return (
    <>
      <div className="container signup-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 welcome-section">
            <h2>Hello There!</h2>
            <p>Enter your signin credentials to start exploring.</p>
          </div>

          <div className="col-lg-6 col-md-6 signup-section">
            <h2>Sign In</h2>

            <p>Enter your email and password:</p>

            <form
              aria-labelledby="form-title"
              aria-describedby="form-instructions"
            >
              <input
                type="email"
                name="userMail"
                placeholder="Enter mail"
                maxLength={60}
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
                value="SignIn"
                className="login-btn"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
